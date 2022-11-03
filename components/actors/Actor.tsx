import styles from './Actor.module.css';

interface ActorProps {
  id: string;
  name: string;
}

const Actor = ({ name }: ActorProps) => {
  return (
    <li>
      <h2 className={styles['actor-name']}>{name}</h2>
    </li>
  );
};

export default Actor;
