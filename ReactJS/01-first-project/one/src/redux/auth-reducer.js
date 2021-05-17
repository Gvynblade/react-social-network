import { stopSubmit } from 'redux-form';

import { authAPI, securityAPI } from '../api/api';


const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const SET_USER_PROFILE = 'auth-reducer/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'auth-reducer/TOGGLE_IS_FETCHING'
const SET_CAPTCHA_URL = "auth-reducer/SET_CAPTCHA_URL"

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
    profile: {}
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case TOGGLE_IS_FETCHING:
        case SET_CAPTCHA_URL: {

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
    type: SET_USER_PROFILE, payload: {...data}
} )

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
})

export const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}

})

// Thunk creators

export const getAuthUser = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    try{
        const response =  await authAPI.getAuthUser();
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, login, email, true));
            let data = await authAPI.getAuthUserProfile(id)
            dispatch(setAuthUserProfile(data))
            dispatch(toggleIsFetching(false))
        }
    } catch (error) {
        debugger
    }

}

export const UserLogin = (authEmail, authPassword, authRememberMe, captcha) => async (dispatch) => {
    try{
        const response = await authAPI.login(authEmail, authPassword, authRememberMe, captcha);
        if (response.resultCode === 0) {
            dispatch(getAuthUser())
        }  else {
            if (response.resultCode === 10) {
                dispatch(requestCaptcha())
            }
            let message = response.messages.length > 0 ? response.messages[0] : "some error"
            let action = stopSubmit('loginForm', {_error: message})
            dispatch(action)
        }
    } catch (error) {
        debugger
    }
}

export const requestCaptcha = () => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptcha();
        const captchaUrl = response.url;
        dispatch(setCaptcha(captchaUrl))
    } catch (error) {
        debugger
    }

}

export const UserLogout = () => async (dispatch) => {

    try {

        let response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    } catch (error) {
        debugger
    }
}

export default authReducer;
