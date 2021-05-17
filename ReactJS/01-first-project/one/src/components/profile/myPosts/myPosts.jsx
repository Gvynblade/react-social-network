import React from 'react';

import NewPost from "./newpost/newpost"
import Post from "./post/post"
import Preloader from '../../common/preloader/preloader';
import userNoPhoto from "../../../assets/img/user-no-photo.png"

const MyPosts = React.memo( props => {

    if (!props.myProfile.photos) {
        return <Preloader />
    } else {

        let postsElements = props.myPosts.map( (p) => {


            return (
                <Post
                    key={p.id}
                    id={props.myProfile.id}
                    ava={props.myProfile.photos.small ? props.myProfile.photos.small : userNoPhoto }
                    name={props.myProfile.fullName}
                    date={p.date}
                    message={p.message}
                    />
            )
        });

            return <div>

                {props.isOwner && <NewPost
                    ava={props.myProfile.photos.small ? props.myProfile.photos.small : userNoPhoto }
                    name={props.myProfile.fullName}
                    addPost={props.addPost}
                /> }

                {postsElements}

            </div>

    }

})

export default MyPosts;
