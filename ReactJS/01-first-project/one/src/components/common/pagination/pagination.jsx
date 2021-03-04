import React from "react";
import Styles from "./pagination.module.css"

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)

    }

    return <div className={Styles.pagination}>
    {pages.map( p => {
        return <span key={p} className={props.currentPage === p ? Styles.selectedPaginationPage : null}
        onClick={ (e) => { props.onPageChanged(p); }}>{p}</span>
    })}
    </div>
}

export default Pagination;
