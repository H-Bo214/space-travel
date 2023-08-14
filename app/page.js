import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import circle from '../public/images/home/explore-circle.png';
import { bellefair, barlowCondensed, barlow } from './font.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainContentContainer}>
        <section className={styles.leftContentContainer}>
          <section>
            <h1 className={`${barlowCondensed.className} ${styles.heading}`}>
              So, you want to travel to
              <span className={`${styles.spaceText} ${bellefair.className}`}>
                space
              </span>
            </h1>
          </section>
          <article className={`${styles.article} ${barlow.className}`}>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </article>
        </section>
        <section className={styles.exploreContainer}>
          <Link href='/destinations/moon'>
            <Image
              src={circle}
              width={274}
              height={274}
              alt='White circle against a background of Earth with the word explore'
              // priority={true}
              placeholder='blur'
              blurDataURL={'/images/home/explore-circle.png'}
            />
          </Link>
        </section>
      </section>
    </main>
  );
}
