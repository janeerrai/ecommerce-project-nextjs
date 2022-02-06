import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footer__root}>
            <div className={s.item1}>
                <h4>Download App</h4>
                <ul>
                    <li><FaGooglePlay /></li>
                    <li><FaAppStoreIos /></li>
                </ul>
            </div>
            <div className={s.item2}>
                <h4>About Us</h4>
                <ul>
                    <li>Company Info</li>
                    <li>New and Media</li>
                </ul>
            </div>
            <div className={s.item3}>
                <h4>Information</h4>
                <ul>
                    <li>FAQs</li>
                    <li>Return and Refund Policy</li>
                    <li>Privacy policy </li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className={s.item4}>
                <h4>We Accept</h4>
                <ul>
                    <li>esewa</li>
                    <li>phone pay</li>
                    <li>khalti</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
