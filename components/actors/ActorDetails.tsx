import styles from './ActorDetails.module.css';
import { ActorDetailedType } from '../../types/actorTypes';
import { Fragment, useEffect, useState } from 'react';
import Navbar from '../hero/Navbar';
import { Results } from '../../types/movieByIdTypes';
import MovieList from '../movies/MovieList';
import { SimpleMovieModel } from '../../types/movieTypes';

interface ActorDetailsProps {
  actor: ActorDetailedType;
}

const API_KEY: string | undefined = process.env.REACT_APP_MOVIE_API_KEY;

const ActorDetails = ({ actor }: ActorDetailsProps) => {
  const [movies, setMovies] = useState<SimpleMovieModel[]>([]);

  let url = `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?`;

  for (const [i, id] of Object.entries(actor.movieIds)) {
    url = url.concat(`idsList%5B${i}%5D=${id}&`);
  }

  const urlFormatted = url.slice(0, -1);

  const fetchMoviesByActor = async (URL: string) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    });
    const data = await response.json();

    const movies = data.results.map((movie: Results) => {
      return {
        id: movie.id,
        imageUrl: movie.primaryImage.url,
      };
    });
    setMovies(movies);
  };

  useEffect(() => {
    fetchMoviesByActor(urlFormatted);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={styles['actor-detail-container']}>
        <div>
          <h1 className={styles['actor-name']}>{actor.name}</h1>
          <h3 className={styles['actor-birth-date']}>{actor.birthDate}</h3>
          <p className={styles['actor-bio']}>
            {actor.bio} {actor.bio !== null ? 'Full bio down' : ''}
          </p>
        </div>
        <div>
          <img src={actor.imgUrl} alt='' className={styles['actor-img']} />
        </div>
      </div>
      <div>
        <div className={styles['section-container']}>
          <h3 className={styles['secondary-title']}>Movies Known For</h3>
          <MovieList movies={movies} />
        </div>

        <div className={styles['section-container']}>
          <h3 className={styles['secondary-title']}>Biography</h3>
          <p className={styles['bio-full']}>{actor.bioFull}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ActorDetails;
