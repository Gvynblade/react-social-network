import {NavLink} from 'react-router-dom';
import React from 'react';

import Preloader from '../common/preloader/preloader';
import Styles from './header.module.css';
import userNoPhoto from '../../assets/img/user-no-photo.png'
import SearchBar from '../common/searchBar/searchBar'


const Header = (props) => {

    let headerNav = <ul>
            <li><NavLink to="/"><img src="https://www.indirtik.com/wp-content/uploads/2019/07/logo-maker-transparent-background-4.png" alt="logo" /></NavLink></li>
            <li>
                <SearchBar requestSearchResults={props.requestSearchResults} removeSearchData={props.removeSearchData}/>
            </li>
            <li><NavLink to="/users" className={`${Styles.navlink} ${Styles.allUsers}`} activeClassName={Styles.active}>All Users</NavLink></li>
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

                    <NavLink className={`${Styles.navlink} ${Styles.settings}`} to="/settings"><i className="fa fa-cog" aria-hidden="true"></i></NavLink>

                    <button className={`${Styles.navlink} ${Styles.logout}`} onClick={ props.UserLogout } ><i className="fa fa-sign-out" aria-hidden="true"></i></button>


                </div>


            </div>
        }


    } else {

        return <div className={Styles.header}>

            {headerNav}

            <div className={Styles.loginBlock}>

                <NavLink className={`${Styles.navlink} ${Styles.login}`} to="/login" title="login">Login</NavLink>

            </div>

        </div>

        }
    }

    export default Header;
