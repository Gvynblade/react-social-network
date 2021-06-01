import { toggleIsFetching } from './app-reducer';
import { setAppError} from './app-reducer'

const SET_SEARCH_RESULTS = 'search-reducer/SET_SEARCH_RESULTS'
const SET_SEARCH_QUERY = 'search-reducer/SET_SEARCH_QUERY'
const SET_SEARCH_RESULTS_COUNT = 'search-reducer/SET_SEARCH_RESULTS_COUNT'
const SET_CURRENT_PAGE = 'search-reducer/SET_CURRENT_PAGE'
const REMOVE_SEARCH_DATA = 'search-reducer/REMOVE_SEARCH_DATA'

const initialState = {
    searchResults: [],
    searchQuery: null,
    searchResultsCount: null,
    searchCurrentPage: 1,
    searchPageSize: 16
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SEARCH_RESULTS: {
            return {
                ...state, searchResults: [...state.searchResults,  ...action.payload]
            }
        }
        case SET_SEARCH_QUERY:
        case SET_SEARCH_RESULTS_COUNT:
        case SET_CURRENT_PAGE:
        case REMOVE_SEARCH_DATA: {
            return {
                ...state, ...action.payload
            }
        }

        default: {
            return state
        }
    }
}

// action creators

export const setSearchResults = (searchResults) => ({
    type: SET_SEARCH_RESULTS,
    payload: [...searchResults]
})

export const setSearchQuery = (searchQuery) => ({
    type: SET_SEARCH_QUERY,
    payload: {searchQuery}
})

export const setSearchResultsCount = (searchResultsCount) => ({
    type: SET_SEARCH_RESULTS_COUNT,
    payload: {searchResultsCount}
})

export const setCurrentPage = (searchCurrentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: { searchCurrentPage }
})

export const removeSearchData = () => ({
    type: REMOVE_SEARCH_DATA,
    payload: {
        searchResults: [],
        searchQuery: null,
        searchResultsCount: null,
        searchCurrentPage: 1
    }
})

// thunk creators

export const requestSearchResults = (apiMethod, searchQuery, currentPage = 1, pageSize = 16) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        let response = await apiMethod(searchQuery, currentPage, pageSize)
        if (response.error === null) {
            dispatch(setSearchResults(response.items));
            dispatch(setSearchQuery(searchQuery))
            dispatch(setSearchResultsCount(response.totalCount))
            dispatch(toggleIsFetching(false))
        }
    } catch (error) {
        dispatch(setAppError(error))
    }

}

export default searchReducer;
