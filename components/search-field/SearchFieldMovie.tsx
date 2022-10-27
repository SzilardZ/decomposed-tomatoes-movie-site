import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import styles from './SearchField.module.css';
import Button from '../ui/Button';

const SearchFieldMovie = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputRef.current!.value;
    if (userInput.length > 1) {
      router.push(`/searched-movie/${userInput}`);
    } else {
      alert('Please type at least 2 characters!');
    }
  };

  return (
    <form onSubmit={submitSearchHandler} className={styles['search-bar']}>
      {/* <label htmlFor='search-movie'>Search Movie</label> */}
      <div className={styles.input}>
        <input
          type='text'
          id='search-movie'
          ref={inputRef}
          placeholder='movie title'
        />
        <Button buttonText='Search now' />
      </div>
    </form>
  );
};

export default SearchFieldMovie;
