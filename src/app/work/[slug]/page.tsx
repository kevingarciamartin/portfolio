import AnimatedLink from "@/components/AnimatedLink/AnimatedLink";
import { getWorkBySlug } from "@/sanity/queries";
import { Link } from "next-view-transitions";
import Image from "next/image";
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

  const viewTransitionName = `project-media-${slug}`;

  return (
    <section className={styles.workItemPage} id="work-item">
      <div className={styles.workItemContent}>
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
              style={{ "--vt-name": viewTransitionName } as React.CSSProperties}
            />
          ) : workItem.imageUrl ? (
            <Image
              src={workItem.imageUrl}
              alt={workItem.title}
              width={workItem.imageMetadata?.width || 800}
              height={workItem.imageMetadata?.height || 600}
              priority
              className={styles.image}
              style={
                {
                  objectFit: "cover",
                  "--vt-name": viewTransitionName,
                } as React.CSSProperties
              }
              sizes="(max-width: 800px) 100vw, 800px"
            />
          ) : null}
        </Link>
        <div className={styles.titleSection}>
          <h1>{workItem.title}</h1>
          {workItem.role && (
            <span className={styles.role}>{workItem.role}</span>
          )}
        </div>

        <div className={styles.stackSection}>
          <span className={styles.sectionLabel}>Tech stack</span>
          <p>{workItem.stack?.join(", ") || "N/A"}</p>
        </div>

        <div className={styles.descriptionSection}>
          <span className={styles.sectionLabel}>Description</span>
          <div className={styles.description}>
            {workItem.description?.map(
              (block: { children: { text: string }[] }, i: number) => (
                <p key={i}>{block.children[0].text}</p>
              )
            )}
          </div>
        </div>

        <div className={styles.urlSection}>
          <span className={styles.sectionLabel}>URL</span>
          {workItem.link?.href && (
            <AnimatedLink
              label={workItem.link.text || workItem.link.href}
              href={workItem.link.href}
              type="url"
            />
          )}
        </div>

        <Link href="/work" className={`${styles.closeBtn} navigation`}>
          Go Back
        </Link>
      </div>
    </section>
  );
}
