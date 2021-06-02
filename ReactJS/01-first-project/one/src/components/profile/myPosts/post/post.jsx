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

          <button className={Styles.post__deleteBtn}>Delete</button>
      </div>

      <div className={Styles.post__message}>
        {props.message}
      </div>

      <div className={Styles.post__footer}>
        <button>Likes</button> : {props.likesCount}
      </div>
    </div>
  )
}

export default Post;
