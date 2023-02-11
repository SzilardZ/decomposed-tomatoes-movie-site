import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link href='/'>
      <div className={styles.logo}>
        the movi<span>e</span> site.
      </div>
    </Link>
  );
};

export default Logo;
