import styles from './Button.module.css';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles['button-text']}>{buttonText}</span>
      </button>
    </div>
  );
};

export default Button;
