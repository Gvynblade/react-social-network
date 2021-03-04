const ADD_DIALOG = 'dialogs-reducer/ADD-DIALOG';

const initialState = {

  dialogsData: [
    {
      prev: {
        id: 1,
        ava: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
        name: 'Volodya',
        date: '1h ago',
        lastMsg: 'Окай'
      },

      dialogarr: [
        {
          messageAuthorId: 3,
          messageId: 115,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'Здаров',
          messageDate: ''

        },
        {
          messageAuthorId: 2,
          messageId: 116,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'React Js is awesome!',
          messageDate: ''

        },
        {
          messageAuthorId: 1,
          messageId: 117,
          messageAuthorAva: 'https://sun9-20.userapi.com/impf/c855628/v855628629/147a89/mzpg71Q0aVo.jpg?size=200x0&quality=90&sign=7d6a7866cb8f9df1c8880b3398de0d4c&ava=1',
          messageAuthorPage: '',
          message: 'Окай',
          messageDate: ''

        }
      ]
    },

    {
      prev: {
        id: 2,
        ava: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
        name: 'Александр Королев',
        date: 'Yesterday',
        lastMsg: 'Даниил!'
      },

      dialogarr: [
        {
          messageAuthorId: 0,
          messageId: 118,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'Здаров',
          messageDate: ''

        },
        {
          messageAuthorId: 0,
          messageId: 119,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'React Js is awesome!',
          messageDate: ''

        },
        {
          messageAuthorId: 2,
          messageId: 120,
          messageAuthorAva: 'https://sun9-6.userapi.com/impf/c848736/v848736283/abeea/tc2iTb2To_k.jpg?size=200x0&quality=90&sign=a1aa31ec4208755be3a2c303a23e82b7&ava=1',
          messageAuthorPage: '',
          message: 'Даниил!',
          messageDate: ''

        }
      ]
    },
    {

      prev: {
        id: 3,
        ava: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
        name: 'Вован Stalker',
        date: '2d ago',
        lastMsg: 'Стой, на жарку нарвешься'
      },

      dialogarr: [
        {
          messageAuthorId: 0,
          messageId: 121,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'Здаров',
          messageDate: ''

        },
        {
          messageAuthorId: 0,
          messageId: 122,
          messageAuthorAva: '',
          messageAuthorPage: '',
          message: 'React Js is awesome!',
          messageDate: ''

        },
        {
          messageAuthorId: 2,
          messageId: 123,
          messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
          messageAuthorPage: '',
          message: 'Стой, на жарку нарвешься',
          messageDate: ''

        }
      ]
    },

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
        stateCopy.newDialogText = '';

        return stateCopy;

    }

    default: return state;
  }

}

// action creators

export const addDialogActionCreator = (message) => ( {
    type: ADD_DIALOG,
    message
  } )

export default dialogsReducer;
