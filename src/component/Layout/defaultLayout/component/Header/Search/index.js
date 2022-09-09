import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from './search.module.scss';
import Tippy from '@tippyjs/react/headless';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Popper from '~/component/Popper';
import Accounts from '~/component/Accounts';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 700);

    const handleResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    debounced,
                )}&type=less`,
            )
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            });
    }, [debounced]);
    const inputRef = useRef();
    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <h4 className={cx('titleAccounts')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <Accounts key={result.id} data={result} />
                        ))}
                    </Popper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    value={searchValue}
                    className={cx('search-input')}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            handleClear();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}
                <span className={cx('space')}></span>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
