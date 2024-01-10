import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        ©Decomposed Tomatoes, 2023. (We like you, Rotten Tomatoes)
      </p>
      <p className={styles.paragraph}>A pet project by Szilard Z.</p>
    </footer>
  );
};

export default Footer;
