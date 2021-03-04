import { updateOnjectInArray } from '../utils/helpers/object-helpers';
import { usersAPI } from '../api/api';

const FOLLOW = 'users-reducer/FOLLOW';
const UNFOLLOW = 'users-reducer/UNFOLLOW';
const SET_USERS = 'users-reducer/SET-USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [ ],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {

            return {
                ...state,
                users: updateOnjectInArray(state.users, action.userid, 'id', {followed: true})
            }
        }

        case UNFOLLOW: {

            return {
                ...state,
                users: updateOnjectInArray(state.users, action.userid, 'id', {followed: false})
            }

        }

        case SET_USERS: {
            return {
                ...state, users: [ ...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
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

export const followAccept = (userid) => ( {
    type: FOLLOW, userid
} )

export const unFollowAccept = (userid) => ( {
    type: UNFOLLOW, userid
} )

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleIsFollowing = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
})

// Thunk creators

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userID) => async (dispatch) => {
    followUnfollowToggler(dispatch, userID, usersAPI.setFollow.bind(usersAPI), followAccept);
}


export const unFollow = (userID) => async (dispatch) => {
    followUnfollowToggler(dispatch, userID, usersAPI.setUnfollow.bind(usersAPI), unFollowAccept);
}

// functions

const followUnfollowToggler = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, userID))
    let response = await apiMethod(userID)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleIsFollowing(false, userID))
}

export default usersReducer;
