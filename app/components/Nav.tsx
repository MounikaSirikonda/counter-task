"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";

/* Application Routes */
import { ROUTES } from "../routes";

export const Nav = () => {
  const pathname: string = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${
          pathname === ROUTES.HOME ? styles.active : ""
        }`}
        href={ROUTES.HOME}
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === ROUTES.VERIFY ? styles.active : ""
        }`}
        href={ROUTES.VERIFY}
      >
        Verify
      </Link>
    </nav>
  );
};
