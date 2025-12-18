"use client";

import styles from "../styles/game.module.css";
import { useState, useEffect, useRef } from "react";

export default function GamePage() {
  const [activePillar, setActivePillar] = useState("survive");
  const pillarsSectionRef = useRef(null);

useEffect(() => {
  const pillarsSection = pillarsSectionRef.current;
  if (!pillarsSection) return;

  const handleScroll = () => {
    const rect = pillarsSection.getBoundingClientRect();
    const navbarHeight = 80; // ← Match your CSS top value

    // Add a small buffer to prevent flicker at the edge
    const isStuck = rect.top <= navbarHeight + 10;

    pillarsSection.classList.toggle(styles.stuck, isStuck);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className={styles.gamePage}>
      {/* ==================== INTRO ==================== */}
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

      {/* ==================== PILLARS ==================== */}
      <section className={styles.pillarsWrapper}>
        <div
          ref={pillarsSectionRef}
          className={styles.pillarsSection}
        >
          <div className={styles.pillarsGrid}>
            <div
              className={`${styles.pillar} ${activePillar === "survive" ? styles.active : ""}`}
              onClick={() => setActivePillar("survive")}
            >
      <h3>Build</h3>
      <p>
        Build and improve the city.
        Craft items, manage resources, water and food.
      </p>
    </div>

    <div
      className={`${styles.pillar} ${activePillar === "build" ? styles.active : ""}`}
      onClick={() => setActivePillar("build")}
    >
      <h3>Defend</h3>
      <p>
        Each night, an attack occurs.
        Upgrade the wall and defenses to protect the city.
      </p>
    </div>

    <div
      className={`${styles.pillar} ${activePillar === "explore" ? styles.active : ""}`}
      onClick={() => setActivePillar("explore")}
    >
      <h3>Explore</h3>
      <p>
        Explore the map, gather resources and items.
        Come back to the city before nightfall.
      </p>
    </div>

    <div
      className={`${styles.pillar} ${activePillar === "cooperate" ? styles.active : ""}`}
      onClick={() => setActivePillar("cooperate")}
    >
      <h3>Cooperate</h3>
      <p>
        Play with others, share resources.
        Cooperation is primordial to survive.
      </p>
    </div>

  </div>
  </div>
</section>
<section className={styles.pillarDetailSection}>
  <div className={styles.pillarContent}>
    {activePillar === "survive" && (
      <div>
      <h2>City Buildings</h2>
      <p>
        Several buildings compose the city : <br />
        Warehouse : Storage for items and resources. <br />
        Well : Provides water for the city. <br />
        Workshop : Craft tools and equipment. <br />
        Wall : The City defense against nightly attacks. <br />
        Shelter : Your personal storage and defense. <br />
        Kitchen + Pharmacy : Prepare food and medicine for the city.
        
      </p>
    </div>
  )}

  {activePillar === "build" && (
    <div>
      <h2>Build Your Shelter</h2>
      <p>
        Your shelter is your personal space.
        Upgrade it to store resources, craft equipment, and survive longer.
      </p>
      <p>
        The city itself must also be maintained.
        Walls, buildings, and defenses depend on collective effort.
      </p>
    </div>
  )}

  {activePillar === "explore" && (
    <div>
      <h2>Explore the Wastelands</h2>
      <p>
        Venture outside the city to scavenge abandoned zones.
        The further you go, the greater the rewards, and the risks.
      </p>
    </div>
  )}

  {activePillar === "cooperate" && (
    <div>
      <h2>Survive Together</h2>
      <p>
        Resources are shared.
        Defenses are collective.
        Cooperation is not optional.
      </p>
      <p>
        Lone survivors rarely last long.
      </p>
    </div>
  )}
  </div>
</section>


    </div>
    
  );
}
