import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import s from './ProductHeader2.module.scss';
const ProductHeader2 = () => {
    return (
        <div className={s.product__header__root}>
            <div className={s.header__name}>
                Featured Sellers
            </div>
        </div>
    )
}

export default ProductHeader2
