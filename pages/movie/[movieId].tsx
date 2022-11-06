import { GetServerSideProps } from 'next';
import MovieDetails from '../../components/movies/MovieDetails';
import { MovieModel } from '../../types/movieTypes';
import { Result } from '../../types/movieByIdTypes';
import { RatingResult } from '../../types/movieRatingByIdTypes';

interface MovieDetailPageProps {
  movie: MovieModel;
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
  return <MovieDetails movie={props.movie} />;
};

const sendHttpRequest = async (URL: string, API_HOST: string) => {
  const response: Response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
      'X-RapidAPI-Host': API_HOST,
    },
  });
  const data = await response.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieId = context.params!.movieId;

  const movieData = await sendHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}?info=mini_info`,
    'moviesdatabase.p.rapidapi.com'
  );
  const ratingData: RatingResult = await sendHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/ratings`,
    'moviesdatabase.p.rapidapi.com'
  );

  const castData = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/movie/id/${movieId}/cast/`,
    'moviesminidatabase.p.rapidapi.com'
  );

  return {
    props: {
      movie: {
        id: movieData.results.id,
        title: movieData.results.titleText.text,
        releaseYear: movieData.results.releaseYear?.year || 'NA',
        imageUrl: movieData.results.primaryImage.url,
        rating: ratingData.results?.averageRating || 'NA',
        numVotes: ratingData.results?.numVotes || 'NA',
        cast: castData.results?.roles || [],
      },
    },
  };
};

export default MovieDetailPage;
