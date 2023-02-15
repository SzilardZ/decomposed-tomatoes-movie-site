import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { API_HOST_MOVIE_DB, API_KEY } from '../constants/contants';
import { sendHttpGetRequest } from '../util/http';
import { urlBuilderForMultipleMovies } from '../util/urlBuilder';
import { SelectedMovieModel } from '../types/movieTypes';
import { ResultElement } from '../types/homePageMoviesTypes';
import Header from '../components/hero/Header';
import Opener from '../components/opener/Opener';
import MovieSelectionList from '../components/movie-selection/MovieSelectionList';
import SearchActor from '../components/actors/SearchActor';
import Footer from '../components/footer/Footer';

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
    'tt12631758',
    'tt10366460',
    'tt8721424',
    'tt2582802',
  ];

  const url = urlBuilderForMultipleMovies(movieIds);

  const data = await sendHttpGetRequest(url, API_KEY, API_HOST_MOVIE_DB);

  const seletedMovies = data.map((movie: ResultElement) => {
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
