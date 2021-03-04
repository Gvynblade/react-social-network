import { stopSubmit } from 'redux-form';

import { authAPI } from '../api/api';


const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const SET_USER_PROFILE = 'auth-reducer/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'auth-reducer/TOGGLE_IS_FETCHING'

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    profile: {}
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payload,
            }
        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: {...state.profile, ...action.payload},
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        default: {
            return state;
        }
    }

}

// action crators
export const setAuthUserData = (id, login, email, isAuth = true) => ( {
    type: SET_USER_DATA, payload: {id, login, email, isAuth}
} )

export const setAuthUserProfile = (data) => ( {
    type: SET_USER_PROFILE, payload: data
} )

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

// Thunk creators

export const getAuthUser = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response =  await authAPI.getAuthUser();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, login, email, true));
        let data = await authAPI.getAuthUserProfile(id)
        dispatch(setAuthUserProfile(data))
        dispatch(toggleIsFetching(false))
    }

}

export const UserLogin = (authEmail, authPassword, authRememberMe) => async (dispatch) => {

    let response = await authAPI.login(authEmail, authPassword, authRememberMe);
    if (response.resultCode === 0) {
        console.log(response)
        dispatch(getAuthUser())
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error"
        let action = stopSubmit('loginForm', {_error: message})
        dispatch(action)
    }
}

export const UserLogout = () => async (dispatch) => {

    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
