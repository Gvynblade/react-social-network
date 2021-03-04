import { getAuthUser } from './auth-reducer';


const SET_INITIALIZED = 'app-reducer/SET_INITIALIZED';


const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED: {

            return {
                ...state,
                initialized: true,
            }
        }

        default: {
            return state;
        }
    }

}

// action crators
export const initoalizingSuccess = () => ( {
    type: SET_INITIALIZED
} )

// Thunk creators

export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthUser())
    Promise.all([promise]).then( () => {
        dispatch(initoalizingSuccess())
    })
}

export default appReducer;
