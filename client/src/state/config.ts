import { createStore } from 'redux';
import rootReducer from './reducers';

function configureStore(initialState?: object) {
  return createStore(rootReducer);
}

const store = configureStore();

export default store;
