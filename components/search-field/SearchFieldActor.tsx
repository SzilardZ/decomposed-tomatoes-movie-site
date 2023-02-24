import React, { useRef } from 'react';

import styles from './SearchField.module.css';
import Button from '../ui/Button';

interface SearchFieldActorProps {
  onSearchActor: (actor: string) => void;
}

const SearchFieldActor = ({ onSearchActor }: SearchFieldActorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputRef.current!.value;
    if (userInput.length > 1) {
      onSearchActor(userInput);
    } else {
      alert('Please type at least 2 characters!');
    }
  };

  return (
    <form onSubmit={submitSearchHandler} className={styles['search-bar']}>
      <div className={styles.input}>
        <input
          type='text'
          id='search-movie'
          ref={inputRef}
          placeholder='actor name'
        />
        <Button buttonText='Search' />
      </div>
    </form>
  );
};

export default SearchFieldActor;
