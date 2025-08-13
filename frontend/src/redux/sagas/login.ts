import apiClient from '../../apiClient';
import type { User } from '../../utils/login/interfaces';
import type { AppDispatch } from '../store';
import { GET_UTENTI, POST_UTENTE } from './actions/login';

export const getUtenti = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_UTENTI._REQUEST,
    });
    apiClient
      .get(`/service/api/utenti`)
      .then(({ data }: any) => {
        console.log(`/service/api/utenti/ =>`, data);
        dispatch({
          type: GET_UTENTI._SUCCESS,
          payload: data,
        });
      })
      .catch((error: any) => {
        console.log(`Error fetching /service/api/utenti:`, error);
        dispatch({ type: GET_UTENTI._ERROR });
      });
  };
};

export const getUtente = (user: string, password: string) => {
  return (dispatch: AppDispatch): Promise<User | null> => {
    dispatch({ type: POST_UTENTE._REQUEST });

    return apiClient
      .post(`/service/api/utente`, { user, password })
      .then(({ data }: any) => {
        console.log(`/service/api/utente/ =>`, data);
        dispatch({ type: POST_UTENTE._SUCCESS, payload: data.user });
        return data.user;
      })
      .catch((error: any) => {
        console.log(error);
        dispatch({ type: POST_UTENTE._ERROR });
        return null;
      });
  };
};
