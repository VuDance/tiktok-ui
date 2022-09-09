import classNames from 'classnames/bind';
import style from './popper.module.scss';

const cx = classNames.bind(style);

function Popper({ children }) {
    return <div className={cx('wraper')}>{children}</div>;
}

export default Popper;
