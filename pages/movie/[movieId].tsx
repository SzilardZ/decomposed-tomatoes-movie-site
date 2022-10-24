import { GetServerSideProps } from 'next';
import MovieDetails from '../../components/movies/MovieDetails';
import { MovieModel } from '../../models/movie';
import { Result } from '../../types/movieByIdTypes';
import { RatingResult } from '../../types/movieRatingByIdTypes';

interface MovieDetailPageProps {
  movie: MovieModel;
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
  return <MovieDetails movie={props.movie} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieId = context.params!.movieId;

  const response: Response = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}?info=mini_info`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );
  const { results }: Result = await response.json();

  const responseRating: Response = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/ratings`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );

  const dataRating: RatingResult = await responseRating.json();

  return {
    props: {
      movie: {
        id: results.id,
        title: results.titleText.text,
        releaseYear: results.releaseYear?.year || 'NA',
        imageUrl: results.primaryImage.url,
        rating: dataRating.results?.averageRating || 'NA',
        numVotes: dataRating.results?.numVotes || 'NA',
      },
    },
  };
};

export default MovieDetailPage;
