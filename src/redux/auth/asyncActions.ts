import { createAsyncThunk } from "@reduxjs/toolkit";
import { Data } from "./types";
import axios from "../../axios";


export const fetchLogin = createAsyncThunk(
   'auth/fetchLogin',
   async (params: Record<string, string>) => {
     const { data } = await axios.post('/auth/login', params);
     return data as Data;
   },
 );
 
 export const fetchRegister = createAsyncThunk(
   'auth/fetchRegister',
   async (params: Record<string, string>) => {
     const { data } = await axios.post('/auth/register', params);
     return data as Data;
   },
 );
 
 export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
   const { data } = await axios.get('/auth/me');
   return data as Data;
 });