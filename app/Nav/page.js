import { barlowCondensed } from "../font";
import styles from "./page.module.css";

export default function Nav({ children, style }) {
  return (
    <nav className={`${barlowCondensed.className}`} style={style}>
      <ul className={styles.ul}>{children}</ul>
    </nav>
  );
}
