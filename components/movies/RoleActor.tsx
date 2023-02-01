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
      <div>
        <span className={styles['actor-name']}>{name}</span>
      </div>
    </li>
  );
};

export default RoleActor;
