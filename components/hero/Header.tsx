import styles from './Header.module.css';
import Navbar from '../navbar/Navbar';
import SearchField from '../search-field/SearchField';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['dark-overlay']}>
        <Navbar />
        <div className={styles['header-container']}>
          <div className={styles['header-container-inner']}>
            <h1 className={styles['title']}>Search for a movie</h1>
            <p className={styles['site-details']}>
              Decomposed Tomatoes works with a large database and provides
              complete and updated data for over 9 million titles and 11 million
              actors / crew and cast members.
            </p>
            <div className={styles['search-field']}>
              <SearchField type='movie' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
