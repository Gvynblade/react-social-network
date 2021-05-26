import { toggleIsFetching, setAppError } from './app-reducer';
import { usersAPI } from '../api/api';

const ADD_FRIENDS = "friends-reducer/ADD_FRIENDS"

const initialState = {
    friends: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FRIENDS: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: {
            return state;
        }
    }
}

// action ceators

export const setFriends = (friends) => ({
    type: ADD_FRIENDS,
    payload: {friends}
})

// thunk creators

export const requestFriends = () => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const response = await usersAPI.getFriends()
        if (response.error === null) {
            dispatch(setFriends(response.items))
            dispatch(toggleIsFetching(false))
        }

    } catch (error) {
        dispatch(setAppError(error))
    }
}

export default friendsReducer;
