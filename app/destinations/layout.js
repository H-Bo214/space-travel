import Nav from "../Nav/page";
import Link from "next/link";
import styles from "./layout.module.css";
import { barlowCondensed } from "../font";
import getDestinations from "../apiCalls";

export default async function DestinationLayout({ children }) {
  // A feature of Next.js is auto caching of previously fetched data. If the data is available from the cache a new API is not executed.
  const destinations = await getDestinations();
  return (
    <div className={styles.bgImageWrapper}>
      <h1 className={`${barlowCondensed.className} ${styles.destinationHeading}`}>
        <span className={styles.num}>01</span> PICK YOUR DESTINATION
      </h1>
      <section className={styles.NavContainer}>
        <Nav>
          {destinations.map((destination) => {
            return (
              <Link href={`/destinations/${destination.name}`} key={destination.id} className="li">
                {destination.name}
              </Link>
            );
          })}
        </Nav>
      </section>
      <main>{children}</main>
    </div>
  );
}
