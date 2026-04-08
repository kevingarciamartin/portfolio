import { getWorkItems } from "@/sanity/queries";
import styles from "./Work.module.css";
import WorkClient from "./WorkClient";

export default async function Work() {
  const workItems = await getWorkItems();

  return (
    <section className={styles.work} id="work">
      <WorkClient workItems={workItems} />
    </section>
  );
}
