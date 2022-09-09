import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <FontAwesomeIcon
                icon={faAngleLeft}
                className={cx('icon')}
                onClick={onBack}
            />
            <h2>{title}</h2>
        </header>
    );
}

export default Header;
