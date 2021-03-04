import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


let store = {

  _state: {

    profilePage: {

      profileData:{

        id: 1,
        name: 'Урал Вагон Завод',
        thumbnail: 'https://pravdaurfo.ru/sites/default/files/rabotnik-2.jpg',
        ava: 'https://v-tagile.ru/media/k2/items/cache/3a87681a8365cb10ceb54d7831ccad1f_XL.jpg'

      },

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

      ],

      newPostText: ''

    },

    messagesPage: {

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
              messageAuthorId: 0,
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'Здаров',
              messageDate: ''

            },
            {
              messageAuthorId: 0,
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'React Js is awesome!',
              messageDate: ''

            },
            {
              messageAuthorId: 1,
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
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'Здаров',
              messageDate: ''

            },
            {
              messageAuthorId: 0,
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'React Js is awesome!',
              messageDate: ''

            },
            {
              messageAuthorId: 2,
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
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'Здаров',
              messageDate: ''

            },
            {
              messageAuthorId: 0,
              messageAuthorAva: '',
              messageAuthorPage: '',
              message: 'React Js is awesome!',
              messageDate: ''

            },
            {
              messageAuthorId: 2,
              messageAuthorAva: 'https://sun9-6.userapi.com/c639326/v639326909/2d098/ffMN62yqdeQ.jpg?ava=1',
              messageAuthorPage: '',
              message: 'Стой, на жарку нарвешься',
              messageDate: ''

            }
          ]
        },

      ],
      newDialogText: ''

    },

    sidebar: {

    }

  },

  _callSubscriber() {
    console.log('state was changed')
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }

}


export default store;
