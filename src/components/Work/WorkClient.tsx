"use client";

import WorkItemMedia from "@/components/Work/WorkItemMedia";
import { type WorkItem } from "@/types/content";
import { CIRC_EASE_OUT, DURATION, QUINT_EASE_OUT } from "@/utils/util";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Work.module.css";

interface WorkClientProps {
  workItems: WorkItem[];
}

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: DURATION * 2, ease: QUINT_EASE_OUT },
  },
};

const itemVariants: Variants = {
  hidden: { y: "var(--initial-y)", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION / 2, ease: CIRC_EASE_OUT },
  },
};

export default function WorkClient({ workItems }: WorkClientProps) {
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("work-active-index");
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1000;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
    sessionStorage.setItem("work-active-index", index.toString());
  };

  const filteredItems = workItems.filter((item) => item.slug);

  const dynamicListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
      },
    },
  };

  return (
    <motion.ul
      className={styles.workList}
      variants={dynamicListVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredItems.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.li
            key={item.id}
            className={`${styles.workItem} ${isActive ? styles.active : ""}`}
            onMouseEnter={() => handleSetActive(index)}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {index === 0 && (
              <motion.div
                className={styles.horizontalLine}
                variants={lineVariants}
              />
            )}
            <Link
              href={`/work/${item.slug}`}
              className={styles.workContent}
              onFocus={() => handleSetActive(index)}
            >
              <motion.div className={styles.workInfo} variants={itemVariants}>
                <span></span>
                <h2 className={styles.title}>{item.title}</h2>
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 -0.5 17 17"
                  className={styles.arrowIcon}
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <span className={styles.stack}>
                  {item.stackString || "No stack specified"}
                </span>
              </motion.div>
              <div className={styles.media}>
                <div className={styles.mediaInner}>
                  <WorkItemMedia
                    media={item.mainMedia}
                    title={item.title}
                    slug={item.slug}
                    className={
                      item.mainMedia?.type === "video"
                        ? styles.workVideoWrapper
                        : styles.workMediaWrapper
                    }
                    isMobile={isMobile}
                  />
                </div>
              </div>
            </Link>
            <motion.div
              className={styles.horizontalLine}
              variants={lineVariants}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
