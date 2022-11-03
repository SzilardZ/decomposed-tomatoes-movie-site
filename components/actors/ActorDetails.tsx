import styles from './ActorDetails.module.css';
import { ActorDetailedType } from '../../types/actorTypes';
import { Fragment } from 'react';
import Navbar from '../hero/Navbar';

interface ActorDetailsProps {
  actor: ActorDetailedType;
}

const ActorDetails = (props: ActorDetailsProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles['actor-detail-container']}>
        <div>
          <h1 className={styles['actor-name']}>{props.actor.name}</h1>
          <h3 className={styles['actor-birth-date']}>
            {props.actor.birthDate}
          </h3>
          <p className={styles['actor-bio']}>{props.actor.bio}</p>
        </div>
        <div>
          <img
            src={props.actor.imgUrl}
            alt=''
            className={styles['actor-img']}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ActorDetails;
