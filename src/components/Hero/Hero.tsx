"use client";

import { CIRC_EASE_OUT, DURATION } from "@/utils/constants";
import portrait from "@public/img/portraits/portrait.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import HeroTitle from "./HeroTitle/HeroTitle";

export default function Hero({ introPlayed = true }: { introPlayed?: boolean }) {
  return (
    <section className={styles.hero} id="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION }}
        className={styles.imageWrapper}
      >
        <motion.div
          initial={{ y: 0, scale: 1.05 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: DURATION, ease: CIRC_EASE_OUT }}
          className={styles.imageWrapperInner}
        >
          <Image
            src={portrait}
            alt="Portrait of Kevin Garcia Martin"
            fill
            sizes="(max-width: 768px) 50vw, 320px"
            priority={introPlayed}
            className={styles.image}
          />
        </motion.div>
      </motion.div>
      <HeroTitle />
    </section>
  );
}
