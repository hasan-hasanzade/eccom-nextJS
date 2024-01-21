import { Status } from '../types/statusEnum';

export type Comment = {
  _id: string;
  text: string;
  author: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
};

export interface CommentSliceState {
  comments: Comment[];
  commentText: string;
  status: Status;
}
