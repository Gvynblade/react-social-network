import React from 'react';
import Styles from './footer.module.css';

const Footer = () => {
    return(
        <div className={Styles.footer}>
            <div className={Styles.footer__info}>
                <p>Данное веб - приложение разработано для практического изучения связки React + Redux в рамках курса <a href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8" target="_blank" rel="noreferrer">React JS путь самурая 1.0</a> и для дальнейшего улучшения навыков вне рамок указанного курса.</p>
            </div>

            <div className={Styles.footer__socials}>

                <a href="https://vk.com/warlock9300" className={Styles.footer__socialItem} target="_blank" rel="noreferrer">
                    <i className="fa fa-vk" aria-hidden="true"></i>
                </a>

                <a href="https://github.com/Gvynblade" className={Styles.footer__socialItem} target="_blank" rel="noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
