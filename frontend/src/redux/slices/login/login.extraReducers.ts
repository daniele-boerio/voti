import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import type { LoginState, User } from '../../../utils/login/interfaces';
import { GET_UTENTI, POST_UTENTE } from '../../sagas/actions/login';
import { initialState } from './login.slice';

export const extraReducers = (builder: ActionReducerMapBuilder<LoginState>) => {
  //GET_UTENTI
  builder.addCase(GET_UTENTI._REQUEST, (state) => {
    state.loading = true;
  });
  builder.addCase(GET_UTENTI._SUCCESS, (state, action: PayloadAction<User[]>) => {
    state.loading = false;
    state.userList = action.payload;
  });
  builder.addCase(GET_UTENTI._ERROR, (state) => {
    state.loading = false;
    state.userList = initialState.userList;
  });

  //POST_UTENTE
  builder.addCase(POST_UTENTE._REQUEST, (state) => {
    state.loading = true;
  });
  builder.addCase(POST_UTENTE._SUCCESS, (state, action: PayloadAction<User>) => {
    state.loading = false;
    state.selectedUser = action.payload;
  });
  builder.addCase(POST_UTENTE._ERROR, (state) => {
    state.loading = false;
    state.selectedUser = initialState.selectedUser;
  });
};
