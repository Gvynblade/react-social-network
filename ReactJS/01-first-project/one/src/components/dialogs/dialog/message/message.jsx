import React from 'react'
import Styles from './message.module.css'
import {NavLink} from 'react-router-dom';



const Message = (props) => {
    return <div className={Styles.message}>
        <div className={`${Styles.message__item} ${props.isOwner ? Styles.owner : Styles.interlocutor}`}>
            <div className={Styles.message__column}>
                <NavLink to={props.profileUrl}>
                    <img className={Styles.message__ava} src={props.ava} alt={props.name} />
                </NavLink>
                <span className={Styles.message__date}>{props.date}</span>
            </div>
            <div className={Styles.message__column2}>
                <span className={Styles.message__userName}>
                    <NavLink to={props.profileUrl}>
                        {props.name}
                    </NavLink>
                </span>
                <div className={Styles.message__text}>{props.message}</div>
                { props.isOwner && <button className={Styles.message__deleteBtn} onClick={() => {
                    props.deleteMessage(props.id, props.positionInArray)
                }}>delete</button> }
            </div>
        </div>
    </div>
}

export default Message;
