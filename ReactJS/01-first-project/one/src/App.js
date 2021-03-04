import './App.css';

import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';

import { initializeAPP } from './redux/app-reducer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import Preloader from './components/common/preloader/preloader';
import ProfileContainer from './components/profile/profileContainer';
import Sidebar from './components/sidebar/sidebar';
import UsersContainer from './components/users/usersContainer';
import store from './redux/redux-store';

class App extends React.Component {


    componentDidMount() {
        this.props.initializeAPP()
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader/> 
        } else {
            return (
                <div className="App">
                    <HeaderContainer />
                    <Sidebar />

                    <Route path="/profile/:userID?" render={ () => <ProfileContainer /> }/>
                    <Route exact path="/messages" render={ () => <DialogsContainer /> }/>
                    <Route exact path="/users" render={ () => <UsersContainer /> }/>
                    <Route exact path="/login" render={ () => <Login /> }/>

                    <Footer />
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
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
