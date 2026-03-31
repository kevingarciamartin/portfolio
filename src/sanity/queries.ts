import { client } from "./client";

export interface WorkItem {
  _id: string;
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
  videoUrl?: string;
  link?: {
    text?: string;
    href?: string;
  };
  featured?: boolean;
}

export const getWorkItems = async (): Promise<WorkItem[]> => {
  return client.fetch(`
    *[_type == "work"] | order(orderRank asc) {
      _id,
      title,
      "slug": slug.current,
      role,
      description,
      "stack": stack[]->title,
      "imageUrl": image.asset->url,
      "videoUrl": video.asset->url,
      link,
      featured
    }
  `);
};

export const getWorkBySlug = async (slug: string): Promise<WorkItem | null> => {
  return client.fetch(
    `
    *[_type == "work" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      role,
      description,
      "stack": stack[]->title,
      "imageUrl": image.asset->url,
      "videoUrl": video.asset->url,
      link,
      featured
    }
  `,
    { slug }
  );
};
