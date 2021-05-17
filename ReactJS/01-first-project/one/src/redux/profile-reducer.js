import { stopSubmit } from 'redux-form';

import { profileAPI } from '../api/api';

const ADD_POST = 'profile-reducer/ADD-POST';
const TOGGLE_IS_FETCHING = 'profile-reducer/TOGGLE_IS_FETCHING'
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'profile-reducer/SET_STATUS'
const SET_NEW_AVATAR = 'profile-reducer/SET_NEW__AVATAR'

const initialState = {

    profile: {
        defaultBgImg: 'https://d1lx3ohi20yyaq.cloudfront.net/file/pic/photo/2018/10/cab54266980bde39098ecd146f04761c_1024.jpg',
        bgimg: null

    },

    status: "",

    postsData: [
        {
            id: 1,
            ava: 'https://v-tagile.ru/media/k2/items/cache/3a87681a8365cb10ceb54d7831ccad1f_XL.jpg',
            name: 'Урал Вагон Завод',
            date: '10 hours ago',
            message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
        },
        {
            id: 2,
            ava: 'https://v-tagile.ru/media/k2/items/cache/3a87681a8365cb10ceb54d7831ccad1f_XL.jpg',
            name: 'Урал Вагон Завод',
            date: '01.03.2020',
            message: 'Fist day of spring! Yay!!!! :)'
        },
        {
            id: 3,
            ava: 'https://v-tagile.ru/media/k2/items/cache/3a87681a8365cb10ceb54d7831ccad1f_XL.jpg',
            name: 'Урал Вагон Завод',
            date: '29.02.2020',
            message: 'Мой первый пост'
        }

    ]

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {

            return {
                ...state,
                postsData: [
                    {
                        id: state.postsData.length + 1,
                        ava: state.profile.photos.small,
                        name: state.profile.fullName,
                        date: Date(),
                        message: action.message
                    },
                    ...state.postsData
                ],
                newPostText: ''
            };

        }

        case TOGGLE_IS_FETCHING:
        case SET_STATUS: {
            return {
                ...state, ...action.payload
            }
        }

        case SET_USER_PROFILE:
        case SET_NEW_AVATAR: {
            debugger
            return {
                ...state, profile: {...state.profile, ...action.payload}
            }
        }

        default: {
            return state;
        }
    }

}

// action crators

export const addPostActionCreator = (message) => ( {
    type: ADD_POST,
    message
} )

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: { isFetching }
})

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


// Thunk creators

export const requestProfile = (userID) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.getProfile(userID)
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(response));
    } catch (error) {
        debugger
    }
}


export const requestStatus = (userID) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await profileAPI.getStatus(userID)
        dispatch(toggleIsFetching(false));
        dispatch(setUserStatus(response));
    } catch (error) {
        debugger
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
        debugger
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
        debugger
    }
}

export const updateSettings = (newProfileData) => async (dispatch, getState) => {
    try {
        const userID = getState().auth.id;
        let response = await profileAPI.updateProfile(newProfileData);
        if (response.resultCode === 0) {
            dispatch(requestProfile(userID))
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "some error"
            let action = stopSubmit('settingsForm', {_error: message})
            dispatch(action)
        }
    } catch (error) {
        debugger
    }
}

export default profileReducer;
