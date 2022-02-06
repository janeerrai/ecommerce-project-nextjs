import React from 'react';
import s from './HeaderTop.module.scss';

const HeaderTop = () => {
    return (
        <div className={s.header__top__container}>
            <div className={s.flex__item}>
                Supports
            </div>
            <div className={s.flex__item}>
                FAQs
            </div>
            <div className={s.flex__item}>
                How to Buy?
            </div>
            <div className={s.flex__item}>
                Become Seller
            </div>
            <div className={s.flex__item}>
                Seller Login
            </div>
        </div>
    )
}

export default HeaderTop
