import { useHeader } from "@/context/HeaderContext";
import { easeInOut, motion, Variants } from "framer-motion";
import Link from "next/link";
import sharedStyles from "../Header.module.css";
import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  const { mobileMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <ul className={[styles.mobileHeader, sharedStyles.headerItem].join(" ")}>
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
  );
};

export default MobileHeader;
