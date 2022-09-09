import style from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountsItem({ accounts }) {
    return (
        <div className={cx('item')}>
            <img src={accounts.avatar} className={cx('avatar')} />
            <div className={cx('itemInfor')}>
                <div className={cx('itemName')}>
                    <h4 className={cx('itemTitle')}>{accounts.nickname}</h4>
                    {accounts.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx('icon')}
                        />
                    )}
                </div>
                <p
                    className={cx('itemDesc')}
                >{`${accounts.first_name} ${accounts.last_name}`}</p>
            </div>
        </div>
    );
}

export default AccountsItem;
