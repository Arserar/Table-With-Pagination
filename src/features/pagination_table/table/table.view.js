import React from 'react';
import { Cell, Column, DisabledCell } from './Table';

const CODES = {
  A: 65,
  Z: 90
}

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() + (Math.ceil(Math.random() * 1000)) }`;
}

function toCell(index, id, value) {
  return (
    <Cell 
      id={id}
      value={value}
      key={id}
    />
  );
}

function toDisabledCell(index) {
  return (
    <DisabledCell
      key={generateKey(index)}
    />
  );
}

function toColumn(col, index, handleSort) {
  return (
    <Column key={col} col={col} index={index} handleSort={handleSort} />
  );
}

function createRow(index, content, hidden) {
  return (
    <div
     style={hidden ? {display: 'none'} : {}}
     key={index}
     className="pagination_table__row"
    >
      <div className="pagination_table__row-info">{index ? index : ''}</div>
      <div className="pagination_table__row-data">{content}</div>
    </div>
  );
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function isRowContain(text, row) {
  let isRowContainText = false;
  Object.keys(row).forEach((id) => {
    if (row[id].indexOf(text) > -1) isRowContainText = true;
  });
  return isRowContainText;
}

export function viewTablePage(tableElements,pageNumber = 1,colCount=5, searchText='', handleColumn) {
    const pageName = ''+pageNumber;
    const page = {};
    Object.keys(tableElements).forEach((id) => {
      if (id.split(':')[0] === pageName) {
        page[id] = tableElements[id];
      }
    });
    const colsCount = CODES.A + colCount <= CODES.Z ? colCount : CODES.Z - CODES.A + 1;
    const rows = [];
    let rowStructure = {};

    Object.keys(page).forEach((id) => {
      const rowIndex = id.split(':')[1];
      rowStructure[rowIndex] = rowStructure[rowIndex] ? rowStructure[rowIndex] : {};
      rowStructure[rowIndex][id] = page[id];
    });

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map((col, index) => toColumn(col, index, handleColumn))

    rows.push(createRow(null, cols))

    
    Object.keys(rowStructure).forEach((index) => {
      const keys = Object.keys(rowStructure[index]);
      let cells = keys.map((id, index) => toCell(index, id, page[id]));
      const restNumber = colCount - keys.length;
      const rest = Array(restNumber).fill('').map((_, index) => toDisabledCell(index))
      cells = cells.concat(rest);
      rows.push(createRow(index, cells, !isRowContain(searchText, rowStructure[index])))
    });

    return rows
}