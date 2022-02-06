import React, { useRef } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductCard from '../components/Product/ProductCard/ProductCard';

const Carosel = () => {
    const [pause, setPause] = React.useState(false)
    const timer = useRef<any>()



    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        duration: 1000,
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    // < ProductCard />
    //         <ProductCard />
    //         <ProductCard />
    //         <ProductCard />
    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"> <ProductCard /></div>
                </div>
                {slider && (
                    <>
                        <ArrowLeft
                            onClick={(e: any) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e: any) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </>
                )}
            </div>
            {slider && (
                <div className="dots">
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default Carosel;
function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    )
}

function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    )
}