export type MediaType = "image" | "video";

export interface WorkMedia {
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
  type: MediaType;
  blurDataURL?: string;
}

export interface WorkLink {
  text: string;
  href: string;
}

export interface WorkItem {
  id: string;
  updatedAt?: string;
  title: string;
  slug: string;
  role?: string;
  description: any; // Using any for PortableText as it's standard, but can be more specific
  stack: string[];
  stackString: string;
  mainMedia: WorkMedia | null;
  primaryLink: WorkLink | null;
  githubUrl?: string;
  featured?: boolean;
}
