"use client";

import { useTheme } from "@/context/ThemeContext";
import styles from "../Header.module.css";

interface ThemeButtonProps {
  value: "light" | "dark";
}

const ThemeButton = ({ value }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={theme === value ? styles.active : ""}
      onClick={() => setTheme(value)}
    >
      {`${value.charAt(0).toUpperCase() + value.slice(1)} Mode`}
    </button>
  );
};

export default ThemeButton;
