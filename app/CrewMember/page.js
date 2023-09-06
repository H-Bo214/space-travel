import Image from 'next/image';
import styles from './page.module.css';
import { bellefair, barlowCondensed, barlow } from '../font';

export default function CrewMember({ name, images, role, bio }) {
  console.log('images', images)
  return (
    <section className={styles.container}>
      <article className={styles.info}>
        <h2 className={`${bellefair.className} ${styles.role}`}>{role}</h2>
        <h3 className={`${bellefair.className} ${styles.name}`}>{name}</h3>
        <p className={`${barlow.className} ${styles.bio}`}>{bio}</p>
      </article>
      <section className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={images.png}
          width={images.width}
          height={images.height}
          // fill={true}
          alt={name}
          placeholder='blur'
          blurDataURL={images.png}
        />
      </section>
    </section>
  );
}
