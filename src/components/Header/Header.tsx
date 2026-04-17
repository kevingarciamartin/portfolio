"use client";

import { HeaderProvider, useHeader } from "@/context/HeaderContext";
import { useBodyLock } from "@/hooks/useBodyLock";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { CIRC_EASE_OUT, DURATION } from "@/utils/util";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Clock from "./Clock/Clock";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLink from "./NavLink/NavLink";
import { routes } from "./routes";
import ThemeButton from "./ThemeButton/ThemeButton";

const HeaderContent = () => {
  const { mobileMenuOpen, toggleMenu, closeMenu } = useHeader();
  const scrollPercentage = useScrollProgress();
  const isInitialMount = useRef(true);

  useBodyLock(mobileMenuOpen);

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
    <>
      <motion.header
        initial={isInitialMount.current ? { y: -100, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: CIRC_EASE_OUT }}
        className={styles.header}
        data-mobile-menu-open={mobileMenuOpen}
        style={headerStyle}
      >
        {/* Mobile Header Layout */}
        <ul className={styles.mobileHeader}>
          <li>
            <Link href="/" className={styles.mobileLogo} onClick={closeMenu}>
              Kevin Garcia Martin
            </Link>
          </li>
          <li>
            <button className={styles.menuBtn} onClick={toggleMenu}>
              <div className={mobileMenuOpen ? styles.open : styles.closed}>
                Menu
              </div>
              <div className={mobileMenuOpen ? styles.open : styles.closed}>
                Close
              </div>
            </button>
          </li>
        </ul>

        {/* Desktop Header Layout */}
        <ul className={styles.desktopHeader}>
          <li>
            <div className={styles.secondary}>Kevin Garcia Martin:</div>
            <div>Developer x Engineer</div>
          </li>
          <li>
            <div className={styles.secondary}>Location:</div>
            <div>
              Stockholm, Sweden
              <Clock />
            </div>
          </li>
          <li>
            <div className={styles.secondary}>Navigation:</div>
            <nav>
              <ul className={styles.navLinks}>
                {routes?.map((route, index) => (
                  <li key={index}>
                    <NavLink route={route} />
                  </li>
                ))}
              </ul>
            </nav>
          </li>
          <li>
            <div className={styles.secondary}>Theme:</div>
            <div className={styles.themeGroup}>
              <ThemeButton value="light" />
              <ThemeButton value="dark" />
            </div>
          </li>
        </ul>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu key="mobile-menu" />}
      </AnimatePresence>
    </>
  );
};

export default function Header() {
  return (
    <HeaderProvider>
      <HeaderContent />
    </HeaderProvider>
  );
}
