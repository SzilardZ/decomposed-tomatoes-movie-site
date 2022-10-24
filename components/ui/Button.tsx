import styles from './Button.module.css';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return <button className={styles.fill}>{buttonText}</button>;
};

export default Button;
