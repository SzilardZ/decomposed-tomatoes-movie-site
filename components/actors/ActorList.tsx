import { Fragment } from 'react';
import { ActorType } from '../../types/actorTypes';

import styles from './ActorList.module.css';
import Navbar from '../navbar/Navbar';
import NoResults from '../no-results/NoResults';
import ActorItem from './ActorItem';

interface ActorListProps {
  actors: ActorType[];
}

const ActorList = ({ actors }: ActorListProps) => {
  let content;
  if (actors.length === 0) {
    content = <NoResults type='actor' />;
  }
  if (actors.length > 0) {
    content = (
      <ul className={styles.actors}>
        {actors.map(actor => (
          <ActorItem key={actor.id} id={actor.id} name={actor.name} />
        ))}
      </ul>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles['outer-container']}>
        <div className={styles['inner-container']}>{content}</div>
      </div>
    </Fragment>
  );
};

export default ActorList;
