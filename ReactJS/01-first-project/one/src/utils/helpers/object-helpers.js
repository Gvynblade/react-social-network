export const updateOnjectInArray = (items, itemID, objectPropName, newObjProps) => {
    return items.map( u => {
        if (u[objectPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    } )

}
