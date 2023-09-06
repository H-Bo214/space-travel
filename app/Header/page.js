'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav/page';
import logo from '../../public/images/shared/logo.svg';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const navItems = [
    { id: '00', href: '/', name: 'home' },
    { id: '01', href: '/destinations/moon', name: 'destinations' },
    { id: '02', href: '/crew/commander', name: 'crew' },
    { id: '03', href: '/technology/vehicle', name: 'technology' },
  ];
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.anchor}>
        <Image
          src={logo}
          width={48}
          height={48}
          alt='space travel company logo, a white circle with a black four pointed star'
        />
      </Link>
      <Nav>
        {navItems.map((item) => {
          const isActive = pathname.includes(item.name);
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={
                  isActive
                    ? `${styles.navList} ${styles.active}`
                    : `${styles.navList}`
                }
              >
                <span className={styles.num}>{item.id}</span>
                {item.name}
              </Link>
            </li>
          );
        })}
      </Nav>
    </header>
  );
}
