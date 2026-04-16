import { client } from "@/sanity/client";
import { type SmartWork } from "@/types/content";
import { mapToSmartWork } from "./mapping";

/**
 * Raw WorkItem interface matching the Sanity schema projection.
 * This is internal to the ContentService domain.
 */
export interface RawWorkItem {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  role?: string;
  description: {
    _type: string;
    children: { _type: string; text: string }[];
    [key: string]: unknown;
  }[];
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
  featured
`;

export const ContentService = {
  getWork: async (slug: string): Promise<SmartWork | null> => {
    const raw = await client.fetch<RawWorkItem | null>(
      `*[_type == "work" && slug.current == $slug][0] { ${WORK_PROJECTION} }`,
      { slug }
    );
    return raw ? mapToSmartWork(raw) : null;
  },

  getAllWork: async (): Promise<SmartWork[]> => {
    const raws = await client.fetch<RawWorkItem[]>(
      `*[_type == "work"] | order(orderRank asc) { ${WORK_PROJECTION} }`
    );
    return raws.map(mapToSmartWork);
  },
};
