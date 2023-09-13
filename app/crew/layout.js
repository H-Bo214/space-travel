'use client';
import Link from 'next/link';
import styles from './layout.module.css';
import { barlowCondensed } from '../font';
import { usePathname } from 'next/navigation';

export default function CrewLayout({ children }) {
  const navItems = [
    { id: '00', href: '/crew/commander', name: 'commander', cx: '7.5' },
    {
      id: '01',
      href: '/crew/mission-specialist',
      name: 'mission-specialist',
      cx: '46.5',
    },
    { id: '02', href: '/crew/pilot', name: 'pilot', cx: '85.5' },
    {
      id: '03',
      href: '/crew/flight-engineer',
      name: 'flight-engineer',
      cx: '124.5',
    },
  ];
  const pathname = usePathname();
  const opacity = '0.174363';

  return (
    <main className={styles.main}>
      <section className={styles.contentNavContainer}>
        <h1 className={`${barlowCondensed.className} ${styles.crewHeading}`}>
          <span className={styles.num}>02</span> Meet Your Crew
        </h1>
        <section>{children}</section>
        <section className={styles.navContainer}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='132'
            height='25'
            viewBox='0 0 132 15'
            fill='none'
          >
            {navItems.map((item) => {
              const isActive = pathname === `/crew/${item.name}`;
              return (
                <Link href={item.href} key={item.id}>
                  <circle
                    opacity={isActive ? '' : opacity}
                    cx={item.cx}
                    cy='7.5'
                    r='7.5'
                    fill='white'
                  />
                </Link>
              );
            })}
          </svg>
        </section>
      </section>
    </main>
  );
}
