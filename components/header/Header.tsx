import styles from './Header.module.css';
import Navbar from './Navbar';
import SearchField from './SearchField';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles['header-container']}>
        <div className={styles['header-container-inner']}>
          <h1 className={styles['title']}>A Super Cool Movie Website</h1>
          <p className={styles['site-details']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod,
            maiores impedit optio itaque, odit tempore consequuntur facere
            soluta necessitatibus ab saepe?
          </p>
          <div className={styles['search-field']}>
            <SearchField />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
