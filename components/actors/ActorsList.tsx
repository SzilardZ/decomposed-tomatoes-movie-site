import { Fragment } from 'react';
import { ActorType } from '../../types/actorTypes';
import Navbar from '../hero/Navbar';
import Actor from './Actor';

import styles from './ActorsList.module.css';

interface ActorsListProps {
  actors: ActorType[];
}

const ActorsList = (props: ActorsListProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles['actors-container']}>
        <ul className={styles.actors}>
          {props.actors.map(actor => (
            <Actor key={actor.id} id={actor.id} name={actor.name} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ActorsList;
