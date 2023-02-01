import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/hero/Header';
import Opener from '../components/opener/Opener';
import MovieSelectionList from '../components/movie-selection/MovieSelectionList';
import { SelectedMovieModel } from '../types/movieTypes';
import { Result, ResultElement } from '../types/homePageMoviesTypes';
import SearchActor from '../components/actors/SearchActor';
import Footer from '../components/footer/Footer';
import { urlBuilderForMultipleMovies } from '../util/urlBuilder';

const Home: NextPage<{ selectedMovies: SelectedMovieModel[] }> = ({
  selectedMovies,
}) => {
  return (
    <div>
      <Head>
        <title>The Movie App</title>
        <meta name='description' content='A too good movie app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Opener />
      <MovieSelectionList selectedMovies={selectedMovies} />
      <SearchActor />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const movieIds = [
    'tt3783958',
    'tt1727824',
    'tt2278388',
    'tt11214590',
    'tt1160419',
    'tt4975722',
    'tt8721424',
    'tt10366460',
    'tt12631758',
    'tt2582802',
  ];

  const url = urlBuilderForMultipleMovies(movieIds);

  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  });

  const responseData: Result = await response.json();

  const seletedMovies = responseData.results.map((movie: ResultElement) => {
    return {
      movieId: movie.id,
      movieImage: movie.primaryImage.url,
    };
  });

  return {
    props: {
      selectedMovies: seletedMovies,
    },
  };
};

export default Home;
