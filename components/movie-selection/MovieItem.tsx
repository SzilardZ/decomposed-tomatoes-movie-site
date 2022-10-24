import { useRouter } from 'next/router';
import styles from './MovieItem.module.css';

interface MovieItemProps {
  id: string;
  image: string;
}

const MovieItem = ({ id, image }: MovieItemProps) => {
  const router = useRouter();

  const selectMovieHandler = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <li>
      <img
        src={image}
        className={styles['selected-image']}
        onClick={selectMovieHandler}
      />
    </li>
  );
};

export default MovieItem;
