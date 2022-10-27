import MovieItem from './MovieItem';
import styles from './MovieSelectionList.module.css';

import { SelectedMovieModel } from '../../types/movieTypes';
import { Fragment } from 'react';

interface MovieSelectionListProps {
  selectedMovies: SelectedMovieModel[];
}

const MovieSelectionList = ({ selectedMovies }: MovieSelectionListProps) => {
  return (
    <Fragment>
      <ul className={styles['selected-movie-container']}>
        {selectedMovies.map(movie => (
          <MovieItem
            key={movie.movieId}
            id={movie.movieId}
            image={movie.movieImage}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default MovieSelectionList;
