import { toggleIsFetching, setAppError } from './app-reducer';
import { usersAPI } from '../api/api';

const ADD_FRIENDS = "friends-reducer/ADD_FRIENDS"
const SET_CURRENT_PAGE = "friends-reducer/SET_CURRENT_PAGE"
const SET_TOTAL_FRIENDS_COUNT = "friends-reducer/SET_TOTAL_FRIENDS_COUNT"

const initialState = {
    friends: [],
    totalFriendsCount: 0,
    currentPage: 1,
    pageSize: 8,
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FRIENDS: {
            return {
                ...state,
                friends: [ ...state.friends, ...action.payload]
            }
        }

        case SET_CURRENT_PAGE:
        case SET_TOTAL_FRIENDS_COUNT: {
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
    payload: [...friends]
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: { currentPage }
})

export const setTotalFriendsCount = (totalFriendsCount) => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    payload: { totalFriendsCount }
})

// thunk creators

export const requestFriends = (page, pageSize) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const response = await usersAPI.getFriends(page, pageSize)
        if (response.error === null) {
            debugger
            dispatch(setFriends(response.items))
            dispatch(setTotalFriendsCount(response.totalCount))
            dispatch(toggleIsFetching(false))
        }

    } catch (error) {
        dispatch(setAppError(error))
    }
}

export default friendsReducer;
