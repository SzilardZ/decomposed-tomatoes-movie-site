import { Fragment } from 'react';

import styles from './ActorDetails.module.css';
import { ActorDetailedType } from '../../types/actorTypes';
import Navbar from '../navbar/Navbar';
import MovieList from '../movies/MovieList';
import Image from 'next/image';

interface ActorDetailsProps {
  actor: ActorDetailedType;
}
const ActorDetails = ({ actor }: ActorDetailsProps) => {
  // handling if there is no IMAGE of the actor
  let actorImage;

  if (actor.imgUrl === null) {
    actorImage = (
      <p className={styles['no-available-img']}>No available image</p>
    );
  } else {
    actorImage = (
      <Image
        src={actor.imgUrl}
        alt='image of the actor'
        className={styles['actor-img']}
        height={500}
        width={333}
      />
    );
  }

  // handling if there is no MOVIES of the actor
  let moviesKnowFor;

  if (actor.movies) {
    moviesKnowFor = <MovieList movies={actor.movies} />;
  } else {
    moviesKnowFor = (
      <div className={styles['no-movies']}>
        <p>There are no movies in our database for this actor.</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles['actor-details-outer-container']}>
        <div className={styles['actor-details-inner-container']}>
          <div>
            <h1 className={styles['actor-name']}>{actor.name}</h1>
            <h3 className={styles['actor-birth-date']}>{actor.birthDate}</h3>
            <p className={styles['actor-bio']}>
              {actor.bio} {actor.bio !== null ? 'full bio down ⬇' : ''}
            </p>
          </div>
          <div className={styles['actor-img-container']}>{actorImage}</div>
        </div>
        <div className={styles['section-container']}>
          <h3 className={styles['secondary-title']}>Movies Known For</h3>
          {moviesKnowFor}
        </div>
      </div>
      <div>
        <div className={styles['bio-container']}>
          <div className={styles['section-container']}>
            <h3 className={styles['secondary-title']}>Biography</h3>
            <p className={styles['bio-full']}>{actor.bioFull}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActorDetails;
