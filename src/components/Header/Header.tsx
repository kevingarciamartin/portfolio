"use client";

import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Clock from "./Clock/Clock";
import { HeaderProvider, useHeader } from "./HeaderContext";
import NavLink from "./NavLink/NavLink";
import ThemeButton from "./ThemeButton/ThemeButton";

const HeaderContent = () => {
  const { mobileMenuOpen, toggleMenu, closeMenu } = useHeader();
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
    <header
      className={styles.header}
      data-mobile-menu-open={mobileMenuOpen}
      style={headerStyle}
    >
      {/* Mobile Header */}
      <ul>
        <li>
          <Link href="/" className={styles.mobileLogo} onClick={closeMenu}>
            Kevin Garcia Martin
          </Link>
        </li>
        <li>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            <div>Menu</div>
            <div>Close</div>
          </button>
        </li>
      </ul>

      {/* Desktop Header & Mobile Menu */}
      <ul>
        <li>
          <div>Kevin Garcia Martin:</div>
          <div>Developer x Engineer</div>
        </li>
        <li>
          <div>Location:</div>
          <div>
            Stockholm, Sweden
            <Clock />
          </div>
        </li>
        <li>
          <div>Navigation:</div>
          <nav>
            <ul>
              <li>
                <NavLink href="/" label="Home" />
              </li>
              <li>
                <NavLink href="/work" label="Work" />
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <div>Theme:</div>
          <div className={styles["theme-buttons"]}>
            <ThemeButton value="light" />
            <ThemeButton value="dark" />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default function Header() {
  return (
    <HeaderProvider>
      <HeaderContent />
    </HeaderProvider>
  );
}
