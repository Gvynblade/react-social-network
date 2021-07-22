import React from 'react'

import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';
import Styles from './profileInfo.module.css'
import userNoPhoto from '../../../assets/img/user-no-photo.png'
import {cleanEmptyInObject} from '../../../utils/helpers/object-helpers'


const ProfileInfo = (props) => {

    const onNewPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveUserAvatar(e.target.files[0], props.profile.userId)
        }
    }

    if (!props.profile.photos) {
        return <Preloader />
    } else {

        let contacts = {...props.profile.contacts}

        cleanEmptyInObject(contacts);

        contacts = Object.keys(contacts).map( key => {
            return <a key={props.profile.fullName + "'s " + key + " link"} href={props.profile.contacts[key]} rel="noreferrer" className={Styles.contactLink + ' ' + Styles[key]} target="_blank" title={props.profile.fullName + "'s " + key + " link"}></a>
        })

        return <>
            <div className={Styles.profileInfo}>

                <div className={Styles.profileInfo__container}>

                    <div className={Styles.profileInfo__photo}>
                        {props.isOwner && <div className={Styles.profileInfo__photoUploadWrapper}>
                        <input type={"file"} onChange={onNewPhotoSelected} className={Styles.profileInfo__photoUploadForm} placeholder={"Styles.profileInfo__photo"}/>
                    </div>}
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : userNoPhoto }
                        alt={props.profile.fullName}
                        />
                </div>

                <div className={Styles.profileInfo__nameAndStatus}>

                    <h1 className={Styles.username}>{props.profile.fullName}</h1>

                    <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>

                </div>

            </div>

            <div className={Styles.contactLinks}>
                {contacts}
            </div>

            <img
                className={Styles.profileInfo__cover}
                src={props.bgimg ? props.profile.bgimg : props.profile.defaultBgImg}
                alt={props.profile.fullName + "'s cover"}
                />

        </div>

        <div className={Styles.profileDescription}>

            {props.profile.aboutMe ? props.profile.aboutMe : null}

            {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Не ищу работу'}
        </div>
    </>
}

}

export default ProfileInfo
