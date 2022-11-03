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

  const actors = results.map((actor: ActorElement) => ({
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
