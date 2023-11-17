import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/statusEnum';
import { fetchComment, fetchCommentPost } from '../comment/asyncActions';
import { CommentSliceState } from '../comment/types';

const initialState: CommentSliceState = {
  comments: [],
  commentText: '',
  status: Status.LOADING,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentText: (state, action: PayloadAction<string>) => {
      state.commentText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.comments = action.payload;
      })
      .addCase(fetchComment.rejected, (state) => {
        state.status = Status.ERROR;
        state.comments = [];
      })
      .addCase(fetchCommentPost.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCommentPost.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.comments.push(action.payload);
      })
      .addCase(fetchCommentPost.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setCommentText } = commentSlice.actions;

export default commentSlice.reducer;
