"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.navbar}>
      <nav className={styles.navLeft}>
        <Link
          href="/"
          className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
        >
          Home
        </Link>

        <Link
          href="/game"
          className={`${styles.navLink} ${
            isActive("/game") ? styles.active : ""
          }`}
        >
          Game
        </Link>

        <Link
          href="/roadmap"
          className={`${styles.navLink} ${
            isActive("/roadmap") ? styles.active : ""
          }`}
        >
          Roadmap
        </Link>

        <Link
          href="/team"
          className={`${styles.navLink} ${
            isActive("/team") ? styles.active : ""
          }`}
        >
          Team
        </Link>
      </nav>

      <nav className={styles.navRight}>
        {/*
        <a href="#login" className={styles.navLink}>
          Login
        </a>
        <a href="#signup" className={styles.navLink}>
          Create Account
        </a>
        */}
      </nav>
    </header>
  );
}
