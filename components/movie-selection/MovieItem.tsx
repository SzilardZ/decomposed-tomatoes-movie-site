import { useRouter } from 'next/router';
import Image from 'next/image';

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
      <div className={styles['movie-image']}>
        <Image src={image} onClick={selectMovieHandler} layout='fill' />
      </div>
    </li>
  );
};

export default MovieItem;
