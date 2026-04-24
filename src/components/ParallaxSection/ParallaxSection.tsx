"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import styles from "./ParallaxSection.module.css";

interface ParallaxSectionProps {
  image: StaticImageData;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

const MotionImage = motion.create(Image);

export default function ParallaxSection({
  image,
  alt,
  children,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={sectionRef} className={`${styles.parallaxSection} ${className}`}>
      <MotionImage
        src={image}
        alt={alt}
        className={styles.parallaxBg}
        style={{ y: yPos }}
        loading="lazy"
        width={image.width}
        height={image.height}
        sizes="100vw"
      />
      {children}
    </section>
  );
}
