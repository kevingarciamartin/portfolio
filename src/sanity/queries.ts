import { client } from "./client";

export const getWorkItems = async () => {
  return client.fetch(`
    *[_type == "work"] | order(orderRank asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "stack": stack[]->title,
      "imageUrl": image.asset->url,
      "videoUrl": video.asset->url,
      link,
      featured
    }
  `);
};

export const getWorkBySlug = async (slug: string) => {
  return client.fetch(
    `
    *[_type == "work" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
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
