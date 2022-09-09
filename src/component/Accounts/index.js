import classNames from 'classnames/bind';
import style from './accounts.module.scss';

const cx = classNames.bind(style);

function Accounts({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={data.avatar} alt="hha" />
            </div>
            <div className={cx('item')}>
                <h4>
                    <p className={cx('itemTitle')}>{data.full_name}</p>
                </h4>
                <p className={cx('itemDesc')}>{data.nickname}</p>
            </div>
        </div>
    );
}

export default Accounts;
