import { AuthActions } from '../actions';

export interface AuthState {
  token: string;
  errorMessage?: string;
}

export function defaulAuthState() {
  return {
    token: '',
  };
}

export default function authReducer(state: AuthState = defaulAuthState(), action: AuthActions): AuthState {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_AUTH_TOKEN_ERROR':
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
    return state;
  }
}
