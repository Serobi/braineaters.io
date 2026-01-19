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

  if (!isMobile) {
    useEffect(() => {
      if (!vantaEffect.current && vantaRef.current) {
        Promise.all([
          import("three"),
          import("vanta/dist/vanta.fog.min"),
        ]).then(([THREE, VANTA]) => {

          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,

            highlightColor: 0x9a9a9a,
            midtoneColor: 0x5a5a5a,
            lowlightColor: 0x242424,
            baseColor: 0x121212,
            zoom: 0.7,
            speed: 0.6
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
  }
  if (isMobile) {
    useEffect(() => {
      if (!vantaEffect.current && vantaRef.current) {
        Promise.all([
          import("three"),
          import("vanta/dist/vanta.fog.min"),
        ]).then(([THREE, VANTA]) => {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE,

            mouseControls: false,
            touchControls: false,
            gyroControls: false,

            minHeight: 200,
            minWidth: 200,

            highlightColor: 0x8a8a8a,
            midtoneColor: 0x8a8a8a,
            lowlightColor: 0x2c2c2c,
            baseColor: 0x2c2c2c,


            zoom: 0.3,
            speed: 0.5,

            pixelRatio: 1
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
  }

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
      <div className="fog-wrapper">
        <div ref={vantaRef} className={styles.fogBackground} />
      </div>
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
