"use client";

import { motion } from "framer-motion";
import HeroTitle from "../Hero/HeroTitle/HeroTitle";
import styles from "./Intro.module.css";

const PORTRAITS = [
  "/img/portraits/p1.webp",
  "/img/portraits/p2.webp",
  "/img/portraits/p3.webp",
  "/img/portraits/p5.webp",
  "/img/portraits/p7.webp",
  "/img/portraits/p8.webp",
  "/img/portraits/p9.webp",
  "/img/portraits/portrait.webp",
];

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
  return (
    <motion.div
      id="intro"
      className={styles.introContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.imageWrapper}>
        {PORTRAITS.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className={styles.image}
            style={{ zIndex: i }}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{
              delay: 0.35 + i * 0.25,
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
            }}
            onAnimationComplete={
              i === PORTRAITS.length - 1
                ? () => {
                    setTimeout(onFinish, 200);
                  }
                : undefined
            }
          />
        ))}
      </div>
      <div className={styles.placeholderRow}>
        <HeroTitle section="hero" />
      </div>
    </motion.div>
  );
}
