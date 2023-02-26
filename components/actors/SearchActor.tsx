import SearchField from '../search-field/SearchField';
import styles from './SearchActor.module.css';

const SearchActor = () => {
  return (
    <div className={styles['search-actor']}>
      <div className={styles['search-actor-container']}>
        <div className={styles['search-actor-container-inner']}>
          <h1 className={styles['title']}>Search for an actor</h1>
          <p className={styles['site-details']}>
            Search for your favorite actors or film makers, our movie site has a
            database of 11 million actors / crew and cast members.
          </p>
          <div className={styles['search-field']}>
            <SearchField type='actor' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActor;
