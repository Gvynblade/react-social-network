const ADD_DIALOG = 'dialogs-reducer/ADD-DIALOG';

const initialState = {

    dialogsData: [
        {
            dialogInfo : {
                dialogWithUserId: 1257,
                dialogPositionInArr: 0,
            },
            messages :[
                {
                    messageAuthorId: 1257,
                    messageId: 115,
                    messageAuthorAva: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
                    messageAuthorPage: '/profile/1257',
                    message: 'Здаров',
                    messageDate: '01.03.2019 at 22:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 116,
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '02.03.2019 at 10:26'

                },
                {
                    messageAuthorId: 1257,
                    messageId: 117,
                    messageAuthorAva: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
                    messageAuthorPage: '/profile/1257',
                    message: 'Окай',
                    messageDate: '02.03.2019 at 14:01'

                }

            ]
        },

        {
            dialogInfo : {
                dialogWithUserId: 8120,
                dialogPositionInArr: 1,
            },
            messages :[
                {
                    messageAuthorId: 8120,
                    messageId: 11,
                    messageAuthorAva: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
                    messageAuthorPage: '/profile/8120',
                    message: 'Здаров',
                    messageDate: '01.03.2020 at 20:02'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 12,
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '01.03.2020 at 20:26'

                },
                {
                    messageAuthorId: 8120,
                    messageId: 13,
                    messageAuthorAva: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
                    messageAuthorPage: '/profile/8120',
                    message: 'Даниил!',
                    messageDate: '01.03.2020 at 22:50'

                }
            ]
        },

        {
            dialogInfo : {
                dialogWithUserId: 4260,
                dialogPositionInArr: 2,
            },
            messages : [
                {
                    messageAuthorId: 4260,
                    messageId: 901,
                    messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Здаров',
                    messageDate: '01.03.2021 at 09:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 902,
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '01.03.2021 at 10:30'

                },
                {
                    messageAuthorId: 4260,
                    messageId: 903,
                    messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Стой, на жарку нарвешься',
                    messageDate: '01.03.2020 at 16:26'

                }
            ]
        }
    ]
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_DIALOG: {

            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData[0].dialogarr = [...state.dialogsData[0].dialogarr]
            stateCopy.dialogsData[0].dialogarr.push(
                {
                    messageAuthorId: 0,
                    messageAuthorAva: '',
                    messageAuthorPage: '',
                    message: action.message,
                    messageDate: ''
                }
            )

            return stateCopy;

        }

        default: return state;
    }

}

// action creators

export const addDialog = (message) => ( {
    type: ADD_DIALOG,
    message
} )

export default dialogsReducer;
