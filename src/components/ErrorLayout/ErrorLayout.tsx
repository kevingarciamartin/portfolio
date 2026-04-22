"use client";

import { CIRC_EASE_OUT, DURATION } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ErrorLayout.module.css";

interface ErrorPageProps {
  title: string;
  message: string;
  reset?: () => void;
}

export default function ErrorPage({ title, message, reset }: ErrorPageProps) {
  const pathname = usePathname();
  const isWorkSubpage = pathname?.startsWith("/work/");
  const backHref = isWorkSubpage ? "/work" : "/";

  return (
    <section className={styles.errorSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: CIRC_EASE_OUT }}
        className={styles.container}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
          <div className={styles.actions}>
            {reset && (
              <button
                onClick={() => reset()}
                className={`${styles.btn} navigation`}
              >
                Try Again
              </button>
            )}
            <Link href={backHref} className={`${styles.btn} navigation`}>
              Go Back
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
