import Link from 'next/link';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import s from './ProductCard2.module.scss';

const ProductCard2 = ({ product }) => {
    return (
        <Link href={`/`}>
            <a className={s.pcard2__root}>
                <div className={s.pcard2__box}>
                    <Image quality="85" src={product.imageUrl} alt='Product Image'
                        height={200}
                        width={200}
                        layout="fixed"
                    />
                    <div className={s.pcard2__detail}>
                        Category Name
                    </div>
                </div>
            </a>

        </Link >
    )
}

export default ProductCard2
