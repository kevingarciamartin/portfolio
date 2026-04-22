import { metadataTitle } from "@/app/layout";
import { type WorkItem, type WorkLink, type WorkMedia } from "@/types/content";
import { type RawWorkItem } from "./ContentService";

/**
 * Maps raw Sanity data to the stable WorkItem domain model.
 * This is the 'Deep Module' boundary that hides CMS schema complexity.
 */
export const mapToWorkItem = (raw: RawWorkItem): WorkItem => {
  const mainMedia = mapToWorkMedia(raw);
  const stack = raw.stack || [];
  const stackString = stack.join(", ");

  const primaryLink: WorkLink | null = raw.link?.href
    ? {
        text: raw.link.text || "View Project",
        href: raw.link.href,
      }
    : null;

  const metadata = {
    title: `${raw.title} | ${metadataTitle}`,
    description: raw.role || `Case study for ${raw.title}`,
    openGraph: {
      title: raw.title,
      description: raw.role,
      images: raw.imageUrl ? [{ url: raw.imageUrl }] : [],
    },
  };

  return {
    id: raw._id,
    updatedAt: raw._updatedAt,
    title: raw.title,
    slug: raw.slug,
    role: raw.role,
    description: raw.description,
    stack,
    stackString,
    mainMedia,
    primaryLink,
    githubUrl: raw.githubUrl,
    featured: raw.featured,
    metadata,
  };
};

/**
 * Internal helper to resolve media heuristics.
 */
function mapToWorkMedia(raw: RawWorkItem): WorkMedia | null {
  const url = raw.videoUrl || raw.imageUrl;
  if (!url) return null;

  const isVideo = !!raw.videoUrl;
  const width = raw.imageMetadata?.width || 1920;
  const height = raw.imageMetadata?.height || 1080;

  return {
    url,
    width,
    height,
    aspectRatio: width / height,
    type: isVideo ? "video" : "image",
  };
}
