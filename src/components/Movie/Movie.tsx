import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../redux/actions';
import { MovieType } from './Movie-types';
import { ReduxStateType } from '../../redux/types';

const Movie = () => {
  const { id } = useParams();
  const movie = useSelector<ReduxStateType, MovieType>(({ movies }) => movies.filter((movie: MovieType) => movie.id.attributes['im:id'] === id)[0]);

  const dispatch = useDispatch();

  const addToFavourites = () => {
    dispatch(addFavourite(movie));
    alert('added to favourites');
  };

  return (
    <div>
      <Link to='/movies'>Back</Link>
      <button onClick={addToFavourites}>Add to favourites</button>
      <h2>{movie['im:name'].label}</h2>
      <img src={movie['im:image'][2].label} alt="alt" />
      <p>{movie['im:contentType'].attributes.label}</p>
      <span>{movie.summary.label}</span>
    </div>
  );
};

export default Movie;