import { RootState } from '../store';

export const cartSelector = (state: RootState) => state.cart.items;
export const totalCountSelector = (state: RootState) => state.cart.totalCount;
export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;
