import React, {useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withErrorBoundary} from '../hoc/errorBoundary/withErrorBoundary'
import {
    getFriendsData,
    getTotalFriendsCount,
    getFriendsCurrentPage,
    getFriendsPageSize
} from '../../redux/friends-selectors'
import {
    requestFriends,
    setCurrentPage,
    setTotalFriendsCount
} from '../../redux/friends-reducer'
import User from '../users/user/user'
import {
    follow,
    unFollow,
} from '../../redux/users-reducer';
import {
    getFollowingInProgress
} from '../../redux/users-selectors';
import Styles from './friends.module.css'
import LoadMore from '../common/pagination/loadMore'

const Friends = React.memo( (props) => {

    useEffect ( () => {
        if (props.friends.length === 0) {
            props.requestFriends(props.currentPage, props.PageSize)
        }
    }, [props])

    let friendslist = props.friends.map( u => <User
        key={u.id}
        user={u}
        followingInProgress={props.followingInProgress}
        unFollow={props.unFollow}
        follow={props.follow} />
    )

return <main>
    friends: {props.totalFriendsCount}

    <div className={Styles.friends__list}>

        {friendslist}

    </div>

    <LoadMore
    totalItemsCount={props.totalFriendsCount}
    pageSize={props.PageSize}
    currentPage={props.currentPage}
    setCurrentPage={props.setCurrentPage}
    onPageChanged={props.requestFriends}
       />

</main>
} )

const mapStateToProps = (state) => ({
    friends: getFriendsData(state),
    totalFriendsCount: getTotalFriendsCount(state),
    currentPage: getFriendsCurrentPage(state),
    PageSize: getFriendsPageSize(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, {requestFriends, follow, unFollow, setCurrentPage, setTotalFriendsCount})
) (Friends)
