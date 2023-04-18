import React from 'react';
import s from './style.module.css'

export default function FuterTitle() {
    return (
        <div className={s.container}>
            <div>
                <p className={s.title}>Contact</p>
                <p className={s.tel}>+49 999 999 99 99</p>
                <div className={s.socialIcons}>
                    <div className={s.socialIconsAlign}>
                        <img src={require('./Media/Instagram.png')} alt="Instagram" />
                        <p>instagram</p>
                    </div>
                    <div className={s.socialIconsAlign}>
                        <img src={require('./Media/WhatsApp.png')} alt="WhatsApp" />
                        <p>whatsApp</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={s.title}>Address</p>
                <p className={s.adress}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <p className={s.hours}>Working Hours:</p>
                <p className={s.day}>24 hours a day</p>
            </div>
            

        </div>
    )
}
