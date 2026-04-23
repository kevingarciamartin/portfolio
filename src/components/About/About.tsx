"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";

const paragraphs = [
  "I am Kevin Garcia Martin, a creative fullstack developer who loves the harmony of working within constraints. I believe that elegant logic inspires the most creativity.",
  "When logic meets intuition, I surrender to the process. My background in engineering is my structure, while the browser is my canvas for creative freedom.",
];

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Threshold: switch at 50% scroll progress
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5],
    ["0%", "0%", "-100%"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.5, 0.55, 1],
    ["100%", "0%", "0%"]
  );

  return (
    <section ref={containerRef} className={styles.aboutSection}>
      <div className={styles.stickyContainer}>
        <div className={styles.textContainer}>
          <div className={styles.paragraphWrapper}>
            {paragraphs[0].split(" ").map((word, i) => (
              <span key={i} className={styles.lineWrapper}>
                <motion.span style={{ display: "inline-block", y: y1 }}>
                  {word}{" "}
                </motion.span>
              </span>
            ))}
          </div>
          <div className={styles.paragraphWrapper}>
            {paragraphs[1].split(" ").map((word, i) => (
              <span key={i} className={styles.lineWrapper}>
                <motion.span style={{ display: "inline-block", y: y2 }}>
                  {word}{" "}
                </motion.span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
