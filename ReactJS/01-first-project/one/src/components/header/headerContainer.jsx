import { connect } from 'react-redux';
import React from 'react';

import { UserLogout } from '../../redux/auth-reducer';
import Header from './header';


class HeaderContainer extends React.Component {


    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    profile: state.auth.profile,
    id: state.auth.id
})

export default connect (mapStateToProps, { UserLogout }) (HeaderContainer);
