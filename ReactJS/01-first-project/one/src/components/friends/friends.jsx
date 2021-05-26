import React, {useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withErrorBoundary} from '../hoc/errorBoundary/withErrorBoundary'
import {getFriendsData} from '../../redux/friends-selector'
import {requestFriends} from '../../redux/friends-reducer'
import User from '../users/user/user'
import {
  follow,
  unFollow,
} from '../../redux/users-reducer';
import {
  getFollowingInProgress
} from '../../redux/user-selectors';
import Styles from './friends.module.css'

const Friends = (props) => {

    useEffect ( () => {
        if (props.friends.length === 0) {
            props.requestFriends()
        }
    }, [props])

    let friendslist = props.friends.map( u => <User
                    key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unFollow={props.unFollow}
                    follow={props.follow}
                    />
            )

    return <main>
        friends: {props.friends.length}

        <div className={Styles.friends__list}>

            {friendslist}

        </div>
    </main>
}

const mapStateToProps = (state) => ({
    friends: getFriendsData(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, {requestFriends, follow, unFollow})
) (Friends)
