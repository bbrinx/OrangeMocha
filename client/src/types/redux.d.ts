declare module 'Types' {
  import { StateType } from 'typesafe-actions';
  import { AuthActions } from './state/actions';
  import rootReducer from './state/reducers';

  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = AuthActions;
}
