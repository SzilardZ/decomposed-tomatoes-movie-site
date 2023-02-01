import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>©The Movie Project 2023</p>
      <p className={styles.paragraph}>
        A pet project by Szilard Z. It was fun!
      </p>
    </footer>
  );
};

export default Footer;
