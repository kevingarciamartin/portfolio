"use client";

import { CIRC_EASE_OUT, DURATION } from "@/utils/constants";
import { motion } from "framer-motion";
import styles from "./HeroTitle.module.css";

interface HeroTitleProps {
  section?: "hero" | "footer";
}

const HeroTitle = ({ section = "hero" }: HeroTitleProps) => {
  const title = () => {
    if (section === "hero") {
      return (
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION, ease: CIRC_EASE_OUT }}
          className={styles.title}
        >
          Kevin Garcia Martin
        </motion.h1>
      );
    } else {
      return (
        <p className={[styles.title, styles.footer__title].join(" ")}>
          Kevin Garcia Martin
        </p>
      );
    }
  };

  return title();
};

export default HeroTitle;
