import React from 'react';
import Styles from './preloader.module.css'
import preloaderImg from '../../../assets/img/ajax-loader.gif'


const Preloader = (props) => {
    return <div className={Styles.wrapper} >
        <img src={preloaderImg} alt="Идет загрузка"/>
    </div>
}

export default Preloader;
