import { getAuthUser } from './auth-reducer';


const SET_INITIALIZED = 'app-reducer/SET_INITIALIZED';
const TOGGLE_IS_FETCHING = 'app-reducer/TOGGLE_IS_FETCHING'


const initialState = {
    initialized: false,
    isFetching: false,
    globalError: null,
    errorLog: null
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

        default: {
            return state;
        }
    }

}

// action crators
export const initializingSuccess = () => ( {
    type: SET_INITIALIZED,
    payload: {initialized: true}
} )

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
})

// Thunk creators

export const initializeAPP = () => (dispatch) => {

    try {
        let promise = dispatch(getAuthUser())
        Promise.all([promise]).then( () => {
            dispatch(initializingSuccess())
        })
    } catch (error) {
        debugger
    }
}

export default appReducer;
