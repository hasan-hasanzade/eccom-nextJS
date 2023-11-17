import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import productReducer from './product/slice';
import cartReducer from './cart/slice';
import filterReducer from './filter/slice';
import authReducer from './auth/slice';
import blogReducer from './blog/slice';
import commentReducer from './comment/slice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
    blogs: blogReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
