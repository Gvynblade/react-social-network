import React from "react";
import Styles from "./pagination.module.css"

const LoadMore = ({totalItemsCount, pageSize, currentPage, setCurrentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let getMore = () => {
        setCurrentPage(currentPage + 1);
        onPageChanged(currentPage, pageSize)
    }

    if (currentPage <= pagesCount ) {
        return <button className={Styles.friends__getMoreBtn} onClick={getMore}>Загрузить еще...</button>
    }

    return false

}

export default LoadMore;
