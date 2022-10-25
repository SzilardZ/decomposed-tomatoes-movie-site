import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import MovieList from '../../components/movies/MovieList';
import { ResultElement } from '../../types/movieByTitleTypes';
import { SimpleMovieModel } from '../../models/movie';

interface SearchedMoviesProps {
  movies: SimpleMovieModel[];
}

const SearchedMovies = (props: SearchedMoviesProps) => {
  const [movies, setMovies] = useState<SimpleMovieModel[]>([]);

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  return <MovieList movies={movies} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieTitle = context.params!.movieTitle;

  const response = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieTitle}?info=mini_info&limit=50&page=1&titleType=movie`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );

  const { results } = await response.json();

  const filteredMovies = results.filter(
    (movie: ResultElement) => movie.primaryImage !== null
  );

  const movies = filteredMovies.map((movie: ResultElement) => {
    return {
      id: movie.id,
      imageUrl: movie.primaryImage!.url,
    };
  });

  return {
    props: {
      movies: movies,
    },
  };
};

export default SearchedMovies;
