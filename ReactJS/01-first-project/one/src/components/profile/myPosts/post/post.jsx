import React from 'react';
import Styles from './post.module.css';

const Post = (props) => {
  return(
    <div className={Styles.post}>
      <div className={Styles.header}>
        <img src={props.ava} alt={props.name} className={Styles.ava} />
          <div>
            <div className={Styles.name}>{props.name}</div>
            <div className={Styles.date}>{props.date}</div>
          </div>
      </div>

      <div className={Styles.message}>
        {props.message}
      </div>

      <div className={Styles.footer}>
        Footer
      </div>
    </div>
  )
}

export default Post;
