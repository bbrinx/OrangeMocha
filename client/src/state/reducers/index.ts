import { combineReducers } from 'redux';
import { authReducer, AuthState } from './authReducer';

export interface ApplicationState {
  auth: AuthState;
}

export const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
});
