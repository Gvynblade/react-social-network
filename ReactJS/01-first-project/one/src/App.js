import './App.css';

import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';

import { initializeAPP } from './redux/app-reducer';
import { withSuspense } from './components/hoc/withSuspense';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import Preloader from './components/common/preloader/preloader';
import Sidebar from './components/sidebar/sidebar';
import UsersContainer from './components/users/usersContainer';
import store from './redux/redux-store';
import {getIsInitialized, getAppGlobalError } from './redux/app-selectors';
import { getAuthID } from './redux/auth-selectors';
import SideModal from './components/common/sideModal/SideModal';
import { withErrorBoundary } from './components/hoc/errorBoundary/withErrorBoundary'

const DialogsContainer = React.lazy( () => import('./components/dialogs/dialogsContainer'))
const Dialog = React.lazy(() => import('./components/dialogs/dialog/dialog'))
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'))
const SettingsContainer = React.lazy(() => import('./components/settings/settingsContainer'))
const Friends = React.lazy(() => import('./components/friends/friends'))
const Search = React.lazy(() => import('./components/search/search'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeAPP()
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <>
                    <div className="App">
                        <HeaderContainer />
                        <Sidebar />

                        <Switch>
                            { !this.props.authUserId && <Route exact path="/" render={ () => <div>Mainpage</div> }/> }
                            { this.props.authUserId && <Route exact path="/" render={ () => <Redirect to="/profile" /> }/> }
                            <Route path="/profile/:userID?" render={ withSuspense(ProfileContainer) }/>
                            <Route exact path="/messages" render={ withSuspense(DialogsContainer) }/>
                            <Route path="/messages/id-:dialogID?" render={ withSuspense(Dialog) }/>
                            <Route exact path="/friends" render={ withSuspense(Friends) }/>
                            <Route exact path="/users" render={ () => <UsersContainer /> }/>
                            <Route exact path="/login" render={ () => <Login /> }/>
                            <Route exact path="/settings" render={ withSuspense(SettingsContainer) }/>
                            <Route path="/search/:searchQuery?" render={ withSuspense(Search) }/>
                            <Route path="*" render={ () => <div>Error 404. Page not found</div> }/>
                        </Switch>

                        <Footer />
                    </div>

                    <SideModal globalError={this.props.globalError} />

                </>
        )
    }

}
}

const mapStateToProps = (state) => ({
    initialized: getIsInitialized(state),
    authUserId: getAuthID(state),
    globalError: getAppGlobalError(state)
})

const AppContainer = compose (
    withErrorBoundary,
    withRouter,
    connect (mapStateToProps, {initializeAPP})) (App)


    const SocialNetwork = (props) => {
        return <BrowserRouter>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </BrowserRouter>
    }

    export default SocialNetwork;
