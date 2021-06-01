import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"

import { UserLogout } from '../../redux/auth-reducer';
import Header from './header';
import { getIsAuth, getAuthLogin, getAuthProfile, getAuthID } from '../../redux/auth-selectors'
import { getIsFetching } from '../../redux/app-selectors'
import { requestSearchResults } from '../../redux/search-reducer'


class HeaderContainer extends React.PureComponent {

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getAuthLogin(state),
    isFetching: getIsFetching(state),
    profile: getAuthProfile(state),
    id: getAuthID(state)
})

export default compose (
    withErrorBoundary,
    connect (mapStateToProps, { UserLogout, requestSearchResults })
) (HeaderContainer);
