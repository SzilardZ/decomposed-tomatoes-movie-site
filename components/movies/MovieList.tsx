import { Fragment } from 'react';
import Navbar from '../header/Navbar';
import SearchField from '../header/SearchField';
import Movie from './Movie';
import styles from './MovieList.module.css';
import { SimpleMovieModel } from '../../models/movie';

interface MovieListProps {
  movies: SimpleMovieModel[];
}

const MovieList = (props: MovieListProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['search-field']}>
          <SearchField />
        </div>
        <ul className={styles['movie-list']}>
          {props.movies.map(movie => (
            <Movie key={movie.id} id={movie.id} imageUrl={movie.imageUrl} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default MovieList;
