
export const getDate = () => {
    let date = new Date()
    return {
        date: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        month: date.getMonth() + 1 < 10 ? '0' + ( date.getMonth() + 1 ) : ( date.getMonth() + 1 ),
        year: date.getFullYear(),
        hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }
}
