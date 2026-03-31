"use client";

import React from "react";
import styles from "./Footer.module.css";
import HeroTitle from "../Hero/HeroTitle/HeroTitle";

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
      {/* <p className={styles.hero__title}>Kevin Garcia Martin</p> */}
      <HeroTitle section={"footer"} />
    </footer>
  );
};

export default Footer;
