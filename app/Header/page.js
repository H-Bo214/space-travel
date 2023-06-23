import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/page";
import logo from "../../public/assets/images/shared/logo.svg";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        width={48}
        height={48}
        alt="space travel company logo, a white circle with a black four pointed star"
        className={styles.logo}
      />
      <Nav>
        <li>
          <Link href="/" className={styles.li}>
            <span className={styles.num}>00</span>HOME
          </Link>
        </li>
        <li>
          <Link href="/destinations/moon" className={styles.li}>
            <span className={styles.num}>01</span>DESTINATIONS
          </Link>
        </li>
        <li>
          <Link href="/crew/commander" className={styles.li}>
            <span className={styles.num}>02</span>CREW
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.li}>
            <span className={styles.num}>03</span>TECHNOLOGY
          </Link>
        </li>
      </Nav>
    </header>
  );
}
