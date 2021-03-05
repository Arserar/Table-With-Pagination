import React from 'react';
import { useDispatch } from 'react-redux';
import {
    changeElementValue
} from '../PaginationTableSlice.js';
import {viewTablePage} from './table.view'
import './table.scss';

export function Cell(props) {
    const dispatch = useDispatch();

    return (
        <input
            className={"pagination_table__cell"}
            contentEditable
            data-id={props.id}
            value={props.value}
            onInput={(e) => {
                dispatch(changeElementValue({
                    id:props.id,
                    value: e.target.value 
                }))
            }}
        />
    );
}

export function Column(props) {
    return (
        <div
            className="pagination_table__column"
        >{props.col}</div>
    );
};

export function DisabledCell(props) {
    return (
        <div
            className={"pagination_table__cell pagination_table__disabled_cell"}
        ></div>
    );
}

export function Table(props) {
    let tableElements = props.tableElements;
    const colsCount = props.colsCount;
    const activePage = props.activePage;
    const search = props.search;

    return (
        <div className = "pagination_table__table">
            { viewTablePage(tableElements, activePage, colsCount, search)}
        </div>
    );
};