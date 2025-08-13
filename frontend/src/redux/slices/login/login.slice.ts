import { createSlice } from '@reduxjs/toolkit';
import type { LoginState } from '../../../utils/login/interfaces';
import { extraReducers } from './login.extraReducers';

export const initialState: LoginState = {
  loading: false,
  userList: [],
  selectedUser: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: extraReducers,
});
export const {} = loginSlice.actions;
export default loginSlice.reducer;
