import { createStore, combineReducers } from 'redux';
import favoritesReducer from './favouritesReducer.js';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;
