"use client";

import { HeaderProvider, useHeader } from "@/context/HeaderContext";
import { CIRC_EASE_OUT, DURATION } from "@/utils/util";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import MobileHeader from "./MobileHeader/MobileHeader";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileMenu from "./MobileMenu/MobileMenu";

const HeaderContent = () => {
  const { mobileMenuOpen } = useHeader();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const percentage = Math.min(scrollPosition / viewportHeight, 1);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = !mobileMenuOpen
    ? {
        background: `linear-gradient(to bottom, hsl(from var(--clr-background) h s l / ${
          scrollPercentage * 0.2
        }) 95%, hsl(from var(--clr-background) h s l / 0))`,
        backdropFilter: `blur(${scrollPercentage * 10}px)`,
        WebkitBackdropFilter: `blur(${scrollPercentage * 10}px)`,
      }
    : {};

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION, ease: CIRC_EASE_OUT }}
      className={styles.header}
      data-mobile-menu-open={mobileMenuOpen}
      style={headerStyle}
    >
      <MobileHeader />
      <DesktopHeader />
      {/* <AnimatePresence>{mobileMenuOpen && <MobileMenu />}</AnimatePresence> */}
      {mobileMenuOpen && <MobileMenu />}
    </motion.header>
  );
};

export default function Header() {
  return (
    <HeaderProvider>
      <HeaderContent />
    </HeaderProvider>
  );
}
