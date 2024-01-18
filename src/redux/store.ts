// In your Redux store configuration file (e.g., store.js)

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './product/slice';
import cartReducer from './cart/slice';
import filterReducer from './filter/slice';
import authReducer from './auth/slice';
import blogReducer from './blog/slice';
import commentReducer from './comment/slice';

// Types for your state slices
import { Product } from './product/types';
import { CartSliceState } from './cart/types';
import { FilterSliceState } from './filter/types';
import { AuthSliceState } from './auth/types';
import { BlogSliceState } from './blog/types';
import { CommentSliceState } from './comment/types';

export const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth', 'cart'],
    },
    combineReducers({
      products: productReducer,
      cart: cartReducer,
      filter: filterReducer,
      auth: authReducer,
      blogs: blogReducer,
      comments: commentReducer,
    })
  ),
});

export const persistor = persistStore(store);

export type RootState = {
  products: Product;
  cart: CartSliceState;
  filter: FilterSliceState;
  auth: AuthSliceState;
  blogs: BlogSliceState;
  comments: CommentSliceState;
};

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

