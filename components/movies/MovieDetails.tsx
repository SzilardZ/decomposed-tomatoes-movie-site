import { Fragment } from 'react';
import Navbar from '../navbar/Navbar';
import styles from './MovieDetails.module.css';
import { MovieModel, SimpleMovieModel } from '../../types/movieTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../../store/favMovies/favMoviesSlice';
import RoleActor from './RoleActor';

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
      <Navbar isTransparent={false} />
      <main className={styles.container}>
        <section className={styles['movie-details']}>
          <h1 className={styles['movie-title']}>{props.movie.title}</h1>
          <div className={styles['inner-container']}>
            <h3 className={styles['movie-year']}>{props.movie.releaseYear}</h3>
            <span>
              <button
                className={styles['btn-add-to-fav']}
                onClick={favoriteHandler}>
                {buttonText}
              </button>
            </span>
            <h3 className={styles['movie-rating']}>
              IMDB Rating: {props.movie.rating}
            </h3>
            <h3 className={styles['movie-votes']}>
              Number of Votes: {props.movie.numVotes}
            </h3>
          </div>
          <div>
            <h3 className={styles['cast-title']}>Cast</h3>
            {castContent}
          </div>
        </section>
        <section>
          <img
            className={styles['movie-img']}
            src={props.movie.imageUrl}
            alt=''
          />
        </section>
      </main>
    </Fragment>
  );
};

export default MovieDetails;
