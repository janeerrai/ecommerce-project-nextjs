import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import s from './ProductCard.module.scss';
import { Product } from '../../../models/Product';
import { FaCartPlus, FaStar } from "react-icons/fa";
import DiscountTag from '../../ui/DiscountTag/DiscountTag';
import CartTag from '../../ui/CartTag/CartTag';
interface Props {
    className?: string;
    product?: Product;
    nonNameTag?: boolean;
    imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>;
    // variant?: 'primary' | 'secondary'
}


const ProductCard: FC<Props> = (props) => {
    const {
        className,
        product,
        nonNameTag,
        imgProps,
    } = props;

    const rootClassName = cn(
        s.pcard__root,
        className
    )

    return (
        <Link href={`/`}>
            <a className={rootClassName}>
                <div className={s.pcard__box}>
                    <Image quality="85" src={product.imageUrl} alt='Product Image'
                        height={240}
                        width={241}
                        layout="fixed"
                        {...imgProps}
                    />
                    <div className={s.discount__position}>
                        <DiscountTag>10%</DiscountTag>
                    </div>
                    <div className={s.pcard_detail}>
                        <div className={s.left_detail_box}>
                            {/* <p> */}
                            Lorem ipsum dolor
                            {/* </p> */}
                            <br />
                            <span className={s.rating}>
                                <FaStar />&nbsp;<FaStar />&nbsp;<FaStar />
                            </span>
                            <span>&nbsp;<FaStar className={s.svg_style} />&nbsp;<FaStar className={s.svg_style} /></span>
                            <br />
                            <span>NPR8000</span>&nbsp;&nbsp;
                            <span className={s.right_detail_box_discount_end_amount}>NPR1000</span>
                        </div>
                        <div className={s.right_detail_box}>
                            <CartTag><FaCartPlus /></CartTag>
                        </div>
                    </div>

                </div></a>

        </Link>
    )
}

export default ProductCard
