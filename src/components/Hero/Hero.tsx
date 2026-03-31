import Image from "next/image";
import styles from "./Hero.module.css";
import portrait from "../../../public/img/portrait.jpeg";
import HeroTitle from "./HeroTitle/HeroTitle";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <Image
          src={portrait}
          alt="Portrait of Kevin Garcia Martin"
          fill
          sizes="500px"
          priority
          className={styles.image}
        />
      </div>
      <HeroTitle />
    </section>
  );
}
