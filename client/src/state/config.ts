import { applyMiddleware, compose, createStore, Store } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import {ApplicationState, rootReducer} from './reducers';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunkMiddleware, promiseMiddleware()];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  return store;
}
