import { ActorType } from '../../types/actorTypes';

interface ActorProps {
  id: string;
  name: string;
  imgUrl: string;
}

const Actor = ({ name, imgUrl }: ActorProps) => {
  return (
    <li>
      <h1>{name}</h1>
      <img src={imgUrl} alt='' />
    </li>
  );
};

export default Actor;
