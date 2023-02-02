import { useRouter } from 'next/router';
import styles from './ActorItem.module.css';

interface ActorItemProps {
  id: string;
  name: string;
}

const ActorItem = ({ id, name }: ActorItemProps) => {
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

export default ActorItem;
