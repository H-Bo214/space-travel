import Nav from "../Nav/page";
import Link from "next/link";
import styles from "./layout.module.css";

import { barlowCondensed } from "../font";

export default function DestinationLayout({ children }) {
  return (
    <div className={styles.bgImageWrapper}>
      <h1
        className={`${barlowCondensed.className} ${styles.destinationHeading}`}
      >
        <span className={styles.num}>01</span> PICK YOUR DESTINATION
      </h1>
      <section className={styles.NavContainer}>
        <Nav>
          <li>
            <Link href="/destinations/moon" className="li">
              MOON
            </Link>
          </li>
          <li>
            <Link href="/destinations/mars" className="li">
              MARS
            </Link>
          </li>
          <li>
            <Link href="/destinations/europa" className="li">
              EUROPA
            </Link>
          </li>
          <li>
            <Link href="/destinations/titan" className="li">
              TITAN
            </Link>
          </li>
        </Nav>
      </section>
      <main>{children}</main>
    </div>
  );
}
