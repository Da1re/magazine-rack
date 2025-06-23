import { useTranslation } from "react-i18next";

export interface LanguageInfo {
  nativeName: string;
}
const lngs: Record<string, LanguageInfo> = {
  ko: { nativeName: "KO" },
  en: { nativeName: "EN" },
};
export type LngKey = keyof typeof lngs;

export const useI18n = () => {
  const { t, i18n } = useTranslation();
  return {
    t,
    i18n,
    languages: lngs,
    currentLanguage: i18n.resolvedLanguage as LngKey,
  };
};
