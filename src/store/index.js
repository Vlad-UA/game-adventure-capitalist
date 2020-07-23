import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from '../localStorage/localStorage';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));
