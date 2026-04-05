"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import backdrop from "../../../public/img/snooki-i-london.jpeg";
import AnimatedLink, { AnimatedLinkProps } from "../AnimatedLink/AnimatedLink";
import styles from "./Contact.module.css";

const contactArray: AnimatedLinkProps[] = [
  {
    label: "Github",
    href: "https://github.com/kevingarciamartin/",
    type: "url",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-garcia-martin-13a930154/",
    type: "url",
  },
  {
    label: null,
    href: "kevingm@live.se",
    type: "mail",
  },
];

const MotionImage = motion.create(Image);

export default function Contact() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-720, 0]);

  return (
    <section ref={sectionRef} className={styles.contact}>
      <MotionImage
        src={backdrop}
        alt="Contact backdrop. An image of Kevin Garcia Martin walking in London."
        className={styles.parallaxBg}
        style={{ y: yPos }}
        loading="lazy"
      />
      <article className={styles.contactArticle}>
        <div>
          <p>
            I&apos;m always excited to discuss new projects and collaboration
            opportunities. Feel free to reach out and let&apos;s build something
            beautiful together.
          </p>
          <motion.svg
            ref={svgRef}
            id="sun"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sunSvg}
            style={{ rotate: rotate }}
          >
            <title>sun</title>
            <path d="M23.395 14.106c2.958-1.383 2.828-6.068 5.758-5.884-4.125-2.74-4.019 3.106-9.089 1.235 1.107-3.068-2.292-6.286-0.091-8.227-4.855 0.979-0.645 5.039-5.555 7.301-1.384-2.958-6.068-2.828-5.884-5.758-2.74 4.125 3.106 4.019 1.235 9.089-3.068-1.107-6.286 2.292-8.227 0.091 0.979 4.855 5.039 0.645 7.301 5.555-2.958 1.384-2.828 6.068-5.758 5.884 4.125 2.74 4.019-3.106 9.089-1.235-1.107 3.068 2.292 6.286 0.091 8.227 4.855-0.979 0.645-5.039 5.555-7.301 1.384 2.958 6.068 2.828 5.884 5.758 2.74-4.125-3.106-4.019-1.235-9.089 3.068 1.107 6.286-2.292 8.226-0.091-0.979-4.855-5.039-0.645-7.301-5.555z"></path>
          </motion.svg>
          <address id="contact__links">
            {contactArray.map((link, index) => (
              <AnimatedLink
                key={index}
                label={link.label}
                href={link.href}
                type={link.type}
              />
            ))}
          </address>
        </div>
      </article>
    </section>
  );
}
