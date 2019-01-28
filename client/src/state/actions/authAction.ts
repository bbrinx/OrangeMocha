import { Action, Dispatch } from 'redux';

export interface ActionSetAuthToken extends Action {
  type: 'SET_AUTH_TOKEN';
  token: string;
}

export interface ActionSetAuthTokenError extends Action {
  type: 'SET_AUTH_TOKEN_ERROR';
  errorMessage: string;
}

export type AuthActions = ActionSetAuthToken | ActionSetAuthTokenError;

function dispatchSetAuthToken(token: string): ActionSetAuthToken {
  return {
    token,
    type: 'SET_AUTH_TOKEN',
  };
}

function dispatchSetAuthTokenError(e: Error): ActionSetAuthTokenError {
  return {
    errorMessage: e.message,
    type: 'SET_AUTH_TOKEN_ERROR',
  };
}

export function actionSetAuthToken(token: string) {
  return (dispatch: Dispatch) => {
    try {
      dispatch(dispatchSetAuthToken(token));
    } catch (err) {
      return dispatch(dispatchSetAuthTokenError(err));
    }
  };
}
