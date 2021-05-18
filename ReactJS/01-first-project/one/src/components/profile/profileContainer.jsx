import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';

import {
  getProfile,
  getProfileStatus
} from '../../redux/profile-selectors';
import { getAuthID } from '../../redux/auth-selectors'
import {
  requestProfile,
  requestStatus,
  saveUserAvatar,
  updateStatus
} from '../../redux/profile-reducer';
import Profile from './profile';

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : this.props.authUserID;
        if (!userID) {
            userID = this.props.authUserID;
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.requestProfile(userID)
        this.props.requestStatus(userID)
    }

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile()
        }
    }

    render () {

        return <Profile {...this.props}
                isOwner={!this.props.match.params.userID}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                saveUserAvatar={this.props.saveUserAvatar} />

    }

}

let mapStateToProps = (state) => {

  return {
    profile: getProfile(state),
    status: getProfileStatus(state),
    authUserID: getAuthID(state)
  }
}


export default compose (
    connect(mapStateToProps, {requestProfile, requestStatus, updateStatus, saveUserAvatar}),
    withRouter
) (ProfileContainer)
