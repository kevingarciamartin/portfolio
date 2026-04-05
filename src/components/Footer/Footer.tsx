"use client";

import HeroTitle from "@/components/Hero/HeroTitle/HeroTitle";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <div>Fast Travel:</div>
            <button
              onClick={scrollToTop}
              id="fast-travel"
              className={styles.linkButton}
            >
              Go Back to Top
            </button>
          </li>
        </ul>
      </div>
      <HeroTitle section={"footer"} />
    </footer>
  );
};

export default Footer;
