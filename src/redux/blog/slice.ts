import { Status } from '../types/statusEnum';
import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogs, fetchSingleBlog } from './asyncActions';
import { BlogSliceState } from './types';


const initialState: BlogSliceState = {
  blogItems: [],
  blogItem: null,
  status: Status.LOADING,
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = Status.LOADING;
        state.blogItems = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.blogItems = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.status = Status.ERROR;
        state.blogItems = [];
      })
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = Status.LOADING;
        state.blogItem = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.blogItem = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state) => {
        state.status = Status.ERROR;
        state.blogItem = null;
      });
  },
});



export default blogSlice.reducer;
