import { profileAPI } from '../api/api';

const ADD_POST = 'profile-reducer/ADD-POST';
const TOGGLE_IS_FETCHING = 'profile-reducer/TOGGLE_IS_FETCHING'
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'profile-reducer/SET_STATUS'

const initialState = {

    profileData:{

        id: 1,
        name: 'Урал Вагон Завод',
        thumbnail: 'https://pravdaurfo.ru/sites/default/files/rabotnik-2.jpg',
        ava: 'https://v-tagile.ru/media/k2/items/cache/3a87681a8365cb10ceb54d7831ccad1f_XL.jpg'

    },

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
                        ava: state.profileData.ava,
                        name: state.profileData.name,
                        date: Date(),
                        message: action.message
                    },
                    ...state.postsData
                ],
                newPostText: ''
            };

        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: {...state.profile, ...action.profile}
            }
        }

        case SET_STATUS: {
            return {
                ...state, status: action.status
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
    isFetching
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserStatus = (status) => ({
    type: SET_STATUS,
    status
})

// Thunk creators

export const requestProfile = (userID) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await profileAPI.getProfile(userID)
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(response));
}


export const requestStatus = (userID) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await profileAPI.getStatus(userID)
    dispatch(toggleIsFetching(false));
    dispatch(setUserStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await profileAPI.updateStatus(status);
    dispatch(toggleIsFetching(false));
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;
