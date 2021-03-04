export const requiredField = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Данное поле обязательно к заполнению'
    }
}

export const minLenghtCreator = (minLenght) => (value) => {
    if (value.length < minLenght) {
        return `Недопустимая длина сообщения, сообщение не должно быть короче ${minLenght} символов`
    } else {
        return undefined
    }
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) {
        return `Недопустимая длина сообщения, сообщение не должно быть длиннее ${maxLenght} символов`
    } else {
        return undefined
    }
}
