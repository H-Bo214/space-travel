import styles from './page.module.css';
import Image from 'next/image';
import { bellefair, barlow, barlowCondensed } from '../font';

export default function Technology({name, description, images }) {
  return (
    <section className={styles.container}>
    <article className={styles.info}>
      <h2 className={`${barlowCondensed.className} ${styles.heading}`}>The terminology...</h2>
      <h3 className={`${bellefair.className} ${styles.name}`}>{name}</h3>
      <p className={`${barlow.className} ${styles.description}`}>{description}</p>
    </article>
    <section className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={images.portrait.jpg}
        width={images.portrait.width}
        height={images.portrait.height}
        alt={name}
        placeholder='blur'
        blurDataURL={images.portrait.jpg}
      />
    </section>
  </section>
  )
}