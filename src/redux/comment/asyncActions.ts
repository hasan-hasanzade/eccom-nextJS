import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "./types";
import axios from "../../axios";

export const fetchComment = createAsyncThunk('comment/fetchComment', async () => {
   const { data } = await axios.get<Comment[]>('/comments');
   return data as Comment[];
 });
 
 export const fetchCommentPost = createAsyncThunk(
    'comment/fetchCommentPost',
    async (text: string) => {
      const { data } = await axios.post<Comment>('/comment/post', { text }); // Return a single comment, not an array
      return data as Comment;
    },
  );