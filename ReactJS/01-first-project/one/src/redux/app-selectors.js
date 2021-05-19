export const getIsFetching = (state) => {
    return state.app.isFetching
}

export const getIsInitialized = (state) => {
    return state.app.initialized
}

export const getAppGlobalError = (state) => {
    return state.app.globalError
}
