import { Fragment } from 'react';
import { ActorType } from '../../types/actorTypes';

import styles from './ActorList.module.css';
import Navbar from '../navbar/Navbar';
import NoResults from '../no-results/NoResults';
import ActorItem from './ActorItem';
import SearchField from '../search-field/SearchField';
import { capitalizeFirstLetter } from '../../util/helpers';

interface ActorListProps {
  actors: ActorType[];
  searchedActor: string;
}

const ActorList = ({ actors, searchedActor }: ActorListProps) => {
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
        <div className={styles['inner-container']}>
          <div className={styles['title-search-container']}>
            <h3 className={styles['sub-title']}>
              Results for: <span>{capitalizeFirstLetter(searchedActor)}</span>
            </h3>
            <SearchField type='actor' />
          </div>
          <div>{content}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActorList;
