import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMovie, removeMovie } from '../../store/favMovies/favMoviesSlice';
import { MovieModel, SimpleMovieModel } from '../../types/movieTypes';
import Navbar from '../navbar/Navbar';
import styles from './MovieDetails.module.css';
import RoleActor from './RoleActor';
import TheEnd from '../footer/TheEnd';
import Image from 'next/image';

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
    ? (buttonText = 'Remove from Favorites')
    : (buttonText = '+ Add to Favorites');

  const favoriteHandler = () => {
    isInFavorite
      ? dispatch(removeMovie(props.movie.id))
      : dispatch(
          addMovie({ id: props.movie.id, imageUrl: props.movie.imageUrl })
        );
  };

  // handle the case if the movie does not have available cast
  let castContent;
  if (props.movie.cast.length === 0) {
    castContent = <p className={styles['no-cast']}>No available cast</p>;
  } else if (props.movie.cast.length > 0) {
    castContent = (
      <div>
        {props.movie.cast.map(item => (
          <ul className={styles['role-actor-list']} key={item.actor.imdb_id}>
            <RoleActor
              id={item.actor.imdb_id}
              role={item.role}
              name={item.actor.name}
            />
          </ul>
        ))}
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <main className={styles['outer-container']}>
        <h1 className={styles['movie-title']}>{props.movie.title}</h1>
        <div className={styles['inner-container']}>
          <section className={styles['movie-details']}>
            <div className={styles['data-container']}>
              <h3 className={styles['movie-year']}>
                {props.movie.releaseYear}
              </h3>
              <span>
                <button
                  className={styles['btn-add-to-fav']}
                  onClick={favoriteHandler}>
                  {buttonText}
                </button>
              </span>

              <p>IMDB Rating: {props.movie.rating}</p>
              <p>Number of Votes: {props.movie.numVotes}</p>
              <p>Genres: {props.movie.genres}</p>
              <p>Runtime: {props.movie.runtime} minutes</p>
            </div>
            <div className={styles.plot}>
              <p className={styles['plot-title']}>Plot</p>
              <p>{props.movie.plot}</p>
            </div>
          </section>

          <div className={styles['movie-img-container']}>
            <Image
              className={styles['movie-img']}
              src={props.movie.imageUrl}
              alt='movie poster'
              height={700}
              width={466}
            />
          </div>
        </div>
        <section className={styles['cast-container']}>
          <h3 className={styles['cast-title']}>Cast</h3>
          <p className={styles['cast-sub-title']}>
            (in not alphabetical order)
          </p>
          <div>{castContent}</div>
        </section>
      </main>
      <TheEnd />
    </Fragment>
  );
};

export default MovieDetails;
