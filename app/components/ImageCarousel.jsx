import { useState, useEffect } from "react";
import styles from "../styles/carousel.module.css";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  if(!images?.length) return null

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className={styles.imageCarousel}>
      {images.length > 1 && (
        <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
        <span className={styles.chevron} />
      </button>
      )}

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={src}   // 👈 better than index
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
        <span className={styles.chevron} />
      </button>
      )}
    </div>
  );
}
