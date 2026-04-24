import { ContentService } from "@/services/ContentService";
import Link from "next/link";
import styles from "./WorkList.module.css";

export default async function WorkList() {
  const workItems = await ContentService.getAllWork();

  return (
    <section className={styles.workListSection}>
      <h2 className={styles.sectionTitle}>Work</h2>
      <ul className={styles.list}>
        {workItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link href={`/work/${item.slug}`} className={styles.itemLink}>
              <span className={styles.counter} aria-hidden="true" />
              <span className={styles.title}>{item.title}</span>
              <span className={styles.role}>{item.role || "Personal"}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
