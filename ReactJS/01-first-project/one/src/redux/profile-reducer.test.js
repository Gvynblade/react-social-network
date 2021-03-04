import { addPostActionCreator } from './profile-reducer';

import profileReducer from './profile-reducer';

let state = {
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

    ]

};

it( 'new post should be added', () => {

    // 1. Test data

    let action = addPostActionCreator("hey there")

    // 2. Action
    let newState = profileReducer( state, action)

    // 3. Expectation

    expect(newState.postsData.length).toBe(4);
})

it( 'new post text be "hey there"', () => {

    // 1. Test data

    let action = addPostActionCreator("hey there")

    // 2. Action
    let newState = profileReducer( state, action)

    // 3. Expectation

    expect(newState.postsData[0].message).toBe("hey there");
})
