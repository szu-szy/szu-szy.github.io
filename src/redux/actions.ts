import { MovieType } from '../components/Movie/Movie-types';
import { ADD_FAVOURITE, FETCH_MOVIES, SET_SEARCH_TEXT } from './types';

export const addFavourite = (item: MovieType) => ({
  type: ADD_FAVOURITE,
  item,
});

export const fetchMovies = (movies: MovieType[]) => ({
  type: FETCH_MOVIES,
  movies,
});

export const filterMovies = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});
