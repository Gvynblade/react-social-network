import React from 'react'

import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';
import Styles from './profileInfo.module.css'
import userNoPhoto from '../../../assets/img/user-no-photo.png'


const ProfileInfo = (props) => {

    if (!props.profile.photos) {
        return <Preloader />
    } else {
        return <div className={Styles.profileInfo}>

            <div className={Styles.profileInfo__container}>

                <img
                    className={Styles.profileInfo__photo}
                    src={props.profile.photos.small ? props.profile.photos.small : userNoPhoto }
                    alt={props.profile.fullName}
                />

                <div>

                    <ul>
                        <li>{props.profile.fullName}</li>
                        {props.profile.aboutMe ? <li>{props.profile.aboutMe}</li> : null}
                        <li>Поиск работы: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Не ищу работу'}</li>
                        <li>

                            {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>Fb</a> : null}
                            {props.profile.contacts.website ? <a href={props.profile.contacts.website}>Web</a> : null}
                            {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}>Vk</a> : null}
                            {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}>Twi</a> : null}
                            {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>Ins</a> : null}
                            {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}>YoT</a> : null}
                            {props.profile.contacts.github ? <a href={props.profile.contacts.github}>Git</a> : null}
                            {props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>Main</a> : null}

                        </li>
                    </ul>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                </div>

            </div>

            <img
                className={Styles.profileInfo__cover}
                src={props.bgimg ? props.profile.bgimg : props.profile.defaultBgImg}
                alt={props.profile.fullName + "'s cover"}
            />

        </div>
    }

}

export default ProfileInfo
