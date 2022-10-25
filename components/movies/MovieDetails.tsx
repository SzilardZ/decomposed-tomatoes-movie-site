import { Fragment } from 'react';
import Navbar from '../header/Navbar';
import styles from './MovieDetails.module.css';
import { MovieModel, SimpleMovieModel } from '../../models/movie';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../../store/favMovies/favMoviesSlice';

interface MovieDetailProps {
  movie: MovieModel;
}

const MovieDetails = (props: MovieDetailProps) => {
  const dispatch = useDispatch();

  const favMovies = useSelector((state: any) => state.favMovies.favMovies);

  let buttonText;

  const isInFavorite = favMovies.find(
    (movie: SimpleMovieModel) => movie.id === props.movie.id
  );

  isInFavorite
    ? (buttonText = '- Remove from Favorites')
    : (buttonText = '+ Add to Favorites');

  const favoriteHandler = () => {
    isInFavorite
      ? dispatch(removeMovie(props.movie.id))
      : dispatch(
          addMovie({ id: props.movie.id, imageUrl: props.movie.imageUrl })
        );
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['movie-details']}>
          <h1 className={styles['movie-title']}>{props.movie.title}</h1>
          <h3 className={styles['movie-year']}>{props.movie.releaseYear}</h3>
          <h3 className={styles['movie-rating']}>
            IMDB Rating: {props.movie.rating}
          </h3>
          <h2 className={styles['movie-votes']}>
            Number of Votes: {props.movie.numVotes}
          </h2>
          <div>
            <button
              className={styles['btn-add-to-fav']}
              onClick={favoriteHandler}>
              {buttonText}
            </button>
          </div>
        </div>
        <div>
          <img
            className={styles['movie-image']}
            src={props.movie.imageUrl}
            alt=''
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
