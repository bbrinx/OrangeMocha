import { createStore, Store } from 'redux';
import {ApplicationState, rootReducer} from './reducers';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  const store = createStore(
    rootReducer,
    initialState,
  );
  return store;
}
