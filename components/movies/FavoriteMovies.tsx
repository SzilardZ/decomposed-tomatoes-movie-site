import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoriteMovies.module.css';
import Navbar from '../navbar/Navbar';
import SearchField from '../search-field/SearchField';
import MovieList from './MovieList';
import Footer from '../footer/Footer';
import { SimpleMovieModel } from '../../types/movieTypes';

const FavoriteMovies = () => {
  const [favMovies, setFavMovies] = useState<string | null>(null);

  useEffect(() => {
    const favoriteMovies = localStorage.getItem('favorites');
    setFavMovies(favoriteMovies);
  }, []);

  let content;

  if (favMovies === null || !favMovies) {
    content = (
      <p className={styles['no-movie']}>
        Search for movies and add them to your favorites!
      </p>
    );
  } else {
    const parsedMovies: SimpleMovieModel[] = JSON.parse(favMovies);

    if (parsedMovies.length === 0) {
      content = (
        <p className={styles['no-movie']}>
          Search for movies and add them to your favorites!
        </p>
      );
    } else {
      content = <MovieList movies={parsedMovies} />;
    }
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
