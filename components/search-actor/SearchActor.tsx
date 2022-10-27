import SearchField from '.././hero/SearchField';
import styles from './SearchActor.module.css';

const SearchActor = () => {
  return (
    <div className={styles['search-actor']}>
      <div className={styles['search-actor-container']}>
        <div className={styles['search-actor-container-inner']}>
          <h1 className={styles['title']}>Search for an Actor</h1>
          <p className={styles['site-details']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod,
            maiores impedit optio itaque, odit tempore consequuntur facere
            soluta necessitatibus ab saepe?
          </p>
          <div className={styles['search-field']}>
            <SearchField text='type actor' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActor;
