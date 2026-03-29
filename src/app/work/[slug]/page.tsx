import { getWorkBySlug } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function WorkItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  if (!slug) {
    return <div>Error: Project slug is missing in the URL parameters.</div>;
  }

  const workItem = await getWorkBySlug(slug);

  if (!workItem) {
    return <div>Project not found</div>;
  }

  const media = workItem.videoUrl ? workItem.videoUrl : workItem.imageUrl;

  return (
    <main className={styles.main}>
      <section className={styles.workItemPage} id="work-item">
        <div className={styles.content}>
          <Link
            href={workItem.link?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaLink}
          >
            {workItem.videoUrl ? (
              <video
                src={workItem.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className={styles.media}
                aria-label={`Video of ${workItem.title}`}
              />
            ) : workItem.imageUrl ? (
              <div className={styles.mediaContainer}>
                <Image
                  src={workItem.imageUrl}
                  alt={workItem.title}
                  fill
                  priority
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : null}
          </Link>

          <div className={styles.details}>
            <div className={styles.header}>
              <h1 className={styles.title}>{workItem.title}</h1>
              {workItem.role && (
                <span className={styles.role}>{workItem.role}</span>
              )}
            </div>

            <div className={styles.stackSection}>
              <span className={styles.sectionTitle}>Tech Stack</span>
              <p className={styles.stack}>
                {workItem.stack?.join(", ") || "N/A"}
              </p>
            </div>

            <div className={styles.descriptionSection}>
              <span className={styles.sectionTitle}>Description</span>
              <div className={styles.description}>
                {/* Assuming description is a Portable Text array */}
                {workItem.description?.map((block: any, i: number) => (
                  <p key={i}>{block.children[0].text}</p> // Basic rendering, needs PortableText component for complex content
                ))}
              </div>
            </div>

            {workItem.link?.href && (
              <div className={styles.urlSection}>
                <span className={styles.sectionTitle}>URL</span>
                <Link
                  href={workItem.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {workItem.link.text || workItem.link.href}
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link href="/work" className={`${styles.closeBtn} navigation`}>
          {" "}
          {/* Link back to the work page */}
          Go back
        </Link>
      </section>
    </main>
  );
}
