import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import React from "react";
import { getIsAuth } from '../../redux/auth-selectors'


let mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state)
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render () {

            if (!this.props.isAuth) return <Redirect to={'/login'} />

            return <Component {...this.props} />
        }

    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);

    return connectedAuthRedirectComponent
}
