import { MetadataRoute } from "next";
import { getWorkItems } from "@/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kevingm.com";

  const workItems = await getWorkItems();
  const workRoutes = workItems.map((item) => ({
    url: `${baseUrl}/work/${item.slug}`,
    lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...workRoutes];
}
