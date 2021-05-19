import React from 'react';
import Styles from './sideModal.module.css'



const SideModal = (props) => {

    if (props.globalError) {
        return <div className={Styles.sideModalBlock}>
            <span className={Styles.sideModalBlock__title}>Some error occured:</span>
            <div className={Styles.sideModalBlock__body}>{props.globalError.message}</div>
        </div>
    }

    return false
}

export default SideModal;
