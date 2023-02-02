import styles from './Opener.module.css';

const Opener = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <p className={styles['opener-text']}>
          Search critically-acclaimed movies, inspiring documentaries,
          award-winning foreign films and more
        </p>
      </div>
    </div>
  );
};

export default Opener;
