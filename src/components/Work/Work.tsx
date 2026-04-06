import { getWorkItems } from "@/sanity/queries";
import WorkClient from "./WorkClient";
import styles from "./Work.module.css";

export default async function Work() {
  const workItems = await getWorkItems();

  return (
    <section className={styles.work} id="work">
      <WorkClient workItems={workItems} />
    </section>
  );
}
