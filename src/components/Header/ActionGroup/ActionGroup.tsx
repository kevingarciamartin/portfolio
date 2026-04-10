import { useMemo } from "react";
import NavLink from "../NavLink/NavLink";
import { routes } from "../routes";
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./ActionGroup.module.css";

interface ActionGroupProps {
  variant: "link" | "button";
}

const ActionGroup = ({ variant }: ActionGroupProps) => {
  const content = useMemo(() => {
    if (variant === "link" && routes) {
      return (
        <ul className={styles.actionGroup}>
          {routes?.map((route, index) => (
            <li key={index}>
              <NavLink route={route} />
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className={styles.actionGroup}>
          <ThemeButton value="light" />
          <ThemeButton value="dark" />
        </div>
      );
    }
  }, [variant, routes]);

  return <>{content}</>;
};

export default ActionGroup;
