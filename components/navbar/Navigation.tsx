import styles from './Navigation.module.css';
import Logo from '../ui/Logo';
import Link from 'next/link';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles['navbar-links']}>
        <NavigationItem text='Upcoming' linkTo='/upcoming-movies' />
        <NavigationItem text='Our Favorites' linkTo='/our-favorites' />
        <NavigationItem text='Your Favorites' linkTo='/favorite-movies' />
        <NavigationItem text='Contact Us' linkTo='/contact' />
      </ul>
    </nav>
  );
};

export default Navigation;
