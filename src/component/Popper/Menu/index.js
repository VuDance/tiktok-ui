import classNames from 'classnames/bind';
import style from './menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Popper from '~/component/Popper';
import Button from '~/component/Button/Button';
import Header from './ChangeLanguage/Header';
import { useState } from 'react';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <Button
                    key={index}
                    to={item.to}
                    block
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                >
                    {item.border ? (
                        <div className={cx('borderLogin')}></div>
                    ) : (
                        <></>
                    )}
                    <span className={cx('icon')}>{item.icon}</span>
                    {item.title}
                </Button>
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((pre) =>
                                        pre.slice(0, pre.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItem()}
                    </Popper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
