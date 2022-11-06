import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/hero/Navbar';
import MovieList from '../../components/movies/MovieList';
import SearchField from '../../components/search-field/SearchField';
import styles from '../../styles/Home.module.css';

const FavoriteMoviesPage = () => {
  const favMovies = useSelector((state: any) => state.favMovies.favMovies);

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['search-field']}>
          <SearchField type='movie' />
        </div>
        <MovieList movies={favMovies} />
      </div>
    </Fragment>
  );
};

export default FavoriteMoviesPage;
