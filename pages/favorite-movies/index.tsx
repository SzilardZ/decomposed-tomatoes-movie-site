import { useSelector } from 'react-redux';
import MovieList from '../../components/movies/MovieList';

const FavoriteMoviesPage = () => {
  const favMovies = useSelector((state: any) => state.favMovies.favMovies);
  return (
    <div>
      <MovieList movies={favMovies} />
    </div>
  );
};

export default FavoriteMoviesPage;
