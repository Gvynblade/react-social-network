import { compose } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import {
  follow,
  requestUsers,
  setCurrentPage,
  unFollow,
} from '../../redux/users-reducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/user-selectors';
import Preloader from '../common/preloader/preloader';
import Users from './users';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render () {

        return <div>

            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
                />

        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose (
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, requestUsers}
    )
) (UsersContainer)
