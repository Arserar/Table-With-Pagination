import React from 'react';
import PaginationLibrary from "react-js-pagination";
import './pagination.scss';

export function Pagination(props) {
    return (
        <div className = "pagination_table__pagination">
            <PaginationLibrary
                activePage={props.activePage}
                itemsCountPerPage={props.limit}
                totalItemsCount={props.total}
                pageRangeDisplayed={5}
                onChange={props.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    );
};