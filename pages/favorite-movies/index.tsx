import { useSelector } from 'react-redux';
import MovieList from '../../components/movies/MovieList';

const FavoriteMoviesPage = () => {
  const favMovies = useSelector((state: any) => state.favMovies.favMovies);

  return <MovieList movies={favMovies} />;
};

export default FavoriteMoviesPage;
