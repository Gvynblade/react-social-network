import React from 'react';
import Styles from './post.module.css';

const Post = (props) => {
    return(
        <div className={Styles.post}>
            <div className={Styles.post__header}>
                <img src={props.ava} alt={props.name} className={Styles.post__ava} />
                <div>
                    <div className={Styles.post__name}>{props.name}</div>
                    <div className={Styles.post__date}>{props.date}</div>
                </div>

                {props.isOwner && <button className={Styles.post__deleteBtn} onClick={() => {
                    props.deletePost(props.id)
                }} title="Delete post"><i className="fa fa-trash-o" aria-hidden="true"></i></button> }
            </div>

            <div className={Styles.post__message}>
                {props.message}
            </div>

            <div className={Styles.post__footer}>
                <button className={Styles.post__like} onClick={() => {
                    props.updatelikesCount(props.id, props.likesCount + 1)
                }}><i className="fa fa-heart" aria-hidden="true"></i></button> {props.likesCount}
                </div>
            </div>
        )
    }

    export default Post;
