import { RootState } from "../store";

export const blogSelector = (state: RootState) => state.blogs.blogItems;

export const blogItemSelector = (state: RootState) => state.blogs.blogItem;