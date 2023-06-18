import { createStore, combineReducers } from 'redux';
import favoritesReducer from './favouritesReducer.js';

// Combine Reducers
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

// Create Store
const store = createStore(rootReducer);

export default store;
