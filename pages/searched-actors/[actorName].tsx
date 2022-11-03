import { GetServerSideProps } from 'next';
import ActorsList from '../../components/actors/ActorsList';
import { ActorElement } from '../../types/actorByIdTypes';
import { ActorType } from '../../types/actorTypes';

interface SearchedActorProps {
  actors: ActorType[];
}

const SearchedActor = (props: SearchedActorProps) => {
  return <ActorsList actors={props.actors} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const actorName = context.params!.actorName;
  const response = await fetch(
    `https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${actorName}/`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY!,
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
      },
    }
  );
  const { results } = await response.json();

  // For some reason, the API sends back not just actors, but some kind of TV shows,
  // so we filter the results for only actors by checking the id, because TV shows have
  // different IDs.
  const filteredActors = results.filter(
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
