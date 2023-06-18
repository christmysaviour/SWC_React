// Action Types
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action Creators
export const addToFavorites = (movie) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie,
  };
};

export const removeFromFavorites = (movieId) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movieId,
  };
};
