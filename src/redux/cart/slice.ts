import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartSliceState, CartItem } from './types';

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  items: getCartFromLS(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
    
      if (existingItem) {
        state.items = state.items.map((item) =>
          item._id === newItem._id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        state.items = [...state.items, { ...newItem, count: 1 }];
      }
      state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    decreaseItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj._id === action.payload);

      if (findItem) {
        findItem.count--;
        state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
        state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj._id === action.payload);
      if (findItem) {
        const updatedItems = state.items.filter((obj) => obj._id !== action.payload);
        const totalCount = updatedItems.reduce((sum, obj) => sum + obj.count, 0);
        const totalPrice = updatedItems.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    
        return {
          ...state,
          items: updatedItems,
          totalCount,
          totalPrice,
        };
      }
      return state;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, removeItem, decreaseItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;