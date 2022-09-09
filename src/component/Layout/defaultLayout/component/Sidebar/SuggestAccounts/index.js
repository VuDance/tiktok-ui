import style from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountsItem from './AccountsItem';
import axios from 'axios';
import { useState } from 'react';

const cx = classNames.bind(style);

function SuggestAccounts({ title }) {
    const [suggestAccounts, setSuggestAccounts] = useState([]);
    axios
        .get(
            `https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5`,
        )
        .then((res) => {
            setSuggestAccounts(res.data.data);
        });
    return (
        <div className={cx('wrapper')}>
            <span className={cx('borderTop')}></span>
            <p className={cx('title')}>{title}</p>
            {suggestAccounts.map((accounts) => (
                <AccountsItem accounts={accounts} />
            ))}

            <p className={cx('seeAll')}>See all</p>
        </div>
    );
}

export default SuggestAccounts;
