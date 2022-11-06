import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/hero/Navbar';
import MovieList from '../../components/movies/MovieList';
import SearchField from '../../components/search-field/SearchField';

const FavoriteMoviesPage = () => {
  const favMovies = useSelector((state: any) => state.favMovies.favMovies);

  return (
    <Fragment>
      <Navbar />
      <SearchField type='movie' />
      <MovieList movies={favMovies} />
    </Fragment>
  );
};

export default FavoriteMoviesPage;
