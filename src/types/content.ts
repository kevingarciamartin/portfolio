import { type Metadata } from "next";

export interface SmartWork {
  id: string;
  updatedAt?: string;
  title: string;
  slug: string;
  role?: string;
  description: {
    _type: string;
    children: { _type: string; text: string }[];
    [key: string]: unknown;
  }[];
  stack: string[];
  stackString: string;
  mainAsset: {
    url: string;
    width: number;
    height: number;
    type: "image" | "video";
  } | null;
  link?: {
    text?: string;
    href?: string;
  };
  featured?: boolean;
  metadata: Metadata;
}
