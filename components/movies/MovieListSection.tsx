import Navbar from '../navbar/Navbar';
import SearchField from '../search-field/SearchField';
import styles from './MovieListSection.module.css';
import MovieList from './MovieList';
import { SimpleMovieModel } from '../../types/movieTypes';
import { Fragment } from 'react';

interface MovieListSectionProps {
  movies: SimpleMovieModel[];
  searchedMovie: string;
}

const MovieListSection = ({ movies, searchedMovie }: MovieListSectionProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles['outer-container']}>
        <div className={styles['inner-container']}>
          <div className={styles['title-search-container']}>
            <h3 className={styles['sub-title']}>
              Results for: <span>{searchedMovie}</span>
            </h3>
            <SearchField type='movie' />
          </div>
          <MovieList movies={movies} />
        </div>
      </div>
    </Fragment>
  );
};

export default MovieListSection;
