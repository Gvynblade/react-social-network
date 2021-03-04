import React from "react";
import { NavLink } from 'react-router-dom';

import userNoPhoto from '../../../assets/img/user-no-photo.png'
import Styles from './user.module.css'

const User = ({user, followingInProgress, unFollow, follow}) => {
    return <div className={Styles.usersitem}>

    <span>
    <NavLink to={'/profile/' + user.id}>
    <img src={user.photos.small != null ? user.photos.small: userNoPhoto} alt={`${user.name} avatar`} />
    </NavLink>


    {user.followed ?
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
            unFollow(user.id)
        }} >unfollow</button>
        :
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
            follow(user.id)
        }}>Follow</button>
    }
    </span>

    <span>
    <div>{user.name}</div>
    <div>{user.status}</div>
    <div>{'u.location.country'}, {'u.location.city'}</div>
    </span>

    </div>
}

export default User
