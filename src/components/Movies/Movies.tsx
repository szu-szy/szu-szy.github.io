import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions';
import { ReduxStateType } from '../../redux/types';
import { isSuccess } from '../../utils';
import Banner from '../Banner/Banner';
import { MovieType } from '../Movie/Movie-types';

const Movies = () => {
  const movies = useSelector<ReduxStateType, MovieType[]>(
    ({ movies }) => movies
  );
  const filtedMovies = useSelector<ReduxStateType, MovieType[]>(
    ({ filtedMovies }) => filtedMovies
  );
  const searchText = useSelector<ReduxStateType, string>(
    ({ searchText }) => searchText
  );
  const [currentMovies, setCurrentMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        'https://itunes.apple.com/us/rss/topmovies/limit=10/json'
      );
      if (!isSuccess(data.status)) {
        const { errors } = await data.json();
        setIsError(true);
        setErrors(errors);
        return;
      }
      const { feed } = await data.json();
      dispatch(fetchMovies(feed.entry));
    } catch (e) {
      setIsError(true);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getMovies = () =>
    movies &&
    movies.map((movie, index) => (
      <Banner key={movie.id.attributes['im:id']} movie={movie} index={index} />
    ));

  const getFilteredMovies = () =>
    filtedMovies &&
    filtedMovies.map((movie, index) => (
      <Banner key={movie.id.attributes['im:id']} movie={movie} index={index} />
    ));

  useEffect(() => {
    fetchData();
  }, []);

  return <>{searchText.length >= 3 ? getFilteredMovies() : getMovies()}</>;
};

export default Movies;
