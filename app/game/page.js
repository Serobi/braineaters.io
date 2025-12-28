"use client";

import styles from "../styles/game.module.css";
import { useState, useEffect, useRef } from "react";

export default function GamePage() {
  const [activePillar, setActivePillar] = useState(null);
  const pillarsSectionRef = useRef(null);
  const pillarDetailRef = useRef(null);
  const [activeBuildTab, setActiveBuildTab] = useState("overview");
  const [activeExploreTab, setActiveExploreTab] = useState("overview");

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
                  src="/images/Banner.jpg"
                  alt="Brain Eaters - Zombie attack on city walls"
                  className={`${styles.banner}`}
                />
                <p>
                  Each night, zombies attack the city.
                  As days pass, attacks become stronger, forcing survivors to prepare
                  and improve defenses efficiently.
                </p>

                <p>
                  City defense relies on three main elements :
                </p>

                <p>
                  <strong>Wall Level</strong><br />
                  The Wall is the city’s primary line of defense.
                  Upgrading it increases resistance against attacks.
                </p>

                <p>
                  <strong>Assigned Defenders</strong><br />
                  Survivors can be assigned to defend the city during the night.
                  More defenders improve the chances of holding the Wall.
                </p>

                <p>
                  <strong>Equipment</strong><br />
                  Weapons and armor used by defenders directly impact defense efficiency.
                </p>

                <p>
                  If the Wall holds, the city survives another night.
                </p>

                <p>
                  If zombies break through, survivors may be injured, wounded or even die.
                  The outcome will be randomly determined based on : <br />
                  <strong>Shelter level</strong><br />
                  <strong>Survivor equipment</strong><br />
                  <strong>Survivor level and skills</strong><br />
                </p>
              </div>
            )}

            {activePillar === "explore" && (
              <div className={styles.buildLayout}>

                {/* LEFT SUBMENU */}
                <aside className={styles.buildMenu}>
                  {["overview", "world", "loot", "exploration", "combat", "Procedural World"].map((tab) => (
                    <button
                      key={tab}
                      className={`${styles.buildMenuItem} ${activeExploreTab === tab ? styles.active : ""
                        }`}
                      onClick={() => setActiveExploreTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </aside>

                {/* RIGHT CONTENT */}
                <div className={styles.buildContent}>
                  {activeExploreTab === "overview" && (
                    <>
                      <h2>Map and exploration</h2>
                      <p>
                        The map is the second core area of Brain Eaters. <br />
                        A procedural world you must explore to develop the city.
                      </p>

                      <p>
                        Plan each expedition carefully, scavenge resources, and return before nightfall.
                      </p>

                      <p>
                        <strong>But beware !</strong><br />
                        When night falls, the rules change. <br />
                        Predators roam the land, and returning to the city is no longer an option.
                      </p>

                      <p>
                        Out there, one mistake or one unlucky move can cost everything.
                      </p>
                    </>
                  )}

                  {activeExploreTab === "world" && (
                    <>
                      <h2>World map</h2>

                      <p>
                        The world map of Brain Eaters is composed of isometric tiles.<br />
                        Each tile represents a distinct area that can be explored by survivors, <br />
                        with its own type, loot, enemies and elements.
                      </p>


                      <p>
                        Tiles are defined by their type, such as Wasteland or Forest.<br />
                        Tile types shape the environment, atmosphere, and potential dangers.
                      </p>

                      <p>
                        Each tile is filled with elements like ruins, vehicles, buildings,
                        or natural obstacles.<br />
                        These elements define what can be looted and the quantity available.
                      </p>

                    </>
                  )}

                  {activeExploreTab === "loot" && (
                    <>
                      <h2>Loot</h2>
                      <p>
                        In order to progress and upgrade the city, survivors will have to explore the map to gather resources and items.
                      </p>
                      <p>
                        <strong>Loot Tables & Probabilities</strong><br />
                        Each tile type defines which resources can be found.<br />
                        A Forest will not provide the same loot as a Wasteland.
                      </p>

                      <p>
                        The presence and number of elements directly affect loot probabilities.<br />
                        Tiles with ruins, vehicles, or structures offer higher rewards
                        than empty areas.
                      </p>

                      <p>
                        <strong>Loot Depletion</strong><br />
                        Looting a tile gradually depletes its resources.<br />
                        Each expedition reduces future loot chances on that tile.
                      </p>

                      <p>
                        Overexploiting the same area is risky.<br />
                        Survivors must choose between returning to known locations
                        or pushing further into the unknown.
                      </p>
                    </>
                  )}

                  {activeExploreTab === "exploration" && (
                    <>
                      <h2>Exploration</h2>

                      <p>
                        The world of Brain Eaters isn't just about moving from tile to tile and loot resources.<br />
                        It's also about exploration, map control and vision.
                      </p>
                      <p>
                        Exploration relies on two main mechanics : <br /><br />
                        <strong>Unexplored tiles</strong><br />
                        These tiles have never been explored.<br />
                        A dense fog hides them completely, the tile type and its details are unknown.<br />
                      </p>
                      <p>
                        <strong>Out-of-vision tiles</strong><br />
                        These tiles have already been explored but are no longer within your vision range.<br />
                        A light fog covers them: the environment is visible, but the number of zombies is unknown.<br />
                      </p>

                      <p>
                        To explore a tile, a survivor must have it within its vision range.<br />
                        Once close enough, the fog disappears and the tile's details are revealed.
                      </p>
                    </>
                  )}

                  {activeExploreTab === "combat" && (
                    <>
                      <h2>Zombies and Combat</h2>
                      <p>
                        Think surviving and exploring is easy? Think again ! <br />
                        Zombies are out there to remind you who's really in charge !
                      </p>

                      <p>
                        The world of Brain Eaters is dynamic, zombies roam from tile to tile, smelling survivors from miles away. <br />
                        If you dare to step outside the city, you better be prepared. <br />
                        Zombies move periodically and will detect and attack anyone within their vision range.
                      </p>

                      <p>
                        Combat is RPG-inspired. <br />
                        Each fight is decided by a dice roll with four possible outcomes : <br /><br />
                        <strong>Critical success</strong> Win without taking damage<br />
                        <strong>Success</strong> Win but take damage<br />
                        <strong>Fail</strong> Lose the fight and take damage<br />
                        <strong>Critical fail</strong> Lose and take 30% extra damage, ouch!<br /><br />

                        Check the game guide for a deeper dive into combat mechanics and how outcomes are calculated.
                      </p>
                    </>
                  )}

                  {activeExploreTab === "Procedural World" && (
                    <>
                      <h2>Procedural World</h2>

                      <p>
                        The world of Brain Eaters is entirely procedural. <br />
                        Each new game generates a unique map, built tile by tile.
                      </p>

                      <p>
                        Each tile is generated from multiple layers :
                      </p>

                      <p>
                        <strong>Type</strong><br />
                        Defines the biome, loot level, and overall threat level. <br />
                        Current types include Wasteland and Forest. <br />
                        New types will be added over time.
                      </p>

                      <p>
                        <strong>Theme</strong><br />
                        Defines how the tile is structured and populated.<br />
                        A theme controls loot elements, textures and loot quantity.<br />
                        For example, a ruin theme may feature a main ruin element,
                        secondary elements around it like walls or pillars, and textures filling the remaining space.<br />
                        Each element influence the loot quantity available on the tile.
                      </p>

                      <p>
                        <strong>Main Elements</strong><br />
                        A tile can have a main element such as ruins, vehicles, buildings etc. <br />
                        Main elements are placed in the center of a tile and occupy a 2x2 space compared to a normal element.
                      </p>

                      <p>
                        <strong>Elements</strong><br />
                        Objects such as tree, rock, wall, pillar etc
                        Elements are 1x1 sized and randomly generated across the tile.
                      </p>

                      <p>
                        <strong>Textures</strong><br />
                        Smaller ground details like grass, dirt, debris or broken materials.
                        Textures are distributed dynamically to make each tile feel natural and unique.
                      </p>

                      <p>
                        Thanks to this multi-layered procedural generation,
                        each tile is different and each game is unique, offering infinite replayability and new challenges.
                      </p>
                    </>
                  )}

                </div>

              </div>
            )}

            {activePillar === "cooperate" && (
              <div className={styles.centeredPillar}>
                <h2>Cooperation & Multiplayer</h2>
                <img
                  src="/images/Banner_cooperation_3.png"
                  alt="Brain Eaters - Zombie attack on city walls"
                  className={`${styles.banner}`}
                />
                <p>
                  <strong>Cooperation</strong> is what truly separates Brain Eaters from other games in the genre. <br />
                  Each player controls a survivor while sharing the same city with other players.
                </p>

                <p>
                  The city is a common space. <br />
                  Buildings, defenses, and storage are <strong>shared</strong> : every decision impacts the entire community. <br /><br />
                  Players must coordinate, plan ahead, and pick their <strong>role</strong>. <br />
                  Every survivor contributes in the community's survival.
                </p>

                <p>
                  Once outside the city, players <strong>share vision</strong> but <strong>cannot communicate</strong> over long distances,
                  forcing careful planning before leaving the city. <br />
                  A bad decision can leave you injured, alone, and far from the city walls.
                </p>

                <p>
                  Helping others strengthens the city. <br />
                  Neglecting teamwork makes survival harder for all.
                </p>

                <p>
                  <strong>Roleplay</strong> is also a key part of Brain Eaters. <br />
                  Stay alert ! some survivors may betray the city, leave the gate open at night,
                  steal resources, or return infected… only to turn while everyone sleeps.
                </p>

              </div>
            )}
          </div>
        </section>
      )}


    </div>

  );
}
