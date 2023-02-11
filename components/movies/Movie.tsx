import { useRouter } from 'next/router';

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
      <img className={styles['movie-img']} src={imageUrl} alt='' />
    </li>
  );
};

export default Movie;
