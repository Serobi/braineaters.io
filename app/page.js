"use client";

import Head from "next/head";
import styles from "./styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import("vanta/dist/vanta.fog.min");

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile();
  const [showEyes, setShowEyes] = useState(false);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowEyes(true);
      }, 4000); // 4s sweet spot

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      Promise.all([
        import("three"),
        import("vanta/dist/vanta.fog.min"),
      ]).then(([THREE, VANTA]) => {

        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: !isMobile,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,

          highlightColor: isMobile ? 0xa7a7a7 : 0xa7a7a7,
          midtoneColor: isMobile ? 0x282828 : 0x282828,
          lowlightColor: 0x000000,
          baseColor: 0x000000,
          zoom: isMobile ? 0.2 : 0.8,
          speed: isMobile ? 1.2 : 0.6
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

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
      <div ref={vantaRef} className={styles.fogBackground} />
      <main className={styles.main}>
        <img
          src="/images/hunter_eyes.png"
          loading="lazy"
          decoding="async"
          alt="Glowing hunter eyes emerging from the fog"
          className={`${styles.hunterEyes} ${showEyes ? styles.fadeIn : ""}`}
        />
        <p className={styles.introText}>
          <span>Many have entered the Wastelands</span>
          <span>None survived</span>
          <span>Now it is your turn</span>
        </p>
        <a
          href="/game"
          className={styles.discoverButton}
          onMouseEnter={() => {
            if (!isMobile) {
              setHovering(true);
              setShowEyes(true);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setHovering(false);
              setShowEyes(false);
            }
          }}
        >
          Discover the Game
        </a>

      </main>
    </div>
  );
}
