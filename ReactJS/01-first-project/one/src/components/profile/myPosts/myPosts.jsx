import React from 'react';

import NewPost from "./newpost/newpost"
import Post from "./post/post"
import userNoPhoto from "../../../assets/img/user-no-photo.png"

const MyPosts = React.memo( props => {
    let postsElements = props.myPosts.map( (p) => {
        return (
            <Post
                key={p.id}
                id={props.myProfile.id}
                ava={props.myProfile.small ? props.myProfile.photos.small : userNoPhoto }
                name={props.myProfile.fullName}
                date={p.date}
                message={p.message}
                />
        )
    });

    return(
        <div>

            <NewPost
                ava={props.myProfile.small ? props.myProfile.photos.small : userNoPhoto }
                name={props.myProfile.fullName}
                addPost={props.addPost}
                />

            {postsElements}

        </div>
    )
})

export default MyPosts;
