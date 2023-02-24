import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link href='/'>
      <div className={styles.logo}>
        decompos<span className={styles.e}>e</span>d tomat
        <span className={styles.o}>o</span>es.
      </div>
    </Link>
  );
};

export default Logo;
