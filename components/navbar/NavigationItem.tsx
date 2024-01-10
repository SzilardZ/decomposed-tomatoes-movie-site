import Link from 'next/link';
import styles from './NavigationItem.module.css';

interface NavigationItemProps {
  text: string;
  linkTo: string;
}

const NavigationItem = ({ text, linkTo }: NavigationItemProps) => {
  return (
    <li className={styles.menu__link}>
      <Link href={linkTo} className={styles.menu__link}>
        {text}
      </Link>
      <svg
        version='1.1'
        x='0px'
        y='0px'
        viewBox='0 0 152.9 43.4'
        xmlSpace='preserve'>
        <path d='M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4' />
      </svg>
    </li>
  );
};
export default NavigationItem;
