import Image from 'next/image';
import styles from './page.module.css';
import { bellefair, barlowCondensed, barlow } from '../font';

export default function Destination({ name, description, image, distance, travel }) {
  return (
    <section className={styles.container}>
      <section>
        <Image
          className={styles.image}
          src={image}
          width={445}
          height={445}
          alt={name}
          placeholder='blur'
          blurDataURL={image}
        />
      </section>
      <article className={styles.destinationContainer}>
        <h2 className={`${styles.name} ${bellefair.className}`}>{name}</h2>
        <p className={`${styles.description} ${barlow.className}`}>{description}</p>
        <section className={styles.detailsContainer}>
          <section>
            <h3 className={`${styles.detailsHeading} ${barlowCondensed.className}`}>
              AVG DISTANCE
            </h3>
            <p className={`${styles.distanceTravel} ${bellefair.className}`}>
              {distance}
            </p>
          </section>
          <section>
            <h3 className={`${styles.detailsHeading} ${barlowCondensed.className}`}>
              EST. TRAVEL TIME
            </h3>
            <p className={`${styles.distanceTravel} ${bellefair.className}`}>
              {travel}
            </p>
          </section>
        </section>
      </article>
    </section>
  );
}
