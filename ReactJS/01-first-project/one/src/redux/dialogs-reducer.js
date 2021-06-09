import { getDate } from '../utils/helpers/getdate'
import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'dialogs-reducer/ADD-DIALOG';
const DELETE_DIALOG = 'dialogs-reducer/DELETE_DIALOG'

const initialState = {

    dialogsData: [
        {
            dialogInfo : {
                dialogWithUserId: 1257,
                dialogWithUserAva: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
                dialogWithUserName: 'Владимир Слепченков',
                dialogPositionInArr: 0,
            },
            messages :[
                {
                    messageAuthorId: 1257,
                    messageId: 115,
                    dialogWithUserName: 'Владимир Слепченков',
                    messageAuthorAva: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
                    messageAuthorPage: '/profile/1257',
                    message: 'Здаров',
                    messageDate: '01.03.2019 at 22:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 116,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '02.03.2019 at 10:26'

                },
                {
                    messageAuthorId: 1257,
                    messageId: 117,
                    dialogWithUserName: 'Владимир Слепченков',
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
                dialogWithUserName: 'Александр Королев',
                dialogWithUserAva: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
                dialogPositionInArr: 1,
            },
            messages :[
                {
                    messageAuthorId: 8120,
                    messageId: 11,
                    dialogWithUserName: 'Александр Королев',
                    messageAuthorAva: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
                    messageAuthorPage: '/profile/8120',
                    message: 'Здаров',
                    messageDate: '01.03.2020 at 20:02'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 12,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '01.03.2020 at 20:26'

                },
                {
                    messageAuthorId: 8120,
                    messageId: 13,
                    dialogWithUserName: 'Александр Королев',
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
                dialogWithUserName: 'Владимир Семёнов',
                dialogWithUserAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
                dialogPositionInArr: 2,
            },
            messages : [
                {
                    messageAuthorId: 4260,
                    messageId: 901,
                    dialogWithUserName: 'Владимир Семёнов',
                    messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Здаров',
                    messageDate: '01.03.2021 at 09:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 902,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '01.03.2021 at 10:30'

                },
                {
                    messageAuthorId: 4260,
                    messageId: 903,
                    dialogWithUserName: 'Владимир Семёнов',
                    messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Стой, на жарку нарвешься',
                    messageDate: '01.03.2020 at 16:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 902,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                    messageDate: '02.03.2021 at 10:00'

                }
            ]
        },
        {
            dialogInfo : {
                dialogWithUserId: 12240890,
                dialogWithUserName: 'Сергей Шевченко',
                dialogWithUserAva: 'https://sun1-19.userapi.com/s/v1/ig2/AyQeVL9haSZ5UN9fpPSGRiR1CCJL3FT7SC5j7EPZIUII2cdh0jqgkM28r2IIpLNqET1p674E38Em2vhKakzfvNv0.jpg?size=100x0&quality=96&crop=271,453,510,510&ava=1',
                dialogPositionInArr: 3,
            },
            messages : [
                {
                    messageAuthorId: 12240890,
                    messageId: 90155,
                    dialogWithUserName: 'Сергей Шевченко',
                    messageAuthorAva: 'https://sun1-19.userapi.com/s/v1/ig2/AyQeVL9haSZ5UN9fpPSGRiR1CCJL3FT7SC5j7EPZIUII2cdh0jqgkM28r2IIpLNqET1p674E38Em2vhKakzfvNv0.jpg?size=100x0&quality=96&crop=271,453,510,510&ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                    messageDate: '01.03.2021 at 09:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 90255,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'React Js is awesome!',
                    messageDate: '01.03.2021 at 10:30'

                },
                {
                    messageAuthorId: 12240890,
                    messageId: 90355,
                    dialogWithUserName: 'Сергей Шевченко',
                    messageAuthorAva: 'https://sun1-19.userapi.com/s/v1/ig2/AyQeVL9haSZ5UN9fpPSGRiR1CCJL3FT7SC5j7EPZIUII2cdh0jqgkM28r2IIpLNqET1p674E38Em2vhKakzfvNv0.jpg?size=100x0&quality=96&crop=271,453,510,510&ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Стой, на жарку нарвешься',
                    messageDate: '01.03.2020 at 16:26'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 90254,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                    messageDate: '02.03.2021 at 10:00'

                },
                {
                    messageAuthorId: 11248,
                    messageId: 90256,
                    dialogWithUserName: 'DenielWeb',
                    messageAuthorAva: 'https://social-network.samuraijs.com/activecontent/images/users/11248/user-small.jpg?v=17',
                    messageAuthorPage: '/profile/11248',
                    message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                    messageDate: '02.03.2021 at 10:00'

                },
                {
                    messageAuthorId: 12240890,
                    messageId: 90351,
                    dialogWithUserName: 'Сергей Шевченко',
                    messageAuthorAva: 'https://sun1-19.userapi.com/s/v1/ig2/AyQeVL9haSZ5UN9fpPSGRiR1CCJL3FT7SC5j7EPZIUII2cdh0jqgkM28r2IIpLNqET1p674E38Em2vhKakzfvNv0.jpg?size=100x0&quality=96&crop=271,453,510,510&ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Стой, на жарку нарвешься',
                    messageDate: '01.03.2020 at 16:26'

                },
                {
                    messageAuthorId: 12240890,
                    messageId: 90195,
                    dialogWithUserName: 'Сергей Шевченко',
                    messageAuthorAva: 'https://sun1-19.userapi.com/s/v1/ig2/AyQeVL9haSZ5UN9fpPSGRiR1CCJL3FT7SC5j7EPZIUII2cdh0jqgkM28r2IIpLNqET1p674E38Em2vhKakzfvNv0.jpg?size=100x0&quality=96&crop=271,453,510,510&ava=1',
                    messageAuthorPage: '/profile/4260',
                    message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                    messageDate: '01.03.2021 at 09:26'

                },
            ]
        }
    ]
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {

            let date = getDate()

            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData[action.payload.dialogPositionInArr].messages = [...state.dialogsData[action.payload.dialogPositionInArr].messages]
            stateCopy.dialogsData[action.payload.dialogPositionInArr].messages.push(
                {
                    messageAuthorId: action.payload.authorId,
                    messageId: uuidv4(),
                    dialogWithUserName: action.payload.authorName,
                    messageAuthorAva: action.payload.ava,
                    messageAuthorPage: '/profile/' + action.payload.authorId,
                    message: action.payload.message,
                    messageDate: `${date.date}.${date.month}.${date.year} at ${date.hour}:${date.minutes}`,
                }
            )

            return stateCopy;

        }

        case DELETE_DIALOG: {

            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData.splice(action.payload, 1);
            for (let i = action.payload; i < stateCopy.dialogsData.length; i++ ) {
                stateCopy.dialogsData[i].dialogInfo.dialogPositionInArr -= 1;
            }
            return stateCopy
        }

        default: return state;
    }

}

// action creators

export const addMessage = (authorId, authorName, ava, message, dialogPositionInArr) => ( {
    type: ADD_MESSAGE,
    payload: {authorId, authorName, ava, message, dialogPositionInArr}
} )

export const deleteDialog = (index) => ({
    type: DELETE_DIALOG,
    payload: index
})

export default dialogsReducer;
