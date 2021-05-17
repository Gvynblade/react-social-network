import React from "react";
import { NavLink } from 'react-router-dom';

import userNoPhoto from '../../../assets/img/user-no-photo.png'
import Styles from './user.module.css'

const User = ({user, followingInProgress, unFollow, follow}) => {
    return <div className={Styles.usersitem}>

    <div className={Styles.usersitem__header}>
    <NavLink to={'/profile/' + user.id}>
    <img src={user.photos.small != null ? user.photos.large: userNoPhoto} alt={`${user.name} avatar`} />
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
    </div>

    <div className={Styles.usersitem__info}>
    <div className={Styles.usersitem__name}>{user.name}</div>
    <div className={Styles.usersitem__status}>{user.status}</div>
    <div className={Styles.usersitem__location}>{'u.location.country'}, {'u.location.city'}</div>
    </div>

    </div>
}

export default User
