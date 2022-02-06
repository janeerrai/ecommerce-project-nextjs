import React, { useRef } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import SubMenu from '../SubMenu/SubMenu';
import { CAROUSEL, MENU_ITEM } from './data';
import s from './Menu.module.scss';
import Image from 'next/image';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from 'keen-slider/react';

const Menu = () => {
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

    return (
        <div className={s.menu__root}>
            <div className={s.menu__section}>
                <nav>
                    <ul>
                        {
                            MENU_ITEM.map((item: any, index: number) => (
                                <li key={index}><a>{item.name}</a>
                                    <span className={s.arrow__icon}><FaChevronRight /></span>
                                    <div className={s.menu__submenu}>
                                        <SubMenu data={item.subMenu} />
                                    </div>
                                </li>)
                            )
                        }
                    </ul>
                </nav>
            </div>
            <div className={`${s.menu__carosel} navigation-wrapper`}>
                <div ref={sliderRef} className="keen-slider">
                    {
                        CAROUSEL.map((item, index) => (
                            <div className={`keen-slider__slide`} key={index} >
                                <Image quality="85" src={item.imageUrl} alt='Product Image'
                                    height={280}
                                    width={1000}
                                    layout="fixed"
                                />
                                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolores earum exercitationem, adipisci odit ea nemo rem vero aliquam quod eveniet! Perspiciatis distinctio molestias eveniet optio, quas laborum placeat velit? */}
                            </div>
                        ))
                    }
                </div>
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
        </div>
    )
}

export default Menu
