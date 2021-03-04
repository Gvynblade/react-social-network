import React from 'react';

import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './profileInfo/profileInfo';
import Styles from './profile.module.css';


const Profile = (props) => {

    return(


        <main className={Styles.profile}>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

            <MyPostsContainer />

        </main>
    )
}

export default Profile;
