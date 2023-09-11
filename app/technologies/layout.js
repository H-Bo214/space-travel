'use client';
import Nav from '../Nav/page';
import Link from 'next/link';
import styles from './layout.module.css';
import { barlowCondensed } from '../font';
import { usePathname } from 'next/navigation';

export default function TechnologyLayout( {children}) {
  const navItems = [
    { id: '1', href: '/technologies/vehicle', name: 'vehicle' },
    { id: '2', href: '/technologies/spaceport', name: 'spaceport' },
    { id: '3', href: '/technologies/space-capsule', name: 'space-capsule' },
  ];
  const pathname = usePathname();
  return (
    <main>
        <h1 className={`${barlowCondensed.className} ${styles.technologyHeading}`}>
        <span className={styles.num}>03</span> SPACE LAUNCH 101
      </h1>
      <section>{children}</section>
      <section className={styles.NavContainer}>
        <Nav>
          {navItems.map((item) => {
            const isActive = pathname === `/technologies/${item.name}`;
            return (
              <li key={item.id}>
                <Link
                  href={`/technologies/${item.name}`}
                  className={
                    isActive
                      ? `${styles.navList} ${styles.active}`
                      : `${styles.navList}`
                  }
                >
                  {item.id}
                </Link>
              </li>
            );
          })}
        </Nav>
        </section>
    </main>
  )
}