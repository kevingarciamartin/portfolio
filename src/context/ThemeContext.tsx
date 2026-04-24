"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) => {
  const [theme, setThemeState] = useState<Theme | undefined>(() => {
    if (initialTheme) return initialTheme;

    // Client-side only fallback
    if (typeof document === "undefined") return undefined;

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    return (getCookie("theme") as Theme) || "light";
  });

  useEffect(() => {
    if (!theme) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    // Set cookie with 10 year expiration (315360000 seconds)
    document.cookie = `theme=${newTheme}; path=/; max-age=315360000; sameSite=Lax`;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
