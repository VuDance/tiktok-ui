import logo from '~/asset/img/logott.png';
import classNames from 'classnames/bind';
import style from './header.module.scss';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { moreMenu, userMenu } from '~/component/ListMenuTippy/index';
import Menu from '~/component/Popper/Menu';
import Button from '~/component/Button/Button';
import Search from './Search/index';
import { useState } from 'react';

const cx = classNames.bind(style);

function Header() {
    const [user, setUser] = useState(false);
    function handleLogin() {
        setUser(true);
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <Search />
                <div className={cx('action')}>
                    <Button upload href="./upload">
                        <FontAwesomeIcon icon={faPlus} />
                        <span className={cx('upload')}>Upload</span>
                    </Button>
                    {user ? (
                        <>
                            <Menu items={userMenu}>
                                <img
                                    className={cx('avatar')}
                                    src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-funny-spirits-illustration-png-image_5195196.jpg"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={handleLogin}>
                                Log in
                            </Button>
                            <Menu items={moreMenu}>
                                <span className={cx('menu')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                        className={cx('iconMenu')}
                                    />
                                </span>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
