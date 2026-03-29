"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import styles from "./Studio.module.css";

export default function Studio() {
  return (
    <div className={styles.admin}>
      <NextStudio config={config} />
    </div>
  );
}
