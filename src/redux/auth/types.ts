import { Status } from '../types/statusEnum';

export type Data = {
   token: string;
   avatarUrl: string;
   fullName: string;
 };
 
 export interface AuthSliceState {
   data: null | Data;
   status: Status;
   userImageUrl: string;
 }