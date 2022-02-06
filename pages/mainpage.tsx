import React from 'react'
import Header from '../components/ui/Header/Header'
import Menu from '../components/ui/Menu/Menu'
import headermain from './headermain';
import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import ProductHeader from '../components/Product/ProductHeader/ProductHeader';
import ProductCard from '../components/Product/ProductCard/ProductCard';
import ProductHeader2 from '../components/Product/ProductHeader2.tsx/ProductHeader2';
import ProductCard2 from '../components/Product/ProductCard2/ProductCard2';
import Footer from '../components/ui/Footer/Footer';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { PRODUCTS } from '../components/Product/data';
const mainpage = () => {
    // const [sliderRef] = useKeenSlider<HTMLDivElement>({
    // loop: true,
    // rtl: true,
    // slidesPerView: 4,
    // spacing: 10,
    // });

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slidesPerView: 4,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <div>
            <Header />
            <div className={styles.main__page__container}>
                {/* <div className={styles.menu__page}> */}
                <Menu />
            </div>
            {/* </div> */}
            <div className={styles.add__page}>
                <Image quality="85" src="/add1.jpg" alt='Product Image'
                    height={280}
                    width={1200}
                    layout="fixed"
                />
            </div>
            <div className={styles.card__header__container}>
                <ProductHeader slider={slider} cSlide={currentSlide} />
            </div>
            <div className={`${styles.product__section} navigation-wrapper`}>
                <div ref={sliderRef} className={`keen-slider`}>
                    {
                        PRODUCTS.map((item, index) => (<div className="keen-slider__slide" key={index}>
                            <ProductCard product={item} />
                        </div>))
                    }
                </div>
            </div>

            <div className={styles.add__page}>
                <Image quality="85" src="/fashion1.jpg" alt='Product Image'
                    height={280}
                    width={1200}
                    layout="fixed"
                />
            </div>
            <div className={styles.menu__page}>
                <ProductHeader2 />
            </div>
            <div className={styles.product__section2}>
                {PRODUCTS.slice(0, 5).map((item, index: number) => (
                    <ProductCard2 product={item} key={index} />
                ))
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default mainpage

