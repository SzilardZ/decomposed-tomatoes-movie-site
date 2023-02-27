import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMovie, removeMovie } from '../../store/favMovies/favMoviesSlice';
import { MovieModel, SimpleMovieModel } from '../../types/movieTypes';
import Navbar from '../navbar/Navbar';
import styles from './MovieDetails.module.css';
import RoleActor from './RoleActor';
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

  const isAvailableCast = props.movie.cast.length === 0 ? false : true;

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
        <div className={styles['inner-container']}>
          <section className={styles['movie-details']}>
            <h1 className={styles['movie-title']}>{props.movie.title}</h1>
            <div className={styles['data-container']}>
              <span>
                <button
                  className={styles['btn-add-to-fav']}
                  onClick={favoriteHandler}>
                  {buttonText}
                </button>
              </span>
              <p>Release Year: {props.movie.releaseYear}</p>
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
        <div className={styles.instructions}>
          {isAvailableCast && (
            <p>You can click on the name of the creators/actors ⬇</p>
          )}
        </div>
        <section className={styles['cast-container']}>
          <h3 className={styles['cast-title']}>Cast</h3>
          <div className={styles['cast-sub-title']}>
            {isAvailableCast && <p>(in not alphabetical order)</p>}
          </div>
          <div>{castContent}</div>
        </section>
        {isAvailableCast && (
          <div className={styles['the-end-text']}>
            <p>THE END</p>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default MovieDetails;
