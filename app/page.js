"use client";

import Head from 'next/head';
import styles from './styles/Home.module.css';
import { useState } from "react";

export default function Home() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Brain Eaters | Official Website</title>
        <meta 
          name="description" 
          content="Brain Eaters is a post-apocalyptic cooperative survival strategy game." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<section className={styles.bannerSection}>

  <div className={`${styles.fogContainer} ${hovering ? styles.fogReveal : ""}`}>
    <div className={`${styles.fogLayer} ${styles.fog}`}></div>
    <div className={`${styles.fogLayer} ${styles.fog1}`}></div>
    <div className={`${styles.fogLayer} ${styles.fog2}`}></div>

    <img
      src="/images/hunter_eyes.png"
      className={`${styles.hunterEyes} ${hovering ? styles.fadeIn : ""}`}
    />
  </div>

</section>


      <main className={styles.main}>

        <p className={styles.introText}>
          <span>Many have entered the Wastelands.</span>
          <span>None survived.</span>
          <span>Do you have what it takes?</span>
        </p>


        <a
          href="/game"
          className={styles.discoverButton}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Discover the Game
        </a>
      </main>


    </div>
  );
}
