import { Reducer } from 'redux';
import { AuthActionTypes } from '../actions';

export interface AuthState {
  sessionToken: string;
  errorMessage?: string;
}

const initialState: AuthState = {
  sessionToken: '',
};

export function defaulAuthState() {
  return {
    sessionToken: '',
  };
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_TOKEN: {
      return { ...state, sessionToken: action.payload };
    }
    case AuthActionTypes.SET_AUTH_TOKEN_ERROR: {
      return { ...state, errorMessage: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as authReducer };
