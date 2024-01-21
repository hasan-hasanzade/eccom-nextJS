import { RootState } from "../store";

export const selectorUserImg = (state: RootState) => state.auth;

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);
export const authData = (state: RootState) => state.auth.data;