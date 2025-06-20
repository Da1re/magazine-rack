import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import headerEn from "./locales/en/header.json";
import headerKo from "./locales/ko/header.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        header: headerKo,
      },
      en: {
        header: headerEn,
      },
    },
    fallbackLng: "ko",
    debug: true,
    ns: ["header"],
    interpolation: { escapeValue: false },
  });

export default i18n;
