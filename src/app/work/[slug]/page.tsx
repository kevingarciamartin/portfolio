import AnimatedLink from "@/components/AnimatedLink/AnimatedLink";
import ErrorLayout from "@/components/ErrorLayout/ErrorLayout";
import WorkItemMedia from "@/components/Work/WorkItemMedia";
import { ContentService } from "@/services/ContentService";
import { getWorkItemMetadata } from "@/utils/seo";
import { PortableText } from "@portabletext/react";
import { type Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = await ContentService.getWork(slug);
  return work ? getWorkItemMetadata(work) : { title: "Project Not Found" };
}

export default async function WorkItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return (
      <ErrorLayout
        title="404"
        message="Project slug is missing in the URL parameters."
      />
    );
  }

  const workItem = await ContentService.getWork(slug);

  if (!workItem) {
    return (
      <ErrorLayout
        title="404"
        message="The project you are looking for does not exist or has been moved."
      />
    );
  }

  return (
    <section className={styles.workItemPage} id="work-item">
      <div className={styles.workItemContent}>
        <Link
          href={workItem.primaryLink?.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mediaLink}
        >
          <WorkItemMedia
            media={workItem.mainMedia}
            title={workItem.title}
            slug={slug}
            className={
              workItem.mainMedia?.type === "video" ? styles.media : styles.image
            }
            isMobile={false}
          />
        </Link>
        <div className={styles.titleSection}>
          <h1>{workItem.title}</h1>
          {workItem.role && <h2 className={styles.role}>{workItem.role}</h2>}
        </div>

        <div className={styles.stackSection}>
          <h2 className={styles.sectionLabel}>Tech stack</h2>
          <p>{workItem.stackString || "N/A"}</p>
        </div>

        <div className={styles.descriptionSection}>
          <h2 className={styles.sectionLabel}>Description</h2>
          <div className={styles.description}>
            <PortableText value={workItem.description} />
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.urlSection}>
            <h2 className={styles.sectionLabel}>Website</h2>
            {workItem.primaryLink?.href && (
              <AnimatedLink
                label={workItem.primaryLink.text}
                href={workItem.primaryLink.href}
                type="url"
              />
            )}
          </div>

          {workItem.githubUrl && (
            <div className={styles.urlSection}>
              <h2 className={styles.sectionLabel}>Repo</h2>
              <AnimatedLink
                label="GitHub"
                href={workItem.githubUrl}
                type="url"
              />
            </div>
          )}
        </div>

        <Link href="/work" className={`${styles.closeBtn} navigation`}>
          Go Back
        </Link>
      </div>
    </section>
  );
}
