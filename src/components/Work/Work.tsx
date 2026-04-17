import { ContentService } from "@/services/ContentService";
import styles from "./Work.module.css";
import WorkClient from "./WorkClient";

export default async function Work() {
  const workItems = await ContentService.getAllWork();

  return (
    <section className={styles.work} id="work">
      <WorkClient workItems={workItems} />
    </section>
  );
}
