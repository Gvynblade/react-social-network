import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';

import {
  getAuthUserID,
  getProfile,
  getStatus
} from '../../redux/profile-selectors';
import {
  requestProfile,
  requestStatus,
  updateStatus
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Profile from './profile';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : this.props.authUserID;
        this.props.requestProfile(userID)
        this.props.requestStatus(userID)
    }

    render () {

        return <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />

    }

}

let mapStateToProps = (state) => {

  return {
    profile: getProfile(state),
    status: getStatus(state),
    authUserID: getAuthUserID(state)
  }
}


export default compose (
    connect(mapStateToProps, {requestProfile, requestStatus, updateStatus}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)
