import { GetServerSideProps } from 'next';
import { Fragment, useEffect, useState } from 'react';
import MovieListSection from '../../components/movies/MovieListSection';
import { ResultElement } from '../../types/movieByTitleTypes';
import { SimpleMovieModel } from '../../types/movieTypes';

interface SearchedMovieProps {
  moviesData: SimpleMovieModel[];
  searchedMovie: string;
}

const SearchedMovie = ({ moviesData, searchedMovie }: SearchedMovieProps) => {
  const [movies, setMovies] = useState<SimpleMovieModel[]>([]);

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  return (
    <Fragment>
      <MovieListSection movies={movies} searchedMovie={searchedMovie} />
    </Fragment>
  );
};

const getMovieHttpRequest = async (URL: string) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  });

  const data = await response.json();

  const filteredMovies = data.results.filter(
    (movie: ResultElement) => movie.primaryImage !== null
  );

  const movies = filteredMovies.map((movie: ResultElement) => {
    return {
      id: movie.id,
      imageUrl: movie.primaryImage!.url,
    };
  });
  return movies;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const movieTitle = context.params!.movieTitle;

  const movies1 = await getMovieHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${movieTitle}?info=mini_info&limit=50&page=1&titleType=movie`
  );

  const movies2 = await getMovieHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieTitle}?info=mini_info&limit=50&page=1&titleType=movie`
  );

  const movies = [...movies1, ...movies2];

  return {
    props: {
      moviesData: movies,
      searchedMovie: movieTitle,
    },
  };
};

export default SearchedMovie;
