import { getAuthUser } from './auth-reducer';


const SET_INITIALIZED = 'app-reducer/SET_INITIALIZED';
const TOGGLE_IS_FETCHING = 'app-reducer/TOGGLE_IS_FETCHING'
const SET_APP_ERROR = 'app-reducer/SET_APP_ERROR'


const initialState = {
    initialized: false,
    isFetching: false,
    globalError: null,
    errorLog: []
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                ...action.payload,
            }
        }

        case SET_APP_ERROR: {
            return {
                ...state,
                globalError: action.payload.error,
                errorLog: [ ...state.errorLog,
                    {
                        date: new Date(),
                        errorInfo: action.payload.error}
                ]
            }
        }

        default: {
            return state;
        }
    }

}

// action crators
export const initializingSuccess = () => ({
    type: SET_INITIALIZED,
    payload: {initialized: true}
} )

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
})

export const setAppError = (error) => ({
    type: SET_APP_ERROR,
    payload: {error}
})

// Thunk creators

export const initializeAPP = () => (dispatch) => {

    try {
        let promise = dispatch(getAuthUser())
        Promise.all([promise]).then( () => {
            dispatch(initializingSuccess())
        })
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export default appReducer;
