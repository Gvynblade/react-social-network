export const updateOnjectInArray = (items, itemID, objectPropName, newObjProps) => {
    return items.map( u => {
        if (u[objectPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    } )

}


export const removeObjectFromArray = (items, itemID, objectPropName) => {
    return items.filter( i => {
        return i[objectPropName] !== itemID
    })
}

export const cleanEmptyInObject = (obj) => {
    for (let propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName].length === 0) {
            delete obj[propName];
        }
    }
}
