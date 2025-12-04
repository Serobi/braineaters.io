import Head from 'next/head';
import styles from '../styles/Home.module.css'; // Assuming you have or will create this CSS file

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brain Eaters | Official Website</title>
        <meta name="description" content="Official website for Brain Eaters - The next generation of digital experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="/" className={styles.logoLink}>
  <img src="\images\logo.png" alt="Brain Eaters Logo" className={styles.logoImage} />
</a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

<div className={styles.container}>

  <div className={styles.banner}>
    {/* Banner background only */}
  </div>

  <main className={styles.main}>
    <div className={styles.contentSection}>
      <h2 className={styles.title}>Survival Exploration Cooperation</h2>
      <button className={styles.ctaButton}>
        Discover the game
      </button>

      <p className={styles.description}>
        Brain Eaters is the first ever cooperative survival strategy game.<br />
        Play with your friends, defend your city, explore the Wastelands, 
        gather resources and survive in this world full of dangers.
      </p>
    </div>
  </main>

</div>



      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Brain Eaters. All rights reserved.</p>
      </footer>
    </div>
  );
}