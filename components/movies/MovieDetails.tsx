import { Fragment } from 'react';
import Navbar from '../header/Navbar';
import styles from './MovieDetails.module.css';
import { MovieModel } from '../../models/movie';

interface MovieDetailProps {
  movie: MovieModel;
}

const MovieDetails = (props: MovieDetailProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['movie-details']}>
          <h1 className={styles['movie-title']}>{props.movie.title}</h1>
          <h2 className={styles['movie-year']}>{props.movie.releaseYear}</h2>
          <h2 className={styles['movie-rating']}>
            IMDB Rating: {props.movie.rating}
          </h2>
          <h2 className={styles['movie-votes']}>
            Number of Votes: {props.movie.numVotes}
          </h2>
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
