"use client";

import { Easing, motion } from "framer-motion";
import Image from "next/image";
import HeroTitle from "../Hero/HeroTitle/HeroTitle";
import styles from "./Intro.module.css";

const PORTRAITS = [
  "/img/portraits/p1.webp",
  "/img/portraits/p2.webp",
  "/img/portraits/p3.webp",
  "/img/portraits/p4.webp",
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
  const ease: Easing | Easing[] = [0.76, 0, 0.24, 1];

  return (
    <motion.div
      id="intro"
      className={styles.introContainer}
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ clipPath: "inset(0% 100% 0% 0%)" }}
      transition={{ duration: 1, ease: ease }}
    >
      <div className={styles.imageWrapper}>
        {PORTRAITS.map((src, i) => (
          <motion.div
            key={i}
            className={styles.image}
            style={{
              zIndex: i,
            }}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{
              delay: 0.35 + i * 0.25,
              duration: 1,
              ease: ease,
            }}
            onAnimationComplete={
              i === PORTRAITS.length - 1
                ? () => {
                    setTimeout(onFinish, 200);
                  }
                : undefined
            }
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="(max-width: 640px) 50vw, 320px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </div>
      <div className={styles.placeholderRow}>
        <HeroTitle section="hero" />
      </div>
    </motion.div>
  );
}
