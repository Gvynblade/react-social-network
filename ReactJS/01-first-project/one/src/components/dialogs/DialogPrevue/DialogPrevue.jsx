import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './DialogPrevue.module.css';


const DialogPrevue = (props) => {

    let path = "/messages/id-" + props.id;

    return (
        <div className={Styles.dialog}>

            <NavLink className={Styles.dialog__link} to={path}>

                <div className={Styles.dialog__photo}><img src={props.ava} alt={props.name}/></div>
                <div className={Styles.dialog__column}>
                    <span className={Styles.dialog__userName}>{props.name}</span>
                    <div className={Styles.dialog__message}>
                        {props.lastMsg.messageAuthorId === props.authUserId && 'Me:'} {props.lastMsg.message}
                    </div>
                </div>

            </NavLink>

            <div className={Styles.dialog__column2}>
                <span className={Styles.dialog__date}>{props.lastMsg.messageDate} </span>
                <button className={Styles.deleteBtn}>Delete</button>

            </div>

        </div>
    )
}

export default DialogPrevue;
