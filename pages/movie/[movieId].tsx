import { GetServerSideProps } from 'next';
import MovieDetails from '../../components/movies/MovieDetails';
import { MovieModel } from '../../types/movieTypes';
import { Results } from '../../types/movieByIdTypes';
import { RatingResult } from '../../types/movieRatingByIdTypes';
import { sendHttpGetRequest } from '../../util/http';

interface MovieDetailPageProps {
  movie: MovieModel;
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
  return <MovieDetails movie={props.movie} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieId = context.params!.movieId;

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY!;
  const API_HOST_MOVIES_DB = 'moviesdatabase.p.rapidapi.com';
  const API_HOST_MOVIES_MINI_DB = 'moviesminidatabase.p.rapidapi.com';

  const movieData: Results = await sendHttpGetRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}?info=mini_info`,
    API_KEY,
    API_HOST_MOVIES_DB
  );

  const ratingData: RatingResult = await sendHttpGetRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/ratings`,
    API_KEY,
    API_HOST_MOVIES_DB
  );

  const castData = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/movie/id/${movieId}/cast/`,
    API_KEY,
    API_HOST_MOVIES_MINI_DB
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
