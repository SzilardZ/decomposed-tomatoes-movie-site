import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/hero/Header';
import Opener from '../components/opener/Opener';
import MovieSelectionList from '../components/movie-selection/MovieSelectionList';
import { SelectedMovieModel } from '../types/movieTypes';
import { Result, ResultElement } from '../types/homePageMoviesTypes';
import SearchActor from '../components/actor/SearchActor';
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
    'tt8721424',
    'tt10366460',
    'tt12631758',
    'tt2582802',
  ];
  const response: Response = await fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList%5B0%5D=${movieIds[0]}&idsList%5B1%5D=${movieIds[1]}&idsList%5B2%5D=${movieIds[2]}&idsList%5B3%5D=${movieIds[3]}&idsList%5B4%5D=${movieIds[4]}&idsList%5B5%5D=${movieIds[5]}&idsList%5B6%5D=${movieIds[6]}&idsList%5B7%5D=${movieIds[7]}&idsList%5B8%5D=${movieIds[8]}&idsList%5B9%5D=${movieIds[9]}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    }
  );

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
