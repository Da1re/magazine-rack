import { useI18n } from "../hooks/i18n";

export function LanguageSwitcher() {
  const { i18n, languages, currentLanguage } = useI18n();
  return (
    <div>
      {Object.entries(languages)
        .filter(([lng]) => lng !== currentLanguage)
        .map(([lng, { nativeName }]) => (
          <button
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            className="px-2 py-1 rounded-full text-sm"
          >
            {nativeName}
          </button>
        ))}
    </div>
  );
}
