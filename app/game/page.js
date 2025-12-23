"use client";

import styles from "../styles/game.module.css";
import { useState, useEffect, useRef } from "react";

export default function GamePage() {
  const [activePillar, setActivePillar] = useState(null);
  const pillarsSectionRef = useRef(null);
  const pillarDetailRef = useRef(null);
  const [activeBuildTab, setActiveBuildTab] = useState("overview");

  const isPillarsSticky = () => {
    if (!pillarsSectionRef.current) return false;

    const rect = pillarsSectionRef.current.getBoundingClientRect();
    return rect.top <= 80;
  };

  const handlePillarClick = (pillar) => {
    setActivePillar(pillar);

    setTimeout(() => {
      if (!pillarDetailRef.current) return;

      const baseOffset = 110;
      const extraOffsetIfNotSticky = 173;

      const offset = isPillarsSticky()
        ? baseOffset
        : baseOffset + extraOffsetIfNotSticky;

      const elementTop =
        pillarDetailRef.current.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }, 50);
  };

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
  },
    []);

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

      <section className={styles.pillarsWrapper}>
        <div
          ref={pillarsSectionRef}
          className={styles.pillarsSection}
        >
          <div className={styles.pillarsGrid}>
            <div
              className={`${styles.pillar} ${activePillar === "build" ? styles.active : ""}`}
              onClick={() => handlePillarClick("build")}
            >
              <h3>Build</h3>
              <p>
                Build and improve the city.
                Craft items, manage resources, water and food.
              </p>
            </div>

            <div
              className={`${styles.pillar} ${activePillar === "defend" ? styles.active : ""}`}
              onClick={() => handlePillarClick("defend")}
            >
              <h3>Defend</h3>
              <p>
                Each night, an attack occurs.
                Upgrade the wall and defenses to protect the city.
              </p>
            </div>

            <div
              className={`${styles.pillar} ${activePillar === "explore" ? styles.active : ""}`}
              onClick={() => handlePillarClick("explore")}
            >
              <h3>Explore</h3>
              <p>
                Explore the map, gather resources and items.
                Come back to the city before nightfall.
              </p>
            </div>

            <div
              className={`${styles.pillar} ${activePillar === "cooperate" ? styles.active : ""}`}
              onClick={() => handlePillarClick("cooperate")}
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
      {activePillar && (
        <section ref={pillarDetailRef} className={styles.pillarDetailSection}>
          <div className={styles.pillarContent}>
            {activePillar === "build" && (
              <div className={styles.buildLayout}>

                {/* LEFT SUBMENU */}
                <aside className={styles.buildMenu}>
                  {["overview", "city", "resources", "craft", "customisation"].map((tab) => (
                    <button
                      key={tab}
                      className={`${styles.buildMenuItem} ${activeBuildTab === tab ? styles.active : ""
                        }`}
                      onClick={() => setActiveBuildTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </aside>

                {/* RIGHT CONTENT */}
                <div className={styles.buildContent}>
                  {activeBuildTab === "overview" && (
                    <>
                      <h2>Build the City</h2>
                      <p>
                        In Brain Eaters, the city is your only hope of survival. <br />
                        On game start, it lies in ruins.<br />
                        Together with other survivors, you must rebuild and improve it.<br /><br />
                        Resources are limited, clock is ticking. <br />
                        Choose wisely, each decision impacts the entire community.<br /><br />
                        But one question remains : <br />
                        Who can you really trust ?
                      </p>
                    </>
                  )}
                  {activeBuildTab === "city" && (
                    <>
                      <h2>City Buildings</h2>

                      <p>
                        The city is composed of several essential buildings that support survival,
                        production, and defense.
                        Each building has a specific role and contributes to the overall functioning
                        of the city.
                      </p>
                      <p>
                        <strong>Warehouse</strong><br />Stores shared resources and items<br />
                        <strong>Well</strong><br />Produces and stores water for the city<br />
                        <strong>Wall</strong><br />The main defense against nightly zombie attacks<br />
                        <strong>Workshop, Kitchen, Pharmacy</strong><br />Craft equipment, food, and medicine
                      </p>

                      <p>
                        <strong>Personal Building</strong><br />
                        <strong>Shelter</strong><br />Your private space for storage, protection, and upgrades
                      </p>
                    </>
                  )}


                  {activeBuildTab === "resources" && (
                    <>
                      <h2>Resources & Storage</h2>

                      <p>
                        Survival depends on managing a wide variety of resources and items.
                        Each category plays a specific role in the city's progression.
                      </p>

                      <p>
                        <strong>Basic Resources</strong><br />
                        Wood, stone, metal scraps, fiber…
                        Found while exploring the wastelands.
                      </p>

                      <p>
                        <strong>Advanced Resources</strong><br />
                        Planks, metal sheets, bricks…
                        Crafted from basic resources in the Workshop.
                      </p>

                      <p>
                        <strong>Food & Water</strong><br />
                        Essential for survival and daily activities.
                      </p>

                      <p>
                        <strong>Medicine & Drugs</strong><br />
                        Bandages, medkits, stimulants…
                        Used to heal injuries, cure infections, and provide temporary boosts.
                      </p>

                      <p>
                        <strong>Equipment & Tools</strong><br />
                        Weapons, armor, and crafting tools.
                        Improve survivor efficiency and combat capabilities.
                      </p>
                    </>
                  )}

                  {activeBuildTab === "craft" && (
                    <>
                      <h2>Crafting</h2>

                      <p>
                        Crafting is divided into three specialized buildings,
                        each responsible for a different type of production.
                      </p>

                      <p>
                        <strong>Workshop</strong><br />
                        Craft advanced resources, tools, weapons, and equipment.<br />
                        The Workshop level determines available recipes and crafting speed.
                      </p>

                      <p>
                        <strong>Kitchen</strong><br />
                        Prepare food from raw ingredients.<br />
                        Upgrading the Kitchen unlocks better recipes and improves food quality.
                      </p>

                      <p>
                        <strong>Pharmacy</strong><br />
                        Create medicine and drugs.<br />
                        Higher levels unlock advanced medical supplies and efficiency bonuses.
                      </p>

                      <p>
                        Each crafting building can be enhanced with specialized modules,
                        such as forges or workbenches.
                        Module levels cannot exceed the building's level.
                      </p>
                    </>
                  )}

                  {activeBuildTab === "customisation" && (
                    <>
                      <h2>City Customisation</h2>
                      <p>
                        Brain Eaters features a deep city customisation system.
                        Every layer of the city can be modified to reflect your choices, progress and achievements.
                      </p>
                      <p>
                        Ground, textures, decorations, and buildings can all be customised,
                        allowing each city to develop its own identity.
                      </p>
                      <p>
                        Because the city is shared, your earned or unlocked assets are visible
                        to other players, making customisation a social and expressive feature.
                      </p>
                    </>
                  )}

                </div>

              </div>
            )}


            {activePillar === "defend" && (
              <div className={styles.centeredPillar}>
                <h2>Defend the city</h2>
                <img
                  src="/images/banner.jpg"
                  className={`${styles.banner}`}
                />
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
      )}


    </div>

  );
}
