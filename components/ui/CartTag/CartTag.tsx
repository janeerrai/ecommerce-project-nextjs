import classNames from 'classnames';
import React, { FC } from 'react';
import s from './CartTag.module.scss';

interface Props {
    children: React.ReactNode;
}
const CartTag: FC<Props> = ({ children }) => {
    return (
        <div className={s.cart__tag__root}>
            {children}
        </div>
    )
}

export default CartTag
