import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Fragment, useEffect, useState } from 'react';

import { API_HOST_MOVIE_DB, API_KEY } from '../../util/constants';
import { sendHttpGetRequest } from '../../lib/httpRequests';
import { ResultElement } from '../../types/movieByTitleTypes';
import { SimpleMovieModel } from '../../types/movieTypes';
import MovieListSection from '../../components/movies/MovieListSection';
import Footer from '../../components/footer/Footer';

interface SearchedMovieProps {
  moviesData: SimpleMovieModel[];
  searchedMovie: string;
}

const SearchedMovie = ({ moviesData, searchedMovie }: SearchedMovieProps) => {
  return (
    <Fragment>
      <MovieListSection movies={moviesData} searchedMovie={searchedMovie} />
      <Footer />
    </Fragment>
  );
};

const getMovieHttpRequest = async (URL: string) => {
  const data = await sendHttpGetRequest(URL, API_KEY, API_HOST_MOVIE_DB);

  const filteredMovies = data.filter(
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const movieTitle = context.params!.movieTitle;

  const movies1 = await getMovieHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${movieTitle}?info=mini_info&limit=50&page=1&titleType=movie`
  );

  const movies2 = await getMovieHttpRequest(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieTitle}?info=mini_info&limit=50&page=1&titleType=movie`
  );

  const movies = [...movies1, ...movies2];

  // eliminate duplications
  const uniqueMovies: { id: string; imageUrl: string }[] = [];
  const unique = movies.filter(element => {
    const isDuplicate = uniqueMovies.includes(element.id);

    if (!isDuplicate) {
      uniqueMovies.push(element.id);
      return true;
    }
    return false;
  });

  return {
    props: {
      moviesData: unique,
      searchedMovie: movieTitle,
    },
  };
};

export default SearchedMovie;
