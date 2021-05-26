import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';

import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import friendsReducer from './friends-reducer'


let reducers = combineReducers(
    {
        app: appReducer,
        auth: authReducer,
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage: usersReducer,
        friendsPage: friendsReducer,
        form: formReducer
    }
);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store

window.getErrorLog = () => {
    return store.getState().app.errorLog
}

export default store;
