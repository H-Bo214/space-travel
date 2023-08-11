import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/page";
import logo from "../../public/images/shared/logo.svg";
import styles from "./page.module.css";

export default function Header() {
  const navStyle = {
    backGround: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(40.774227142333984px)",
    paddingLeft: "123px",
    paddingRight: "165px",
  };

  const navItems = [
    { id: "00", href: "/", name: "home" },
    { id: "01", href: "/destinations/moon", name: "destination" },
    { id: "02", href: "/crew/commander", name: "crew" },
    { id: "03", href: "/technology/vehicle", name: "technology" },
  ];

  return (
    <header className={styles.header}>
      <Image
        src={logo}
        width={48}
        height={48}
        alt="space travel company logo, a white circle with a black four pointed star"
      />
      <Nav style={navStyle}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="li">
              <span className={styles.num}>{item.id}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </Nav>
    </header>
  );
}
