import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Fragment } from 'react';

import {
  API_HOST_MOVIE_DB,
  API_HOST_MOVIE_MINI_DB,
  API_KEY,
} from '../../util/constants';
import { sendHttpGetRequest } from '../../lib/httpRequests';
import { MovieModel } from '../../types/movieTypes';
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const movieId = context.params!.movieId;

  const movieData = await sendHttpGetRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}?info=base_info`,
    API_KEY,
    API_HOST_MOVIE_DB
  );

  let genres;

  if (movieData.genres) {
    const genresArr = movieData.genres.genres.map(
      (item: { text: string; id: string; __typename: string }) => item.text
    );
    genres = genresArr.join(', ');
  } else {
    genres = 'NA';
  }

  const durationInMinutes = movieData.runtime?.seconds
    ? +movieData.runtime.seconds / 60
    : 'NA';

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
        rating: movieData.ratingsSummary?.aggregateRating || 'NA',
        numVotes: movieData.ratingsSummary?.voteCount || 'NA',
        genres: genres,
        runtime: durationInMinutes,
        plot: movieData.plot?.plotText.plainText || 'NA',
        cast: castData?.roles || [],
      },
    },
  };
};

export default MovieDetailPage;
