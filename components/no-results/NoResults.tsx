import styles from './NoResults.module.css';

interface NoResultsProps {
  type: string;
}

const NoResults = ({ type }: NoResultsProps) => {
  return (
    <div className={styles.container}>
      <p
        className={
          styles.text
        }>{`There is no ${type} with that name! Please try with a different one!`}</p>
    </div>
  );
};

export default NoResults;
