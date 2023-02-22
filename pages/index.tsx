import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getSelectedMovies } from '../lib/httpRequests';
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
        <title>Decomposed Tomatoes</title>
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
  const selectedMovies = await getSelectedMovies();

  return {
    props: {
      selectedMovies: selectedMovies,
    },
  };
};

export default Home;
