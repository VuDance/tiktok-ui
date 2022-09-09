import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function MenuItem({ title, icon, to }) {
    return (
        <NavLink
            className={(nav) => cx('menuItem', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('itemIcon')}>{icon}</span>
            <span className={cx('itemTitle')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropType.string.isRequired,
    icon: PropType.node.isRequired,
};
export default MenuItem;
