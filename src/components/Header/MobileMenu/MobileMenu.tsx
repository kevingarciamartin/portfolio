import { CIRC_EASE_OUT, DURATION, QUINT_EASE_OUT } from "@/utils/util";
import { motion, Variants } from "framer-motion";
import ActionGroup from "../ActionGroup/ActionGroup";
import Clock from "../Clock/Clock";
import NavLink from "../NavLink/NavLink";
import { routes } from "../routes";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const ANIMATION_DURATION = DURATION / 4;
  const EXIT_DURATION = ANIMATION_DURATION;

  const listVariants: Variants = {
    // initial: { opacity: 0 },
    animate: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: ANIMATION_DURATION, ease: CIRC_EASE_OUT },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: EXIT_DURATION, ease: CIRC_EASE_OUT },
    },
  };

  const lineVariants: Variants = {
    initial: { scaleX: 0, originX: 0, opacity: 1 },
    animate: {
      scaleX: 1,
      originX: 0,
      opacity: 1,
      transition: {
        duration: DURATION,
        ease: QUINT_EASE_OUT,
        originX: { duration: 0 },
      },
    },
    exit: {
      scaleX: 0,
      originX: 1,
      opacity: 1,
      transition: {
        duration: EXIT_DURATION,
        ease: QUINT_EASE_OUT,
        originX: { duration: 0 },
      },
    },
  };

  return (
    <motion.div
      className={styles.mobileMenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <motion.ul
        className={styles.mobileMenuList}
        variants={listVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <li>
          <motion.div variants={itemVariants}>
            <div className={styles.secondary}>Kevin Garcia Martin:</div>
            <div>Developer x Engineer</div>
          </motion.div>
        </li>
        <li>
          <motion.div variants={itemVariants}>
            <div className={styles.secondary}>Location:</div>
            <div>
              Stockholm, Sweden
              <Clock />
            </div>
          </motion.div>
        </li>
        <li>
          <motion.div variants={itemVariants}>
            <div className={styles.secondary}>Theme:</div>
            <ActionGroup variant="button" />
          </motion.div>
        </li>
        <li className={styles.mobileNav}>
          <div>Navigation:</div>
          <nav>
            <motion.ul
              variants={{
                ...listVariants,
                animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
            >
              {routes.map((route, index) => (
                <motion.li
                  key={index}
                  variants={{
                    animate: { transition: { staggerChildren: 0.025 } },
                    exit: { transition: { staggerChildren: 0.025 } },
                  }}
                >
                  {index === 0 && (
                    <motion.div
                      className={styles.horizontalLine}
                      variants={lineVariants}
                    />
                  )}
                  <div className={styles.linkContainer}>
                    <div style={{ overflow: "clip" }}>
                      <motion.div variants={itemVariants}>
                        <NavLink route={route} />
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    variants={lineVariants}
                    className={styles.horizontalLine}
                  ></motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default MobileMenu;
