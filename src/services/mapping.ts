import { metadataTitle } from "@/app/layout";
import { type SmartWork } from "@/types/content";
import { type RawWorkItem } from "./ContentService";

export const mapToSmartWork = (work: RawWorkItem): SmartWork => {
  const isVideo = !!work.videoUrl;
  const assetUrl = work.videoUrl || work.imageUrl || "";

  const mainAsset: SmartWork["mainAsset"] = assetUrl
    ? {
        url: assetUrl,
        width: work.imageMetadata?.width || 1920,
        height: work.imageMetadata?.height || 1080,
        type: isVideo ? "video" : "image",
      }
    : null;

  const stackString = work.stack?.join(", ") || "";

  const metadata = {
    title: `${work.title} | ${metadataTitle}`,
    description: work.role || `Case study for ${work.title}`,
    openGraph: {
      title: work.title,
      description: work.role,
      images: work.imageUrl ? [{ url: work.imageUrl }] : [],
    },
  };

  return {
    id: work._id,
    updatedAt: work._updatedAt,
    title: work.title,
    slug: work.slug,
    role: work.role,
    description: work.description,
    stack: work.stack || [],
    stackString,
    mainAsset,
    link: work.link,
    githubUrl: work.githubUrl,
    featured: work.featured,
    metadata,
  };
};
