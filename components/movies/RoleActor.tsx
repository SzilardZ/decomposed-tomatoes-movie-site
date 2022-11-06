import { useRouter } from 'next/router';
import styles from './RoleActor.module.css';

interface RoleActorProps {
  id: string;
  role: string;
  name: string;
}

const RoleActor = ({ id, role, name }: RoleActorProps) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/actor/${id}`);
  };

  return (
    <li className={styles['roles-actors']} onClick={clickHandler}>
      <div>{role}</div>
      <div className={styles['actor-name']}>{name}</div>
    </li>
  );
};

export default RoleActor;
