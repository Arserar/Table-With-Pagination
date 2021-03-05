import { configureStore } from '@reduxjs/toolkit';
import tableStructureReducer from '../features/pagination_table/PaginationTableSlice'

export default configureStore({
  reducer: {
    tableStructure: tableStructureReducer,
  },
});
