import { GetServerSideProps } from 'next';
import ActorList from '../../components/actors/ActorList';
import { API_HOST_MOVIE_MINI_DB, API_KEY } from '../../constants/contants';
import { ActorElement } from '../../types/actorByIdTypes';
import { ActorType } from '../../types/actorTypes';
import { sendHttpGetRequest } from '../../util/http';

interface SearchedActorProps {
  actors: ActorType[];
}

const SearchedActor = (props: SearchedActorProps) => {
  return <ActorList actors={props.actors} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const actorName = context.params!.actorName;

  const actorData = await sendHttpGetRequest(
    `https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${actorName}/`,
    API_KEY,
    API_HOST_MOVIE_MINI_DB
  );

  // For some reason, the API sends back not just actors, but some kind of TV shows,
  // so we filter the results for only actors by checking the format of the id, because
  // TV shows have different kind of IDs.
  const filteredActors = actorData.filter(
    (actor: ActorElement) => actor.imdb_id.slice(0, 2) === 'nm'
  );

  const actors = filteredActors.map((actor: ActorElement) => ({
    id: actor.imdb_id,
    name: actor.name,
  }));

  return {
    props: {
      actors: actors,
    },
  };
};

export default SearchedActor;
