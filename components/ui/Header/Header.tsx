import React from 'react';
import { FaAlignJustify, FaMonero, FaSearch, FaShoppingCart, FaSignInAlt, FaUtensils } from 'react-icons/fa';
import Button from '../Button/Button';
import HeaderTop from '../HeaderTop/HeaderTop';
import s from './Header.module.scss';

const Header = () => {

    return (
        <>
            <HeaderTop />
            <div className={s.header__container}>
                <div className={s.nav__toggle}>

                    <input type="checkbox" id="toggleControl" className={s.toggleControl} onChange={() => console.log('hello')} />
                    <label className={s.btn} htmlFor="toggleControl">
                        <FaAlignJustify />
                    </label>
                </div>
                <div className={s.header__item1}><FaMonero /></div>
                <div className={s.header__item2}>
                    <div className={s.search__box}>
                        <form autoComplete="off">
                            <input name="name" type="text" />
                        </form>
                    </div>
                    <div className={s.search__button}>
                        <Button variant="primary">&nbsp;&nbsp;<FaSearch className={s.font__icon} /></Button>
                    </div>
                    {/* <div className={s.search__box__popup}>
                        <ul>
                            <li>hello1</li>
                            <li>hello1</li>
                            <li>hello1</li>
                            <li>hello1</li>
                        </ul>
                    </div> */}
                </div>
                <div className={s.header__item3}>
                    <div className={s.item}>
                        <FaShoppingCart />
                    </div>
                    <div className={s.item}>
                        <FaSignInAlt />
                    </div>
                    <div className={s.item}>
                        <Button variant='secondary'><FaUtensils />&nbsp; Are You Hungry?</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
