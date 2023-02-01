import styles from './Button.module.css';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <span className={styles['button-text']}>{buttonText}</span>
    </button>
  );
};

export default Button;
