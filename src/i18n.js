import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./constants/translations";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      vi: { translation: translations.vi },
      de: { translation: translations.de },
    },
    lng: localStorage.getItem("portfolio_lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// Keep localstorage updated on language change
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("portfolio_lang", lng);
});

export default i18n;
