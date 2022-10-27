import { Fragment } from 'react';
import Navbar from '../hero/Navbar';
import SearchField from '../hero/SearchField';
import Movie from './Movie';
import styles from './MovieList.module.css';
import { SimpleMovieModel } from '../../types/movieTypes';

interface MovieListProps {
  movies: SimpleMovieModel[];
}

const MovieList = (props: MovieListProps) => {
  let content;

  if (props.movies.length === 0) {
    content = (
      <p className={styles['no-movie']}>
        Search for a movie and add it to your favorite!
      </p>
    );
  }

  if (props.movies.length > 0) {
    content = (
      <ul className={styles['movie-list']}>
        {props.movies.map(movie => (
          <Movie key={movie.id} id={movie.id} imageUrl={movie.imageUrl} />
        ))}
      </ul>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['search-field']}>
          <SearchField />
        </div>
        {content}
      </div>
    </Fragment>
  );
};

export default MovieList;
