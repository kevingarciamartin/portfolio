import { client } from "@/sanity/client";
import { type WorkItem, type WorkLink, type WorkMedia } from "@/types/content";

/**
 * Raw WorkItem interface matching the Sanity schema projection.
 * This is internal to the Repository domain.
 */
export interface RawWorkItem {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  role?: string;
  description: any;
  stack: string[];
  imageUrl?: string;
  imageMetadata?: {
    width: number;
    height: number;
  };
  videoUrl?: string;
  link?: {
    text?: string;
    href?: string;
  };
  githubUrl?: string;
  featured?: boolean;
}

const WORK_PROJECTION = `
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  role,
  description,
  "stack": stack[]->title,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata.dimensions,
  "videoUrl": video.asset->url,
  link,
  githubUrl,
  featured
`;

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

/**
 * Maps raw Sanity data to the stable WorkItem domain model.
 * This is internal to the Repository domain.
 */
function mapToWorkItem(raw: RawWorkItem): WorkItem {
  const mainMedia = mapToWorkMedia(raw);
  const stack = raw.stack || [];
  const stackString = stack.join(", ");

  const primaryLink: WorkLink | null = raw.link?.href
    ? {
        text: raw.link.text || "View Project",
        href: raw.link.href,
      }
    : null;

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
  };
}

export interface IWorkRepository {
  getBySlug(slug: string): Promise<WorkItem | null>;
  list(): Promise<WorkItem[]>;
}

export class SanityWorkRepository implements IWorkRepository {
  async getBySlug(slug: string): Promise<WorkItem | null> {
    const raw = await client.fetch<RawWorkItem | null>(
      `*[_type == "work" && slug.current == $slug][0] { ${WORK_PROJECTION} }`,
      { slug },
      { next: { revalidate: 3600 } }
    );
    return raw ? mapToWorkItem(raw) : null;
  }

  async list(): Promise<WorkItem[]> {
    const raws = await client.fetch<RawWorkItem[]>(
      `*[_type == "work"] | order(orderRank asc) { ${WORK_PROJECTION} }`,
      {},
      { next: { revalidate: 3600 } }
    );
    return raws.map(mapToWorkItem);
  }
}

export class MockWorkRepository implements IWorkRepository {
  async getBySlug(slug: string): Promise<WorkItem | null> {
    return null;
  }

  async list(): Promise<WorkItem[]> {
    return [];
  }
}

export const getWorkRepository = (): IWorkRepository => {
  if (process.env.USE_MOCK_DATA === "true") {
    return new MockWorkRepository();
  }
  return new SanityWorkRepository();
};
