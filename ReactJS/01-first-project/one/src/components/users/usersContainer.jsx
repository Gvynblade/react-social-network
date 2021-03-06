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
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/users-selectors';
import Preloader from '../common/preloader/preloader';
import Users from './users';
import { getIsFetching } from '../../redux/app-selectors'
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"


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
    withErrorBoundary,
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, requestUsers}
    )
) (UsersContainer)
