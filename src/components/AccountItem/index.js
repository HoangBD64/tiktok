import React from 'react';

import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://giadinh.mediacdn.vn/296230595582509056/2024/7/24/5-1721732190080555689411-1721733086612-1721733086711989915799-1721787512031-1721787512310108398260.jpg"
                alt="hoangbd"
            ></img>

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Dinh Hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}></span>
            </div>
        </div>
    );
};

export default AccountItem;
