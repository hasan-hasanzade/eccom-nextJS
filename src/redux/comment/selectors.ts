import { RootState } from '../store';

export const commentSelector = (state: RootState) => state.comments.comments;
export const commentTextSelector = (state: RootState) => state.comments.commentText;