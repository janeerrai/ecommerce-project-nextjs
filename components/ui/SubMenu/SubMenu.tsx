import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import SubSubMenu from '../SubSubMenu/SubSubMenu';
import s from './SubMenu.module.scss';

const SubMenu = ({ data }: any) => {
    return (
        <div className={s.submenu__root}>
            <nav>
                <ul>
                    {data.map((item: any, index: number) => (
                        <li key={index}><a>{item.name}
                        </a>
                            <span className={s.arrow__icon}><FaChevronRight /></span>
                            <div className={s.submenu__submenu}>
                                <SubSubMenu data={item.subSubMenu} />
                            </div>
                        </li>)
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default SubMenu
