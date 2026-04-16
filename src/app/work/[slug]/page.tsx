import AnimatedLink from "@/components/AnimatedLink/AnimatedLink";
import WorkItemMedia from "@/components/Work/WorkItemMedia";
import { ContentService } from "@/services/ContentService";
import { PortableText } from "@portabletext/react";
import { type Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const work = await ContentService.getWork(slug);
  return work?.metadata || { title: "Project Not Found" };
}

export default async function WorkItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  if (!slug) {
    return <div>Error: Project slug is missing in the URL parameters.</div>;
  }

  const workItem = await ContentService.getWork(slug);

  if (!workItem) {
    return <div>Project not found</div>;
  }

  return (
    <section className={styles.workItemPage} id="work-item">
      <div className={styles.workItemContent}>
        <Link
          href={workItem.link?.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mediaLink}
        >
          <WorkItemMedia
            videoUrl={
              workItem.mainAsset?.type === "video"
                ? workItem.mainAsset.url
                : undefined
            }
            imageUrl={
              workItem.mainAsset?.type === "image"
                ? workItem.mainAsset.url
                : undefined
            }
            imageMetadata={{
              width: workItem.mainAsset?.width,
              height: workItem.mainAsset?.height,
            }}
            title={workItem.title}
            slug={slug}
            className={
              workItem.mainAsset?.type === "video" ? styles.media : styles.image
            }
            isMobile={false}
          />
        </Link>
        <div className={styles.titleSection}>
          <h1>{workItem.title}</h1>
          {workItem.role && (
            <span className={styles.role}>{workItem.role}</span>
          )}
        </div>

        <div className={styles.stackSection}>
          <span className={styles.sectionLabel}>Tech stack</span>
          <p>{workItem.stackString || "N/A"}</p>
        </div>

        <div className={styles.descriptionSection}>
          <span className={styles.sectionLabel}>Description</span>
          <div className={styles.description}>
            <PortableText value={workItem.description} />
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
