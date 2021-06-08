import React from 'react'
import Styles from './message.module.css'


const Message = (props) => {
    return <div className={Styles.message}>
        <div className={`${Styles.message__item} ${props.isOwner ? Styles.owner : Styles.interlocutor}`}>
            <img src={props.ava} alt={props.name} />
            <div className={Styles.message__block}>
                <span className={Styles.message__userName}>{props.name}</span>
                <div className={Styles.message__text}>{props.message}</div>
                <span className={Styles.message__date}>{props.date}</span>
            </div>
        </div>
    </div>
}

export default Message;
