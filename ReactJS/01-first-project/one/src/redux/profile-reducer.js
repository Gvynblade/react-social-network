
import { profileAPI } from '../api/api';

import { toggleIsFetching } from './app-reducer';

import { setAppError} from './app-reducer'

import { getDate } from '../utils/helpers/getdate'

import { removeObjectFromArray, updateOnjectInArray } from '../utils/helpers/object-helpers'

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'profile-reducer/SET_STATUS'
const SET_NEW_AVATAR = 'profile-reducer/SET_NEW__AVATAR'
const DELETE_POST = 'profile-reducer/DELETE_POST'
const UPDATE_POST_LIKESCOUNT = 'profile-reducer/UPDATE_POST_LIKESCOUNT'

const initialState = {

    profile: {
        defaultBgImg: 'https://d1lx3ohi20yyaq.cloudfront.net/file/pic/photo/2018/10/cab54266980bde39098ecd146f04761c_1024.jpg',
        bgimg: null

    },

    status: "",

    postsData: [
        {
            id: 4,
            date: '21.04.2021 at 09:00',
            message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
            likesCount: 0
        },
        {
            id: 3,
            date: '01.01.2021 at 14:00',
            message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
            likesCount: 250
        },
        {
            id: 2,
            date: '01.03.2020 at 04:26',
            message: 'Fist day of spring! Yay!!!! :)',
            likesCount: 0
        },
        {
            id: 1,
            date: '29.02.2020 at 16:11',
            message: 'Мой первый пост',
            likesCount: 5
        }

    ]

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {

            let date = getDate()

            return {
                ...state,
                postsData: [
                    {
                        id: state.postsData.length + 1,
                        date: `${date.date}.${date.month}.${date.year} at ${date.hour}:${date.minutes}`,
                        message: action.message,
                        likesCount: 0
                    },
                    ...state.postsData
                ]
            };

        }

        case SET_STATUS: {
            return {
                ...state, ...action.payload
            }
        }

        case SET_USER_PROFILE:
        case SET_NEW_AVATAR: {
            return {
                ...state, profile: {...state.profile, ...action.payload}
            }
        }

        case DELETE_POST: {
            return {
                ...state, postsData: removeObjectFromArray(state.postsData, action.payload.postId, 'id')
            }
        }

        case UPDATE_POST_LIKESCOUNT : {
            return {
                ...state,
                postsData: updateOnjectInArray(state.postsData, action.payload.postId, 'id', {likesCount: action.payload.likesCount})
            }
        }

        default: {
            return state;
        }
    }

}

// action crators

export const addPost = (message) => ( {
    type: ADD_POST,
    message
} )

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: { ...profile }
})

export const setUserStatus = (status) => ({
    type: SET_STATUS,
    payload: { status }
})

export const setNewAvatar = (photos) => ({
    type: SET_NEW_AVATAR,
    payload: { photos }
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: { postId }
})

export const updatelikesCount = (postId, likesCount) => ({
    type: UPDATE_POST_LIKESCOUNT,
    payload: { postId, likesCount }
})

// Thunk creators

export const requestProfile = (userID) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.getProfile(userID)
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(response));
    } catch (error) {
        dispatch(setAppError(error))
    }
}


export const requestStatus = (userID) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.getStatus(userID)
        dispatch(toggleIsFetching(false));
        dispatch(setUserStatus(response));
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.updateStatus(status);
        dispatch(toggleIsFetching(false));
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export const saveUserAvatar = (file, userID) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.updateAvatar(file);
        if (response.resultCode === 0) {
            dispatch(setNewAvatar(response.data.photos));
        }
    } catch (error) {
        dispatch(setAppError(error))
    }
}

export default profileReducer;
