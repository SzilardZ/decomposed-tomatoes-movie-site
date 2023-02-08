import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

import {
  API_HOST_MOVIE_DB,
  API_HOST_MOVIE_MINI_DB,
  API_KEY,
} from '../../constants/contants';
import { sendHttpGetRequest } from '../../util/http';
import { MovieModel } from '../../types/movieTypes';
import { Results } from '../../types/movieByIdTypes';
import { RatingResult } from '../../types/movieRatingByIdTypes';
import MovieDetails from '../../components/movies/MovieDetails';
import Footer from '../../components/footer/Footer';

interface MovieDetailPageProps {
  movie: MovieModel;
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
  return (
    <Fragment>
      <MovieDetails movie={props.movie} />
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieId = context.params!.movieId;

  const movieData: Results = await sendHttpGetRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}?info=mini_info`,
    API_KEY,
    API_HOST_MOVIE_DB
  );

  const ratingData: RatingResult = await sendHttpGetRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/ratings`,
    API_KEY,
    API_HOST_MOVIE_DB
  );

  const castData = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/movie/id/${movieId}/cast/`,
    API_KEY,
    API_HOST_MOVIE_MINI_DB
  );

  return {
    props: {
      movie: {
        id: movieData.id,
        title: movieData.titleText.text,
        releaseYear: movieData.releaseYear?.year || 'NA',
        imageUrl: movieData.primaryImage.url,
        rating: ratingData?.averageRating || 'NA',
        numVotes: ratingData?.numVotes || 'NA',
        cast: castData?.roles || [],
      },
    },
  };
};

export default MovieDetailPage;
