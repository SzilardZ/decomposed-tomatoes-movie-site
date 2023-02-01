import { useRouter } from 'next/router';
import styles from './Actor.module.css';

interface ActorProps {
  id: string;
  name: string;
}

const Actor = ({ id, name }: ActorProps) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/actor/${id}`);
  };

  return (
    <li>
      <h2 className={styles['actor-name']} onClick={clickHandler}>
        {name}
      </h2>
    </li>
  );
};

export default Actor;
