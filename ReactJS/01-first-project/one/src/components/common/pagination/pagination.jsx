import React from "react";
import Styles from "./pagination.module.css"
import cn from 'classnames/bind'

const PaginationAlt = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 12}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)

    }

    let leftPortionPageNumber = currentPage - 6 <= 0 ? 1 : currentPage - 6;
    let rightPortionPageNumber = currentPage + 6 > pagesCount ? pagesCount : currentPage + 6;


    return <div className={Styles.pagination}>

        {currentPage > 7 ? <button onClick={() => onPageChanged(1)}>1</button> : null }

        {currentPage > 1 ? <button onClick={() => onPageChanged(currentPage - 1)}>Назад</button> : null }

            <div className={Styles.pagination__pagesBlock}>
                {pages
                    .filter( p => p >= leftPortionPageNumber &&  p <= rightPortionPageNumber)
                    .map( p => {
                    return <div key={p} className={
                            cn({
                                [Styles.pagination__selectedPage] : currentPage === p
                                }, Styles.pagination__pagebutton)
                            }
                    onClick={ (e) => { onPageChanged(p); }}>{p}</div>
                })}
            </div>

        {currentPage < pagesCount && <button onClick={() => onPageChanged(currentPage + 1)}>Вперед</button>}
        {currentPage < pagesCount - 6 && <button onClick={() => onPageChanged(pagesCount)}>{pagesCount}</button>}

    </div>

}

export default PaginationAlt;
