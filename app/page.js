import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { bellefair, barlowCondensed } from "./font.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <section>
          <h1 className={`${barlowCondensed.className} ${styles.heading}`}>
            SO, YOU WANT TO TRAVEL TO
            <span className={`${styles.spaceText} ${bellefair.className}`}>
              SPACE
            </span>
          </h1>
        </section>
        <article className={styles.article}>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
      </section>
      <section className={styles.exploreContainer}>
        <Link
          className={`${styles.explore} ${bellefair.className}`}
          href="/destinations/moon"
        >
          EXPLORE
        </Link>
      </section>
    </main>
  );
}
