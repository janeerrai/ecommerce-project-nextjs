import React from 'react';
import s from './SubSubMenu.module.scss';

const SubSubMenu = ({ data }: any) => {
    return (
        <div className={s.subsubmenu__root}>
            <nav>
                <ul>
                    {
                        data.map((item: any, index: number) => (
                            <li key={index}>
                                <a>{item.name}</a>
                            </li>)
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default SubSubMenu
