"use client";

import Link from "next/link";
import Clock from "./Clock/Clock";
import styles from "./Header.module.css";
import { HeaderProvider, useHeader } from "./HeaderContext";
import NavLink from "./NavLink/NavLink";
import ThemeButton from "./ThemeButton/ThemeButton";

const HeaderContent = () => {
  const { mobileMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <header className={styles.header} data-mobile-menu-open={mobileMenuOpen}>
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
