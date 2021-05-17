import React from 'react'

import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';
import Styles from './profileInfo.module.css'
import userNoPhoto from '../../../assets/img/user-no-photo.png'


const ProfileInfo = (props) => {

    const onNewPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveUserAvatar(e.target.files[0], props.profile.userId)
        }
    }

    if (!props.profile.photos) {
        return <Preloader />
    } else {
        return <div className={Styles.profileInfo}>

            <div className={Styles.profileInfo__container}>

                <div className={Styles.profileInfo__photo}>
                    {props.isOwner && <div className={Styles.profileInfo__photoUploadWrapper}>
                        <input type={"file"} onChange={onNewPhotoSelected} className={Styles.profileInfo__photoUploadForm} placeholder={"Styles.profileInfo__photo"}/>
                    </div>}
                    <img
                        src={props.profile.photos.small ? props.profile.photos.small : userNoPhoto }
                        alt={props.profile.fullName}
                    />
                </div>

                <div>

                    <ul>
                        <li>{props.profile.fullName}</li>
                        {props.profile.aboutMe ? <li>{props.profile.aboutMe}</li> : null}
                        <li>Поиск работы: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Не ищу работу'}</li>
                        <li>

                            {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook} rel="noreferrer" target="_blank">Fb</a> : null}
                            {props.profile.contacts.website ? <a href={props.profile.contacts.website} rel="noreferrer" target="_blank">Web</a> : null}
                            {props.profile.contacts.vk ? <a href={props.profile.contacts.vk} rel="noreferrer" target="_blank">Vk</a> : null}
                            {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter} rel="noreferrer" target="_blank">Twi</a> : null}
                            {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram} rel="noreferrer" target="_blank">Ins</a> : null}
                            {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube} rel="noreferrer" target="_blank">YoT</a> : null}
                            {props.profile.contacts.github ? <a href={props.profile.contacts.github} rel="noreferrer" target="_blank">Git</a> : null}
                            {props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink} rel="noreferrer" target="_blank">Main</a> : null}

                        </li>
                    </ul>

                    <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>

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
