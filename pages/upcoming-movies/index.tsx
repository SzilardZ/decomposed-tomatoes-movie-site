import { GetStaticProps } from 'next';
import { Fragment } from 'react';

import { API_HOST_MOVIE_DB, API_KEY } from '../../constants/contants';
import { sendHttpGetRequest } from '../../util/http';
import { ResultElement } from '../../types/upcomingMovieTypes';
import { UpcomingMovieModel } from '../../types/movieTypes';
import MovieListSection from '../../components/movies/MovieListSection';
import Footer from '../../components/footer/Footer';

interface UpcomingMoviesProps {
  upcomingMovies: UpcomingMovieModel[];
}

const UpcomingMovies = (props: UpcomingMoviesProps) => {
  return (
    <Fragment>
      <MovieListSection
        movies={props.upcomingMovies}
        searchedMovie='Upcoming Movies'
      />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sendHttpGetRequest(
    'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    API_KEY,
    API_HOST_MOVIE_DB
  );

  // filter out the movies which don't have image
  const filteredMovies = data.filter(
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
