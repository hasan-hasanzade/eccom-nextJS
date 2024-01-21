import { RootState } from '../store';



export const productSelector = (state: RootState) => state.products.items;

export const singleProductSelector = (state: RootState) => state.products.singleItem;