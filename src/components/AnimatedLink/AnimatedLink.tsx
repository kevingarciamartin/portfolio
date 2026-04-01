import styles from "./AnimatedLink.module.css";

export interface AnimatedLinkProps {
  label: string | null;
  href: string;
  type: "url" | "mail";
}

const AnimatedLink = ({ label, href, type = "url" }: AnimatedLinkProps) => {
  return (
    <a
      className={styles.animatedLink}
      href={type === "mail" ? "mailto:" + href : href}
      target={type === "url" ? "_blank" : undefined}
      rel={type === "url" ? "noopener noreferrer" : undefined}
    >
      <span>{label ?? href}</span>
      <span>{label ?? href}</span>
    </a>
  );
};

export default AnimatedLink;
