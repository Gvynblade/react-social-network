export const getFriendsData = (state) => {
    return state.friendsPage.friends
}

export const getTotalFriendsCount = (state) => {
    return state.friendsPage.totalFriendsCount
}

export const getFriendsCurrentPage = (state) => {
    return state.friendsPage.currentPage
}

export const getFriendsPageSize = (state) => {
    return state.friendsPage.pageSize
}
