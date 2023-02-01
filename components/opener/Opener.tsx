import styles from './Opener.module.css';

const Opener = () => {
  return (
    <div className={styles.container}>
      <p className={styles['opener-text']}>
        Search critically-acclaimed movies, inspiring documentaries,
        award-winning foreign films and more
      </p>
    </div>
  );
};

export default Opener;
