'use client';
import Nav from '../Nav/page';
import Link from 'next/link';
import styles from './layout.module.css';
import { barlowCondensed } from '../font';
import { usePathname } from 'next/navigation';

export default function DestinationLayout({ children }) {
  const navItems = [
    { id: '00', href: '/destinations/moon', name: 'moon' },
    { id: '01', href: '/destinations/mars', name: 'mars' },
    { id: '02', href: '/destinations/europa', name: 'europa' },
    { id: '03', href: '/destinations/titan', name: 'titan' },
  ];
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      <h1 className={`${barlowCondensed.className} ${styles.destinationHeading}`}>
        <span className={styles.num}>01</span> PICK YOUR DESTINATION
      </h1>
      <section className={styles.NavContainer}>
        <Nav>
          {navItems.map((item) => {
            const isActive = pathname === `/destinations/${item.name}`;
            return (
              <li key={item.id}>
                <Link
                  href={`/destinations/${item.name}`}
                  className={
                    isActive
                      ? `${styles.navList} ${styles.active}`
                      : `${styles.navList}`
                  }
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </Nav>
      </section>
      <section>{children}</section>
    </main>
  );
}
