import Navbar from '../hero/Navbar';
import SearchField from '../search-field/SearchField';
import styles from './MoviesListSection.module.css';
import MovieList from './MovieList';
import { SimpleMovieModel } from '../../types/movieTypes';
import { Fragment } from 'react';

interface MoviesListSectionProps {
  movies: SimpleMovieModel[];
  searchedMovie: string;
}

const MoviesListSection = ({
  movies,
  searchedMovie,
}: MoviesListSectionProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['title-search-container']}>
          <h3 className={styles['sub-title']}>Results for "{searchedMovie}"</h3>
          <SearchField type='movie' />
        </div>
        <MovieList movies={movies} />
      </div>
    </Fragment>
  );
};

export default MoviesListSection;
