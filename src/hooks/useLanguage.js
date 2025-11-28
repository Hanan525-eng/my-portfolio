import { useState, useEffect, useMemo } from "react";
import { translations } from "../translations";
import { DEFAULT_LANGUAGE } from "../constants";

/**
 * Custom hook for managing language (Arabic/English)
 * @returns {Object} { language, toggleLanguage, translations: t, textDirection }
 */
export const useLanguage = () => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || DEFAULT_LANGUAGE
  );

  const textDirection = useMemo(
    () => (language === "ar" ? "rtl" : "ltr"),
    [language]
  );

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = textDirection;
    document.title =
      language === "ar"
        ? "بورتفوليو حنان - مصممة ومطورة واجهات"
        : "Hanan Portfolio - UX/UI Designer & Frontend Developer";
  }, [language, textDirection]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  return { language, toggleLanguage, t, textDirection };
};

