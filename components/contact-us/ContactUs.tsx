import Link from 'next/link';
import styles from './ContactUs.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles['text-container']}>
        <p className={styles.text}>
          Never, never, contact us, okay? Not if there's a fire, not even if you
          hear the sound of a thud from our server and one week later there's a
          smell coming from there that can only be a decaying human body and you
          have to hold a hanky to your face because the stench is so thick that
          you think you're going to faint. Even then, don't contact us. Or, if
          it's election night, and you're excited and you want to celebrate
          because some fudgepacker that you date has been elected the first
          queer president of the United States and he's going to have you down
          to Camp David, and you want someone to share the moment with. Even
          then, don't contact us. Not on this website. Not for any reason. Do
          you get me, sweetheart?
        </p>
        <div className={styles['go-back']}>
          <Link href='/'>Go to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
