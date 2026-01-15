import { useState, useEffect, useRef } from "react";
import styles from "../styles/carousel.module.css";

const STEP = 105;
const TRANSITION_MS = 450;
const TOUCH_THRESHOLD = 40;
const MOUSE_THRESHOLD = 80;

export default function ImageCarousel({ images }) {
  if (!images?.length) return null;

  const loopedImages =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;

  const [index, setIndex] = useState(images.length > 1 ? 1 : 0);
  const [transition, setTransition] = useState(true);
  const isTeleporting = useRef(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const isSwiping = useRef(false);
  const pointerType = useRef(null);

  useEffect(() => {
    setIndex(images.length > 1 ? 1 : 0);
    setTransition(true);
  }, [images]);

  const next = () => {
    if (isTeleporting.current) return;
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (isTeleporting.current) return;
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    if (index === 0 || index === images.length + 1) {
      isTeleporting.current = true;
      const t = setTimeout(() => {
        setTransition(false);
        const newIndex = index === 0 ? images.length : 1;
        setIndex(newIndex);
        isTeleporting.current = false;
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [index, images.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

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

    if (Math.abs(dy) > Math.abs(dx)) {
      isSwiping.current = false;
    }
  };

  const onPointerUp = (e) => {
    if (!isSwiping.current) return;

    const dx = e.clientX - startX.current;
    const threshold =
      pointerType.current === "touch" ? TOUCH_THRESHOLD : MOUSE_THRESHOLD;

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
            <img key={`slide-${i}`} src={src} alt={`Slide ${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
