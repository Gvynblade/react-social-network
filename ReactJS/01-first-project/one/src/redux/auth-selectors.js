export const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getAuthLogin = (state) => {
    return state.auth.login
}

export const getAuthProfile = (state) => {
    return state.auth.profile
}

export const getAuthID = (state) => {
    return state.auth.id
}

export const getAuthCaptchaUrl = (state) => {
    return state.auth.captchaUrl
}
