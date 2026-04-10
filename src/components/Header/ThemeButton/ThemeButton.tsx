"use client";

import { useTheme } from "@/context/ThemeContext";
import sharedStyles from "../ActionGroup/ActionGroup.module.css";
import styles from "./ThemeButton.module.css";

interface ThemeButtonProps {
  value: "light" | "dark";
}

const ThemeButton = ({ value }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  const isActive = theme === value;

  return (
    <button
      className={[
        styles.themeButton,
        isActive ? sharedStyles.active : sharedStyles.notActive,
      ].join(" ")}
      onClick={() => setTheme(value)}
    >
      {`${value.charAt(0).toUpperCase() + value.slice(1)} Mode`}
    </button>
  );
};

export default ThemeButton;
