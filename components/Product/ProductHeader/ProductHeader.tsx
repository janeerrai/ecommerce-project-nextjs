import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import s from './ProductHeader.module.scss';

const ProductHeader = ({ slider, cSlide }) => {
    return (
        <div className={s.product__header__root}>
            <div className={s.header__name}>
                Women's Fashion
            </div>
            <div className={s.header__carosel_navigation}>
                <span className={s.navigation}>
                    <ArrowLeft
                        onClick={(e: any) => e.stopPropagation() || slider.prev()}
                        disabled={cSlide === 0}
                    />
                </span>
                <span className={s.navigation}>
                    <ArrowRight
                        onClick={(e: any) => e.stopPropagation() || slider.next()}
                        disabled={cSlide === slider?.details()?.size - 1}
                    />
                </span>
            </div>
        </div>
    )
}

export default ProductHeader;


function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <FaAngleLeft
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
        />
    )
}

function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <FaAngleRight onClick={props.onClick} className={"arrow arrow--right" + disabeld} />
    )
}

