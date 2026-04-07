"use client";

import { type WorkItem } from "@/sanity/queries";
import { Easing, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Work.module.css";

interface WorkClientProps {
  workItems: WorkItem[];
}

const DURATION = 1;
const EASE: Easing | Easing[] = [0, 0.55, 0.45, 1];

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: DURATION, ease: EASE },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};

export default function WorkClient({ workItems }: WorkClientProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredItems = workItems.filter((item) => item.slug);

  return (
    <motion.ul
      className={styles.workList}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredItems.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.li
            key={item._id}
            className={`${styles.workItem} ${isActive ? styles.active : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
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
              onFocus={() => setActiveIndex(index)}
            >
              <motion.div className={styles.workInfo} variants={itemVariants}>
                <span></span>
                <h3 className={styles.title}>{item.title}</h3>
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
                  {item.stack?.join(", ") || "No stack specified"}
                </span>
              </motion.div>
              <motion.div
                className={styles.media}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{
                    scale: 1,
                    opacity: "var(--media-opacity, 1)",
                  }}
                  transition={{ duration: 1.2, ease: [0, 0.55, 0.45, 1] }}
                  className={styles.mediaInner}
                >
                  {item.videoUrl ? (
                    <video
                      src={item.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={item.imageMetadata?.width || 480}
                        height={item.imageMetadata?.height || 640}
                        style={{
                          height: "auto",
                          width: "100%",
                          display: "block",
                        }}
                        sizes="min(100vw, 30rem)"
                        priority={index < 2}
                      />
                    )
                  )}
                </motion.div>
              </motion.div>
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
