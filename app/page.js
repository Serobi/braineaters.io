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


  const eyesRef = useRef(null);
  const veinsRef = useRef(null);

  useEffect(() => {
    if (showEyes) {
      // Force animation restart ONLY on show
      if (eyesRef.current) {
        eyesRef.current.style.animation = "none";
        // force reflow
        void eyesRef.current.offsetHeight;
        eyesRef.current.style.animation = "";
      }

      if (veinsRef.current) {
        veinsRef.current.style.animation = "none";
        void veinsRef.current.offsetHeight;
        veinsRef.current.style.animation = "";
      }
    }
  }, [showEyes]);


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
          touchControls: !isMobile,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,

          highlightColor: isMobile ? 0x515151 : 0x9a9a9a,
          midtoneColor: isMobile ? 0x444444 : 0x5a5a5a,
          lowlightColor: isMobile ? 0x444444 : 0x242424,
          baseColor: isMobile ? 0x3e3e3e : 0x121212,
          zoom: isMobile ? 0.6 : 0.7,
          speed: isMobile ? 0.25 : 0.6
        });
        setTimeout(() => {
          if (vantaEffect.current?.resize) {
            vantaEffect.current.resize();
          }
        }, 100);
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
      <div className="fog-wrapper">
        <div ref={vantaRef} className={styles.fogBackground} />
      </div>
      <main className={styles.main}>
        <h1 className="sr-only">Brain Eaters: Cooperative Survival Strategy Game on mobile and PC</h1>
        <p className="sr-only">Cooperative Survival game. Build, defend, explore, and cooperate in a post-apocalyptic world where every decision matters.</p>
        <div className={`${styles.hunterEyes} ${showEyes ? styles.fadeIn : styles.fadeOut}`}>
          <img
            src="/images/eyes.png"
            loading="lazy"
            decoding="async"
            alt="Glowing eyes emerging from the fog"
            className={`${styles.eyes}`}
            ref={eyesRef}
          />
          <img
            src="/images/veins.png"
            loading="lazy"
            decoding="async"
            alt="Glowing veins around eyes emerging from the fog"
            className={`${styles.veins}`}
            ref={veinsRef}
          />
        </div>
        <p className={styles.introText}>
          <span>Many have entered the Wastelands</span>
          <span>None of them came back</span>
          <span>Now it is your turn</span>
        </p>
        <a
          href="/game"
          title="Learn more about Brain Eaters gameplay"
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
