import Link from 'next/link';
import tomato from '../../public/tomato.png';

import styles from './Logo.module.css';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <div className={styles.logo}>
        <div>
          decomposed t
          <span className={styles.imageReplacement}>
            <Image src={tomato} alt='tomato' />
          </span>
          matoes.
        </div>
      </div>
    </Link>
  );
};

export default Logo;
