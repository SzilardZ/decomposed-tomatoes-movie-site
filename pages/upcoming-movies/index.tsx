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
  const upcomingMovies = await getUpcomingMovies();

  return {
    props: {
      upcomingMovies: upcomingMovies,
    },
  };
};

export default UpcomingMovies;
