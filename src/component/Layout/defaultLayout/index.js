import Header from '~/component/Layout/defaultLayout/component/Header';
import Sidebar from '~/component/Layout/defaultLayout/component/Sidebar';
import classNames from 'classnames/bind';
import style from './defaultLayout.module.scss';

const cx = classNames.bind(style);
function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('main_content')}>{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
