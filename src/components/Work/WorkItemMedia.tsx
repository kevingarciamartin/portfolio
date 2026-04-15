"use client";

import { motion } from "framer-motion";

interface WorkItemMediaProps {
  videoUrl?: string;
  imageUrl?: string;
  title: string;
  slug: string;
  className: string;
  isMobile: boolean;
}

export default function WorkItemMedia({
  videoUrl,
  imageUrl,
  title,
  slug,
  className,
  isMobile,
}: WorkItemMediaProps) {
  return (
    <>
      {videoUrl ? (
        <motion.video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
          aria-label={`Video of ${title}`}
          style={{
            aspectRatio: "4/5",
            objectFit: "cover",
          }}
        />
      ) : imageUrl ? (
        <motion.img
          src={imageUrl}
          alt={title}
          layoutId={isMobile ? undefined : `project-media-${slug}`}
          className={className}
        />
      ) : null}
    </>
  );
}
