import { createSlice } from '@reduxjs/toolkit';
import { Product } from './types';
import { fetchProducts, fetchSingleProduct, fetchFilteredItems } from './asyncActions';
import { Status } from '../types/statusEnum';

interface productSliceState {
  items: Product[];
  singleItem: Product | null;
  status: Status;
}

const initialState: productSliceState = {
  items: [],
  singleItem: null,
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = Status.LOADING;
        state.singleItem = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.singleItem = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = Status.ERROR;
        state.singleItem = null;
      })
      .addCase(fetchFilteredItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchFilteredItems.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload.items;
      })
      .addCase(fetchFilteredItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { resetItems } = productSlice.actions

export default productSlice.reducer;
