import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { Blog } from './types';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const { data } = await axios.get<Blog[]>('/blogs');
  return data as Blog[];
});

export const fetchSingleBlog = createAsyncThunk('blogs/fetchSingleBlog', async (id: string) => {
  const { data } = await axios.get(`/blogs/${id}`);
  return data as Blog;
});
