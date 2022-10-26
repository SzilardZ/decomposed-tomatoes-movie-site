import MovieItem from './MovieItem';
import styles from './MovieSelectionList.module.css';

import { SelectedMovieModel } from '../../types/movieTypes';

interface MovieSelectionListProps {
  selectedMovies: SelectedMovieModel[];
}

const MovieSelectionList = ({ selectedMovies }: MovieSelectionListProps) => {
  return (
    <ul className={styles['selected-movie-container']}>
      {selectedMovies.map(movie => {
        return (
          <MovieItem
            key={movie.movieId}
            id={movie.movieId}
            image={movie.movieImage}
          />
        );
      })}
    </ul>
  );
};

export default MovieSelectionList;
