export const getSearchResults = (state) => {
    return state.searchPage.searchResults
}

export const getSearchQuery = (state) => {
    return state.searchPage.searchQuery
}

export const getSearchResultsCount = (state) => {
    return state.searchPage.searchResultsCount
}

export const getSearchCurrentPage = (state) => {
    return state.searchPage.searchCurrentPage
}

export const getSearchPageSize = (state) => {
    return state.searchPage.searchPageSize
}
