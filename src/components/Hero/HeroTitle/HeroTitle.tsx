import styles from "./HeroTitle.module.css";

interface HeroTitleProps {
  section?: "hero" | "footer";
}

const HeroTitle = ({ section = "hero" }: HeroTitleProps) => {
  const Tag = section === "hero" ? "h1" : "p";
  return (
    <Tag
      className={
        section === "footer"
          ? [styles.title, styles.footer__title].join(" ")
          : styles.title
      }
    >
      Kevin Garcia Martin
    </Tag>
  );
};

export default HeroTitle;
