import React, { FC } from 'react';
import s from './DiscountTag.module.scss';

interface Props {
    children: React.ReactNode;
}
const DiscountTag: FC<Props> = ({ children }) => {
    return (
        <div className={s.discount__tag__root}>
            <span className={s.text_color}>{children}</span>
        </div>
    )
}

export default DiscountTag
