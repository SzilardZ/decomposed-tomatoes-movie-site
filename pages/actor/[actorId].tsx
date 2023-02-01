import { GetServerSideProps } from 'next';
import ActorDetails from '../../components/actors/ActorDetails';
import { ResultElement } from '../../types/actorByIdTypes';
import { ActorDetailedType } from '../../types/actorTypes';
import { Results } from '../../types/movieByIdTypes';
import { sendHttpGetRequest } from '../../util/http';
import { urlBuilderForMultipleMovies } from '../../util/urlBuilder';

interface ActorPageProps {
  actor: ActorDetailedType;
}

const ActorPage = (props: ActorPageProps) => {
  return <ActorDetails actor={props.actor} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const actorId = context.params!.actorId;

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY!;

  const API_HOST_MOVIES_MINI_DB = 'moviesminidatabase.p.rapidapi.com';
  const API_HOST_MOVIES_DB = 'moviesdatabase.p.rapidapi.com';

  const { imdb_id, name, birth_date, partial_bio, image_url } =
    await sendHttpGetRequest(
      `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/`,
      API_KEY,
      API_HOST_MOVIES_MINI_DB
    );

  const moviesKnownFor = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/movies_knownFor/`,
    API_KEY,
    API_HOST_MOVIES_MINI_DB
  );

  const actorBio = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/bio/`,
    API_KEY,
    API_HOST_MOVIES_MINI_DB
  );

  const actorMovieIdArr = moviesKnownFor.flatMap(
    (movie: ResultElement[]) => movie[0].imdb_id
  );

  const url = urlBuilderForMultipleMovies(actorMovieIdArr);

  const moviesData = await sendHttpGetRequest(url, API_KEY, API_HOST_MOVIES_DB);

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
