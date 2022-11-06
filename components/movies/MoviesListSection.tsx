import Navbar from '../hero/Navbar';
import SearchField from '../search-field/SearchField';
import styles from './MoviesListSection.module.css';
import MovieList from './MovieList';
import { SimpleMovieModel } from '../../types/movieTypes';

interface MoviesListSectionProps {
  movies: SimpleMovieModel[];
}

const MoviesListSection = (props: MoviesListSectionProps) => {
  return (
    <div>
      <Navbar />
      <div className={styles['search-field']}>
        <SearchField type='movie' />
      </div>
      <MovieList movies={props.movies} />
    </div>
  );
};

export default MoviesListSection;
