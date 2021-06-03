import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withErrorBoundary } from '../hoc/errorBoundary/withErrorBoundary'
import {
    getSearchResults,
    getSearchQuery,
    getSearchResultsCount,
    getSearchCurrentPage,
    getSearchPageSize
} from '../../redux/search-selectors'
import {
    requestSearchResults,
    setCurrentPage,
    removeSearchData
} from '../../redux/search-reducer'
import Styles from './search.module.css'
import User from '../users/user/user'
import {
    follow,
    unFollow,
} from '../../redux/users-reducer';
import {
    getFollowingInProgress
} from '../../redux/users-selectors';
import { usersAPI } from '../../api/api'
import LoadMore from '../common/pagination/loadMore'

const Search = React.memo ( (props) => {

    useEffect(() => {
        if (props.searchResults.length === 0 && !!props.match.params.searchQuery && props.searchResultsCount !== 0) {
            props.requestSearchResults(usersAPI.searchUsers, props.match.params.searchQuery)
        }
    }, [props.searchResultsCount])

    let userslist = props.searchResults.map( u => <User
        key={u.id}
        user={u}
        followingInProgress={props.followingInProgress}
        unFollow={props.unFollow}
        follow={props.follow} />
)

if (!props.match.params.searchQuery) {
    return <main>
        <h1>Search phraze is empty</h1>
    </main>
}

return <main>
    <h1>Search query : {props.searchQuery}</h1>
    <div className={Styles.search__resultsCount}>Results total: {props.searchResultsCount}</div>
    <div className={Styles.seach__resultsList}>
        {props.searchResultsCount === 0 ? "Sorry, nothing found. Try using a different search query" : userslist }
    </div>

    <LoadMore
        totalItemsCount={props.searchResultsCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        onPageChanged={props.requestSearchResults}
        apiMethod={usersAPI.searchUsers}
        searchQuery={props.searchQuery}
        searchMode={true} />

</main>

})

const mapStateToProps = (state) => ({
    searchResults: getSearchResults(state),
    searchQuery: getSearchQuery(state),
    searchResultsCount: getSearchResultsCount(state),
    currentPage: getSearchCurrentPage(state),
    pageSize: getSearchPageSize(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose (
    withErrorBoundary,
    withRouter,
    connect(mapStateToProps, {requestSearchResults, follow, unFollow, setCurrentPage, removeSearchData})
) (Search)
