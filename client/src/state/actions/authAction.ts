import { action } from 'typesafe-actions';

export enum AuthActionTypes {
  SET_AUTH_TOKEN = '@@auth/SET_AUTH_TOKEN',
  SET_AUTH_TOKEN_ERROR = '@@auth/SET_AUTH_TOKEN_ERROR',
}

export const setAuthToken = (token: string) => action(AuthActionTypes.SET_AUTH_TOKEN, token);
