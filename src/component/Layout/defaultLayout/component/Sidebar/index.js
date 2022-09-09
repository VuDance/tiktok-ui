import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import style from './sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUserGroup,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import SuggestAccounts from './SuggestAccounts';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<FontAwesomeIcon icon={faHouse} />}
                    to={'/'}
                />
                <MenuItem
                    title="Following"
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                    to={'/following'}
                />
                <MenuItem
                    title="LIVE"
                    icon={<FontAwesomeIcon icon={faVideo} />}
                    to={'/following'}
                />
            </Menu>
            <SuggestAccounts title="Suggested accounts" />
            <SuggestAccounts title="Following accounts" />
        </div>
    );
}

export default Sidebar;
