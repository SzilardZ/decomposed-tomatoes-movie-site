import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from './Movie.module.css';

interface MovieProps {
  id: string;
  imageUrl: string;
}

const Movie = ({ id, imageUrl }: MovieProps) => {
  const router = useRouter();

  const selectMovieHandler = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <li className={styles.movie} onClick={selectMovieHandler}>
      <Image
        className={styles['movie-img']}
        src={imageUrl}
        alt='movie poster'
        width={266}
        height={400}
      />
    </li>
  );
};

export default Movie;
