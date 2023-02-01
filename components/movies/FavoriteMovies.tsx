import styles from './FavoriteMovies.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../hero/Navbar';
import SearchField from '../search-field/SearchField';
import MovieList from './MovieList';

const FavoriteMovies = () => {
  const favMovies = useSelector((state: any) => state.favMovies.favMovies);

  let content;

  if (favMovies.length === 0) {
    content = (
      <p className={styles['no-movie']}>
        Search for movies and add them to your favorites!
      </p>
    );
  } else if (favMovies.length > 0) {
    content = <MovieList movies={favMovies} />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['title-search-container']}>
          <h3 className={styles['sub-title']}>Your favorite movies</h3>
          <SearchField type='movie' />
        </div>
        {content}
      </div>
    </Fragment>
  );
};

export default FavoriteMovies;
