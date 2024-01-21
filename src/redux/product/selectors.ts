import { RootState } from '../store';


// @ts-ignore
export const productSelector = (state: RootState) => state.products.items;

// @ts-ignore

export const singleProductSelector = (state: RootState) => state.products.singleItem;