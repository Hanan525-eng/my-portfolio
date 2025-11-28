import { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../constants";

/**
 * Custom hook for managing theme (dark/light mode)
 * @returns {Object} { theme, toggleTheme }
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || DEFAULT_THEME
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

