import { GetStaticProps } from 'next';
import { Fragment } from 'react';

import { getUpcomingMovies } from '../../lib/httpRequests';
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
  const data = await getUpcomingMovies();

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
