import { createSlice } from '@reduxjs/toolkit';
import { createTableStructure } from './table/table.structure';

const defaultValues = {
    colCount: 5,
    limit: 50,
    total: 102
}

const tableStructure = createTableStructure(defaultValues.total,defaultValues.limit,defaultValues.colCount);

export const tableStructureSlice = createSlice({
  name: 'tableStructure',
  initialState: {
    colCount: tableStructure.colCount,
    tableElements: tableStructure.tableElements,
    limit: tableStructure.limit,
    total: tableStructure.total,
  },
  reducers: {
    changeElementValue: (state,action) => {
      const id = action.payload.id;
      const value = action.payload.value;
      state.tableElements[id] = value;
    },
  },
});

export const { changeElementValue } = tableStructureSlice.actions;

export const selectStructure = state => state.tableStructure;

export default tableStructureSlice.reducer;
