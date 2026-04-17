"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WorkItemMediaProps {
  videoUrl?: string;
  imageUrl?: string;
  imageMetadata: { width?: number; height?: number };
  title: string;
  slug: string;
  className: string;
  isMobile: boolean;
}

export default function WorkItemMedia({
  videoUrl,
  imageUrl,
  imageMetadata,
  title,
  slug,
  className,
  isMobile,
}: WorkItemMediaProps) {
  return (
    <>
      {videoUrl ? (
        <motion.div
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
        >
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            aria-label={`Video of ${title}`}
          />
        </motion.div>
      ) : imageUrl ? (
        <motion.div
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
          style={
            imageMetadata.width && imageMetadata.height
              ? {
                  aspectRatio: imageMetadata.width / imageMetadata.height,
                }
              : {}
          }
        >
          <Image
            src={imageUrl}
            alt={title}
            width={imageMetadata?.width || 800}
            height={imageMetadata?.height || 1000}
            sizes="(max-width: 1000px) 100vw, 800px"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      ) : null}
    </>
  );
}
