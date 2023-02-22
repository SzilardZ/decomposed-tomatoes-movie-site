import { Fragment } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import {
  API_HOST_MOVIE_DB,
  API_HOST_MOVIE_MINI_DB,
  API_KEY,
} from '../../constants/contants';
import ActorDetails from '../../components/actors/ActorDetails';
import Footer from '../../components/footer/Footer';
import { sendHttpGetRequest } from '../../util/http';
import { ResultElement } from '../../types/actorByIdTypes';
import { ActorDetailedType } from '../../types/actorTypes';
import { Results } from '../../types/movieByIdTypes';
import { urlBuilderForMultipleMovies } from '../../util/urlBuilder';

interface ActorPageProps {
  actor: ActorDetailedType;
}

const ActorPage = (props: ActorPageProps) => {
  return (
    <Fragment>
      <ActorDetails actor={props.actor} />
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const actorId = context.params!.actorId;

  const { imdb_id, name, birth_date, partial_bio, image_url } =
    await sendHttpGetRequest(
      `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/`,
      API_KEY,
      API_HOST_MOVIE_MINI_DB
    );

  const moviesKnownFor = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/movies_knownFor/`,
    API_KEY,
    API_HOST_MOVIE_MINI_DB
  );

  const actorBio = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/bio/`,
    API_KEY,
    API_HOST_MOVIE_MINI_DB
  );

  const actorMovieIdArr = moviesKnownFor.flatMap(
    (movie: ResultElement[]) => movie[0].imdb_id
  );

  const url = urlBuilderForMultipleMovies(actorMovieIdArr);

  const moviesData = await sendHttpGetRequest(url, API_KEY, API_HOST_MOVIE_DB);

  const movies = await moviesData.map((movie: Results) => {
    return {
      id: movie.id,
      imageUrl: movie.primaryImage.url,
    };
  });

  const actor = {
    id: imdb_id,
    name: name,
    birthDate: birth_date,
    bio: partial_bio,
    imgUrl: image_url,
    movies: movies,
    bioFull: actorBio.biography?.bio,
  };

  return {
    props: {
      actor: actor,
    },
  };
};

export default ActorPage;
