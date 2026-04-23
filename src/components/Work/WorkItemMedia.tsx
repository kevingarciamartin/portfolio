"use client";

import { type WorkMedia } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

interface WorkItemMediaProps {
  media: WorkMedia | null;
  title: string;
  slug: string;
  className: string;
  isMobile: boolean;
  priority?: boolean;
}

/**
 * A 'dumb' component that renders work assets.
 * It consumes a stable WorkMedia domain object and is decoupled from the CMS schema.
 */
export default function WorkItemMedia({
  media,
  title,
  slug,
  className,
  isMobile,
  priority = false,
}: WorkItemMediaProps) {
  if (!media) return null;

  return (
    <>
      {media.type === "video" ? (
        <motion.div
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
        >
          <video
            src={media.url}
            autoPlay
            muted
            loop
            playsInline
            aria-label={`Video of ${title}`}
          />
        </motion.div>
      ) : (
        <motion.div
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
          style={{
            aspectRatio: media.aspectRatio,
          }}
        >
          <Image
            src={media.url}
            alt={title}
            width={media.width}
            height={media.height}
            sizes="(max-width: 1000px) 100vw, 800px"
            style={{ width: "100%", height: "auto" }}
            priority={priority}
          />
        </motion.div>
      )}
    </>
  );
}
