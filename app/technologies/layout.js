'use client';
import Nav from '../Nav/page';
import Link from 'next/link';
import styles from './layout.module.css';
import { barlowCondensed, bellefair } from '../font';
import { usePathname } from 'next/navigation';

export default function TechnologyLayout({ children }) {
  const navItems = [
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
          <ul>
            {navItems.map((item) => {
              const isActive = pathname === `/technologies/${item.name}`;
              const activeNavItem = isActive ? `${styles.NavItemActive}` : '';
              const activeListItem = isActive ? `${styles.active}` : '';
              return (
                <div
                  key={item.id}
                  className={` ${styles.liContainer} ${isActive && activeNavItem}`}
                >
                  <li>
                    <Link
                      href={`/technologies/${item.name}`}
                      className={`${styles.navList} ${bellefair.className} ${
                        isActive && activeListItem
                      }
                        `}
                    >
                      {item.id}
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
        <section>{children}</section>
      </section>
    </main>
  );
}
