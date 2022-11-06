import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import MovieList from '../../components/movies/MovieList';
import { Result, ResultElement } from '../../types/upcomingMovieTypes';
import { UpcomingMovieModel } from '../../types/movieTypes';
import Navbar from '../../components/hero/Navbar';
import styles from '../../styles/Home.module.css';

interface UpcomingMoviesProps {
  upcomingMovies: UpcomingMovieModel[];
}

const UpcomingMovies = (props: UpcomingMoviesProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <MovieList movies={props.upcomingMovies} />
      </div>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?info=mini_info&limit=50&page=1&titleType=movie`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );

  const data: Result = await response.json();

  // filter out the movies which don't have image
  const filteredMovies = data.results.filter(
    (movie: ResultElement) => movie.primaryImage !== null
  );

  return {
    props: {
      upcomingMovies: filteredMovies.map((movie: ResultElement) => ({
        id: movie.id,
        title: movie.titleText.text,
        imageUrl: movie.primaryImage!.url,
        releaseYear: movie.releaseYear?.year || 'NA',
      })),
    },
  };
};

export default UpcomingMovies;
