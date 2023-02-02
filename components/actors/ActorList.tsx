import { Fragment } from 'react';
import { ActorType } from '../../types/actorTypes';
import Navbar from '../navbar/Navbar';
import ActorItem from './ActorItem';

import styles from './ActorList.module.css';

interface ActorListProps {
  actors: ActorType[];
}

const ActorList = (props: ActorListProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <ul className={styles.actors}>
          {props.actors.map(actor => (
            <ActorItem key={actor.id} id={actor.id} name={actor.name} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ActorList;
