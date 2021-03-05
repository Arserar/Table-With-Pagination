import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectStructure,
} from './PaginationTableSlice'
import {Header} from './header/Header';
import {Pagination} from './pagination/Pagination';
import {Table} from './table/Table';
import './index.scss';

export function PaginationTable() {
    const [activePage, setActivePage] = useState(1);
    const [search, setSearch] = useState('');
    const structure = useSelector(selectStructure);
    const limit = structure.limit;
    const colsCount = structure.colsCount;
    const total = structure.total;
    const tableElements = structure.tableElements;

    function handlePageChange(pageNumber) {
        setActivePage(pageNumber);
    }

    function handleSearch(searchText) {
        setSearch(searchText);
    }

    return (
        <div className="pagination_table">
            <Header
                handleSearch={handleSearch}
            />
            <Table 
                activePage={activePage}
                total={total}
                limit={limit}
                tableElements={tableElements}
                colsCount={colsCount}
                search={search}
            />
            <Pagination
             activePage={activePage} 
             handlePageChange={handlePageChange} 
             total={total}
             limit={limit}
            />
        </div>
    );
};