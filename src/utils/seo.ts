import { type WorkItem } from "@/types/content";
import { metadataTitle } from "@/utils/constants";
import { type Metadata } from "next";

/**
 * Generates Next.js Metadata for a given WorkItem.
 * This keeps framework-specific SEO logic separate from the domain model.
 */
export function getWorkItemMetadata(work: WorkItem): Metadata {
  return {
    title: `${work.title} | ${metadataTitle}`,
    description: work.role || `Case study for ${work.title}`,
    openGraph: {
      title: work.title,
      description: work.role,
      images: work.mainMedia?.url ? [{ url: work.mainMedia.url }] : [],
    },
  };
}
