"use client";

import styles from "../styles/game.module.css";
import { useState } from "react";

export default function GamePage() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (n) => {
    setOpenSection(openSection === n ? null : n);
  };

  const Section = ({ id, title }) => (
  <div className={styles.section}>
    <button
      className={
        openSection === id
          ? `${styles.sectionToggle} ${styles.openToggle}`
          : styles.sectionToggle
      }
      onClick={() => toggle(id)}
    >
      {title}
    </button>

    <div
      className={
        openSection === id
          ? `${styles.sectionContent} ${styles.open}`
          : styles.sectionContent
      }
    >
      <p>Text to add</p>
      <div className={styles.imagePlaceholder}>Image to add</div>
    </div>
  </div>
  );

  return (
    <div className={styles.gamePage}>
      <section className={styles.gameIntro}>
        <h1 className={styles.title}>
          A New Genre of Survival Game
          <span className={styles.titleBar}></span>
        </h1>

        <p className={styles.description}>
          <strong>Brain Eaters</strong> is the first game to combine survival,
          strategy, and cooperation into a single experience.
          <br />
          Lead your survivor, play with others, and survive as long as you can
          in a world where every decision counts.
        </p>
      </section>
    </div>
    
  );
}
