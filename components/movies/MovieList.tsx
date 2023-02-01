import Movie from './Movie';
import styles from './MovieList.module.css';
import { SimpleMovieModel } from '../../types/movieTypes';

interface MovieListProps {
  movies: SimpleMovieModel[];
}

const MovieList = (props: MovieListProps) => {
  return (
    <div>
      <ul className={styles['movie-list']}>
        {props.movies.map(movie => (
          <Movie key={movie.id} id={movie.id} imageUrl={movie.imageUrl} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
