import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, FilteredData, Params } from "./types";
import axios from "../../axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
   const { data } = await axios.get<Product[]>('/items');
   return data as Product[];
 });
 
 export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id: string) => {
   const { data } = await axios.get(`/shop/${id}`);
   return data as Product;
 });
 
 export const fetchFilteredItems = createAsyncThunk<FilteredData, Params>(
   'products/fetchFilteredItems',
   async (params) => {
     const { searchValue, categoryName, sortBy, priceRange, currentPage, limit } = params;
     try {
       const { data } = await axios.get(
         `/getFilteredItems?q=${searchValue}&c=${categoryName}&sort=${sortBy}&page=${currentPage}&limit=${limit}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`
       );
       return data;
     } catch (error) {
       throw error;
     }
   }
 );