import { useState, useEffect, useRef } from "react";
import styles from "../styles/carousel.module.css";

const STEP = 105; // 100% slide + 5% spacing
const TRANSITION_MS = 450;
const TOUCH_THRESHOLD = 40;
const MOUSE_THRESHOLD = 80;

export default function ImageCarousel({ images }) {
  if (!images?.length) return null;

  // Build looped list: [last, ...images, first]
  const loopedImages =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;

  const [index, setIndex] = useState(images.length > 1 ? 1 : 0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const startY = useRef(0);
  const isSwiping = useRef(false);
  const pointerType = useRef(null); // ✅ FIX

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

    if (index === 0) {
      const t = setTimeout(() => {
        setTransition(false);
        setIndex(images.length);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }

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

  /* === SWIPE HANDLERS === */

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    pointerType.current = e.pointerType;
    startX.current = e.clientX;
    startY.current = e.clientY;
    isSwiping.current = true;
  };

  const onPointerMove = (e) => {
    if (!isSwiping.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // Cancel swipe if vertical scroll intent
    if (Math.abs(dy) > Math.abs(dx)) {
      isSwiping.current = false;
    }
  };

  const onPointerUp = () => {
    if (!isSwiping.current) return;

    const dx = event.clientX - startX.current;
    const threshold =
      pointerType.current === "touch"
        ? TOUCH_THRESHOLD
        : MOUSE_THRESHOLD;

    if (Math.abs(dx) > threshold) {
      dx < 0 ? next() : prev();
    }

    isSwiping.current = false;
    pointerType.current = null;
  };

  return (
    <div className={styles.imageCarousel}>
      {images.length > 1 && (
        <div className={`${styles.carouselArrows}`}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Previous image"
        >
          <span className={styles.chevron} />
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Next image"
        >
          <span className={styles.chevron} />
        </button>
        </div>
      )}

      <div
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
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
              key={`${src}-${i}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
