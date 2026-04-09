import { CIRC_EASE_OUT, DURATION, QUINT_EASE_OUT } from "@/utils/util";
import { motion, Variants } from "framer-motion";
import Clock from "../Clock/Clock";
import styles from "../Header.module.css";
import NavLink from "../NavLink/NavLink";
import ThemeButton from "../ThemeButton/ThemeButton";

const MobileMenu = () => {
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: DURATION / 2, ease: CIRC_EASE_OUT },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: DURATION * 2, ease: QUINT_EASE_OUT },
    },
  };

  return (
    <motion.div
      className={styles.mobileMenu}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariants}
    >
      <ul className={styles.mobileMenuList}>
        <motion.li variants={itemVariants}>
          <div>Kevin Garcia Martin:</div>
          <div>Developer x Engineer</div>
        </motion.li>
        <motion.li variants={itemVariants}>
          <div>Location:</div>
          <div>
            Stockholm, Sweden
            <Clock />
          </div>
        </motion.li>
        <motion.li variants={itemVariants}>
          <div>Theme:</div>
          <div className={styles["theme-buttons"]}>
            <ThemeButton value="light" />
            <ThemeButton value="dark" />
          </div>
        </motion.li>
        <li className={styles.mobileNav}>
          <div>Navigation:</div>
          <nav>
            <motion.ul variants={listVariants}>
              {/* <ul> */}
              <motion.li variants={itemVariants}>
                <motion.div
                  className={styles.horizontalLine}
                  variants={lineVariants}
                />
                <NavLink href="/" label="Home" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div
                  className={styles.horizontalLine}
                  variants={lineVariants}
                />
                <NavLink href="/work" label="Work" />
                <motion.div
                  className={styles.horizontalLine}
                  variants={lineVariants}
                />
              </motion.li>
            </motion.ul>
            {/* </ul> */}
          </nav>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
