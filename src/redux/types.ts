import { MovieType } from '../components/Movie/Movie-types';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const GET_MOVIE = 'GET_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

enum REDUX_ACTION_TYPE {
  ADD_FAVOURITE = 'ADD_FAVOURITE',
  GET_MOVIE = 'GET_MOVIE',
  FETCH_MOVIES = 'FETCH_MOVIES',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
}

export type ReduxStateType = {
  favourites: MovieType[];
  movies: MovieType[];
  filterMovies: MovieType[];
  searchText: string;
};

export type ReduxActionType = {
  type: REDUX_ACTION_TYPE;
  item: MovieType;
  movies: MovieType[];
  searchText: string;
};
