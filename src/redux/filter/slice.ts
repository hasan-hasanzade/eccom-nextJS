import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const MIN = 1;
const MAX = 50;

const initialState: FilterSliceState = {
  searchValue: '',
  pageCount: 1,
  categoryName: 'all',
  sortBy: 'popular ( high to low )',
  priceRange: [MIN, MAX],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
  },
});



export const { setSearchValue, setPageCount, setCategoryName, setSortBy, setPriceRange } =
  filterSlice.actions;

export default filterSlice.reducer;
