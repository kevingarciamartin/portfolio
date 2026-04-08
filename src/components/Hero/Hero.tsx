import portrait from "@public/img/portrait.webp";
import Image from "next/image";
import styles from "./Hero.module.css";
import HeroTitle from "./HeroTitle/HeroTitle";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <Image
          src={portrait}
          alt="Portrait of Kevin Garcia Martin"
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          priority
          fetchPriority="high"
          className={styles.image}
        />
      </div>
      <HeroTitle />
    </section>
  );
}
