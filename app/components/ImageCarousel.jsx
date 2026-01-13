import { useState, useEffect } from "react";
import styles from "../styles/carousel.module.css";

const STEP = 105; // 100% slide + 5% spacing
const TRANSITION_MS = 450;

export default function ImageCarousel({ images }) {
  if (!images?.length) return null;

  // Build looped list: [last, ...images, first]
  const loopedImages =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;

  const [index, setIndex] = useState(images.length > 1 ? 1 : 0);
  const [transition, setTransition] = useState(true);

  // Reset when images change
  useEffect(() => {
    setIndex(images.length > 1 ? 1 : 0);
    setTransition(true);
  }, [images]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // Handle silent teleport when hitting fake slides
  useEffect(() => {
    if (images.length <= 1) return;

    // Jump from fake first → real last
    if (index === 0) {
      const t = setTimeout(() => {
        setTransition(false);
        setIndex(images.length);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }

    // Jump from fake last → real first
    if (index === images.length + 1) {
      const t = setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [index, images.length]);

  // Re-enable transition after teleport
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <div className={styles.imageCarousel}>
      {images.length > 1 && (
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Previous image"
        >
          <span className={styles.chevron} />
        </button>
      )}

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${index * STEP}%)`,
            transition: transition
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
          }}
        >
          {loopedImages.map((src, i) => (
            <img
              key={`${src}-${i}`} // safe with duplicates
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Next image"
        >
          <span className={styles.chevron} />
        </button>
      )}
    </div>
  );
}
