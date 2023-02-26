import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoriteMovies.module.css';
import Navbar from '../navbar/Navbar';
import SearchField from '../search-field/SearchField';
import MovieList from './MovieList';
import Footer from '../footer/Footer';

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
      <div className={styles['outer-container']}>
        <div className={styles['inner-container']}>
          <div className={styles['title-search-container']}>
            <h3 className={styles['sub-title']}>Your favorite movies</h3>
            <SearchField type='movie' />
          </div>
          {content}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default FavoriteMovies;
