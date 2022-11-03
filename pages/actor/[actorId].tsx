import { GetServerSideProps } from 'next';
import ActorDetails from '../../components/actors/ActorDetails';
import { ResultElement } from '../../types/actorByIdTypes';
import { ActorDetailedType } from '../../types/actorTypes';

interface ActorPageProps {
  actor: ActorDetailedType;
}

const ActorPage = (props: ActorPageProps) => {
  return <ActorDetails actor={props.actor} />;
};

const sendHttpRequest = async (URL: string) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
    },
  });
  const { results } = await response.json();
  return results;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const actorId = context.params!.actorId;
  const actorData = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/`
  );

  const actorRolesData = await sendHttpRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/id/${actorId}/all_roles/?page_size=50`
  );

  const actorMovieIdArr = actorRolesData.flatMap(
    (movie: ResultElement[]) => movie[0].imdb_id
  );

  const actor = {
    id: actorData.imdb_id,
    name: actorData.name,
    birthDate: actorData.birth_date,
    bio: actorData.partial_bio,
    imgUrl: actorData.image_url,
    movieIds: actorMovieIdArr,
  };

  return {
    props: {
      actor: actor,
    },
  };
};

export default ActorPage;
