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

const DialogsContainer = React.lazy( () => import('./components/dialogs/dialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'))
const SettingsContainer = React.lazy(() => import('./components/settings/settingsContainer'))


class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("some error occured")
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeAPP()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="App">
                    <HeaderContainer />
                    <Sidebar />

                    <Switch>
                        { !this.props.authUserId && <Route exact path="/" render={ () => <div>Mainpage</div> }/> }
                        { this.props.authUserId && <Route exact path="/" render={ () => <Redirect to="/profile" /> }/> }
                        <Route path="/profile/:userID?" render={ withSuspense(ProfileContainer) }/>
                        <Route exact path="/messages" render={ withSuspense(DialogsContainer) }/>
                        <Route exact path="/users" render={ () => <UsersContainer /> }/>
                        <Route exact path="/login" render={ () => <Login /> }/>
                        <Route exact path="/settings" render={ withSuspense(SettingsContainer) }/>
                        <Route path="*" render={ () => <div>Error 404. Page not found</div> }/>
                    </Switch>

                    <Footer />
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    authUserId: state.auth.id
})

const AppContainer = compose (
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
