import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/page";
import logo from "../../public/images/shared/logo.svg";
import styles from "./page.module.css";

export default function Header() {
  const navStyle = {
    backGround: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(40.774227142333984px)",
    paddingLeft: "123px",
    paddingRight: "165px",
  };

  return (
    <header className={styles.header}>
      <Image
        src={logo}
        width={48}
        height={48}
        alt="space travel company logo, a white circle with a black four pointed star"
      />
      <Nav style={navStyle}>
        <li>
          <Link href="/" className="li">
            <span className={styles.num}>00</span>HOME
          </Link>
        </li>
        <li>
          <Link href="/destinations/moon" className="li">
            <span className={styles.num}>01</span>DESTINATION
          </Link>
        </li>
        <li>
          <Link href="/crew/commander" className="li">
            <span className={styles.num}>02</span>CREW
          </Link>
        </li>
        <li>
          <Link href="/" className="li">
            <span className={styles.num}>03</span>TECHNOLOGY
          </Link>
        </li>
      </Nav>
    </header>
  );
}
