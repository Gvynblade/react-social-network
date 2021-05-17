import {NavLink} from 'react-router-dom';
import React from 'react';

import Preloader from '../common/preloader/preloader';
import Styles from './header.module.css';
import userNoPhoto from '../../assets/img/user-no-photo.png'


const Header = (props) => {

    let headerNav = <ul>
            <li><NavLink to="/"><img src="https://www.indirtik.com/wp-content/uploads/2019/07/logo-maker-transparent-background-4.png" alt="logo" /></NavLink></li>
            <li><NavLink to="/profile" activeClassName={Styles.active}>profile</NavLink></li>
            <li><NavLink to="/feed" activeClassName={Styles.active}>Feed</NavLink></li>
            <li><NavLink to="/messages" activeClassName={Styles.active}>Messages</NavLink></li>
            <li><NavLink to="/users" activeClassName={Styles.active}>Users</NavLink></li>
        </ul>

    if (props.isAuth) {

        if (!props.profile.photos) {
            return <Preloader />
        } else {
            return <div className={Styles.header}>

                {headerNav}

                <div className={Styles.loginBlock}>

                    <img src={props.profile.photos.small ? props.profile.photos.small : userNoPhoto} className={Styles.profilePhoto} alt="My profile" />

                    <div className={Styles.profileName}>

                        {props.profile.fullName}

                    </div>

                    <button className={Styles.logout} onClick={ props.UserLogout } >Выход</button>


                </div>


            </div>
        }


    } else {

        return <div className={Styles.header}>

            {headerNav}

            <div className={Styles.loginBlock}>

                <NavLink to="/login">Login</NavLink>

            </div>

        </div>

        }
    }

    export default Header;
