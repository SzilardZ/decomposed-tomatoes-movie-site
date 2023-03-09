import { Fragment } from 'react';

import styles from './MovieListSection.module.css';
import { SimpleMovieModel } from '../../types/movieTypes';
import Navbar from '../navbar/Navbar';
import SearchField from '../search-field/SearchField';
import MovieList from './MovieList';
import NoResults from '../no-results/NoResults';
import { capitalizeFirstLetter } from '../../util/helpers';

interface MovieListSectionProps {
  movies: SimpleMovieModel[];
  searchedMovie: string;
}

const MovieListSection = ({ movies, searchedMovie }: MovieListSectionProps) => {
  let content;

  if (movies.length === 0) {
    content = <NoResults type='movie' />;
  }
  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles['outer-container']}>
        <div className={styles['inner-container']}>
          <div className={styles['title-search-container']}>
            <h3 className={styles['sub-title']}>
              Results for: <span>{capitalizeFirstLetter(searchedMovie)}</span>
            </h3>
            <div className={styles['search-field-container']}>
              <SearchField type='movie' />
            </div>
          </div>
          {content}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieListSection;
