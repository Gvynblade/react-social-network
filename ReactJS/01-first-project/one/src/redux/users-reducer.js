import { updateOnjectInArray } from '../utils/helpers/object-helpers';
import { usersAPI } from '../api/api';
import { toggleIsFetching } from './app-reducer';
import { setAppError} from './app-reducer'

const FOLLOW = 'users-reducer/FOLLOW';
const UNFOLLOW = 'users-reducer/UNFOLLOW';
const SET_USERS = 'users-reducer/SET-USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [ ],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
        case UNFOLLOW:{

            return {
                ...state,
                users: updateOnjectInArray(state.users, action.payload.userid, 'id', {followed: action.payload.followed})
            }
        }

        case SET_USERS:
        case SET_CURRENT_PAGE:
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, ...action.payload
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userID]
                :
                state.followingInProgress.filter(id => id !== action.userID)
            }
        }

        default: {
            return state;
        }
    }

}

// action crators

export const followAccept = (userid, followed = true) => ( {
    type: FOLLOW, payload: { userid, followed }
} )

export const unFollowAccept = (userid, followed = false) => ( {
    type: UNFOLLOW, payload: { userid, followed }
} )

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: { users }
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: { currentPage }
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: { totalUsersCount }
})

export const toggleIsFollowing = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
})

// Thunk creators

export const requestUsers = (page, pageSize) => async (dispatch) => {

    try {
        dispatch(toggleIsFetching(true))
        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export const follow = (userID) => async (dispatch) => {
    try {
        followUnfollowToggler(dispatch, userID, usersAPI.setFollow.bind(usersAPI), followAccept);
    } catch (error) {
        dispatch(setAppError(error))
    }
}


export const unFollow = (userID) => async (dispatch) => {
    try {
        followUnfollowToggler(dispatch, userID, usersAPI.setUnfollow.bind(usersAPI), unFollowAccept);
    } catch (error) {
        dispatch(setAppError(error))
    }
}

// functions

const followUnfollowToggler = async (dispatch, userID, apiMethod, actionCreator) => {
    try {
        dispatch(toggleIsFollowing(true, userID))
        let response = await apiMethod(userID)
        if (response.resultCode === 0) {
            dispatch(actionCreator(userID))
        }
        dispatch(toggleIsFollowing(false, userID))
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export default usersReducer;
