import { barlowCondensed } from '../font';
import styles from './page.module.css';

export default function Nav({ children }) {
  return (
    <nav className={`${barlowCondensed.className}`}>
      <ul className={styles.ul}>{children}</ul>
    </nav>
  );
}
