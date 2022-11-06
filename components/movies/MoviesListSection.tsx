import Navbar from '../hero/Navbar';
import SearchField from '../search-field/SearchField';
import styles from './MoviesListSection.module.css';
import MovieList from './MovieList';
import { SimpleMovieModel } from '../../types/movieTypes';
import { Fragment } from 'react';

interface MoviesListSectionProps {
  movies: SimpleMovieModel[];
}

const MoviesListSection = (props: MoviesListSectionProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['search-field']}>
          <SearchField type='movie' />
        </div>
        <MovieList movies={props.movies} />
      </div>
    </Fragment>
  );
};

export default MoviesListSection;
