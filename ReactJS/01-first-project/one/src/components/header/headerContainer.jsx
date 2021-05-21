import { connect } from 'react-redux';
import React from 'react';

import { UserLogout } from '../../redux/auth-reducer';
import Header from './header';
import { getIsAuth, getAuthLogin, getAuthProfile, getAuthID } from '../../redux/auth-selectors'
import { getIsFetching } from '../../redux/app-selectors'
import ErrorBoundary from '../common/errorBoundary/errorBoundary'


class HeaderContainer extends React.PureComponent {

    render () {
        return <ErrorBoundary>
            <Header {...this.props} />
        </ErrorBoundary>
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getAuthLogin(state),
    isFetching: getIsFetching(state),
    profile: getAuthProfile(state),
    id: getAuthID(state)
})

export default connect (mapStateToProps, { UserLogout }) (HeaderContainer);
