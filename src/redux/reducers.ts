import {
  ADD_FAVOURITE,
  FETCH_MOVIES,
  ReduxActionType,
  ReduxStateType,
  SET_SEARCH_TEXT,
} from './types';

export const initialState: ReduxStateType = {
  favourites: [],
  movies: [],
  filterMovies: [],
  searchText: '',
};

const reducer = (state = initialState, action: ReduxActionType) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.item],
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...action.movies],
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        filterMovies: [
          ...state.movies.filter((movie) =>
            movie['im:name'].label.includes(action.searchText)
          ),
        ],
        searchText: action.searchText,
      };
    default:
      return state;
  }
};

export default reducer;
