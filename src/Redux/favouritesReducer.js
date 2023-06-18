import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './favouritesActions.js';

// Initial State
const initialState = {
  favorites: [],
};

// Reducer
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
