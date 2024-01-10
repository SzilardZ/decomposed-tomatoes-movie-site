import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './MovieDetails.module.css';
import { MovieModel } from '../../types/movieTypes';
import Navbar from '../navbar/Navbar';
import RoleActor from './RoleActor';

interface MovieDetailProps {
  movie: MovieModel;
}

interface FavMovieModel {
  id: string;
  imageUrl: string;
}

const MovieDetails = (props: MovieDetailProps) => {
  const [buttonText, setButtonText] = useState<string>('+ Add to Favorites');

  const checkFavoriteStatus = () => {
    const existingFavorites = localStorage.getItem('favorites');
    const favoritesArray: { id: string; imageUrl: string }[] = existingFavorites
      ? JSON.parse(existingFavorites)
      : [];

    const isInFavorite = favoritesArray.some(
      favorite => favorite.id === props.movie.id
    );

    const updatedButtonText = isInFavorite
      ? 'Remove from Favorites'
      : '+ Add to Favorites';

    setButtonText(updatedButtonText);
  };

  const favoriteHandler = (id: string, imageUrl: string) => {
    const existingFavorites = localStorage.getItem('favorites');
    const favoritesArray: { id: string; imageUrl: string }[] = existingFavorites
      ? JSON.parse(existingFavorites)
      : [];

    const isAlreadyFavorited = favoritesArray.some(
      favorite => favorite.id === id
    );

    let updatedFavorites: { id: string; imageUrl: string }[];

    if (!isAlreadyFavorited) {
      favoritesArray.push({ id, imageUrl });
      updatedFavorites = favoritesArray;
    } else {
      updatedFavorites = favoritesArray.filter(favorite => favorite.id !== id);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    checkFavoriteStatus(); // Update button text after modifying favorites
  };

  useEffect(() => {
    checkFavoriteStatus(); // Update button text on initial load
  }, []);

  // handle the case if the movie does not have available cast
  const isAvailableCast = props.movie.cast.length === 0 ? false : true;

  let castContent;

  if (props.movie.cast.length === 0) {
    castContent = <p className={styles['no-cast']}>No available cast</p>;
  } else if (props.movie.cast.length > 0) {
    castContent = (
      <div>
        {props.movie.cast.map((item, index) => (
          <ul
            className={styles['role-actor-list']}
            key={`${item.actor.imdb_id}-${index}`}>
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
                  onClick={() =>
                    favoriteHandler(props.movie.id, props.movie.imageUrl)
                  }>
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
              <p className={styles['plot-text']}>{props.movie.plot}</p>
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
