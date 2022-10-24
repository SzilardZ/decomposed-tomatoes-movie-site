import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import styles from './SearchField.module.css';

import Button from '../ui/Button';

const SearchField = () => {
  const inputMovieRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitSearchMovieHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/searched-movie/${inputMovieRef.current!.value}`);
  };

  return (
    <form onSubmit={submitSearchMovieHandler} className={styles['search-bar']}>
      {/* <label htmlFor='search-movie'>Search Movie</label> */}
      <span className={styles.input}>
        <input type='text' id='search-movie' ref={inputMovieRef} />
      </span>
      <Button buttonText='Search now' />
    </form>
  );
};

export default SearchField;
