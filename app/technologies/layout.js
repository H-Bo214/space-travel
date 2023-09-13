'use client';
import Nav from '../Nav/page';
import Link from 'next/link';
import styles from './layout.module.css';
import { barlowCondensed, bellefair } from '../font';
import { usePathname } from 'next/navigation';

export default function TechnologyLayout({ children }) {
  const navList = [
    { id: '1', href: '/technologies/vehicle', name: 'vehicle' },
    { id: '2', href: '/technologies/spaceport', name: 'spaceport' },
    { id: '3', href: '/technologies/space-capsule', name: 'space-capsule' },
  ];
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      <h1 className={`${barlowCondensed.className} ${styles.technologyHeading}`}>
        <span className={styles.num}>03</span> SPACE LAUNCH 101
      </h1>
      <section className={styles.contentNavContainer}>
        <nav>
          <ul className={styles.navItemsContainer}>
            {navList.map((item) => {
              const isActive = pathname === `/technologies/${item.name}`;
              const activeNavItem = isActive ? `${styles.navItemActive}` : '';
              return (
                <li key={item.id}>
                  <Link
                    href={`/technologies/${item.name}`}
                    className={` ${styles.navItem} ${isActive && activeNavItem}`}
                  >
                    {item.id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <section>{children}</section>
      </section>
    </main>
  );
}
