import styles from './FavoriteMovies.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../hero/Navbar';
import SearchField from '../search-field/SearchField';
import MovieList from './MovieList';

const FavoriteMovies = () => {
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

export default FavoriteMovies;
