import { ActorType } from '../../types/actorTypes';
import Actor from './Actor';

interface ActorsListProps {
  actors: ActorType[];
}

const ActorsList = (props: ActorsListProps) => {
  return (
    <div>
      <ul>
        {props.actors.map(actor => (
          <Actor
            key={actor.id}
            id={actor.id}
            name={actor.name}
            imgUrl={actor.imgUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
