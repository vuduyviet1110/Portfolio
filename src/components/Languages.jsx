import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Language = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const getTranslatedName = (name) => {
    if (name === "Vietnamese") return i18n.language === "vi" ? "Tiếng Việt" : i18n.language === "de" ? "Vietnamesisch" : "Vietnamese";
    if (name === "English") return i18n.language === "vi" ? "Tiếng Anh" : i18n.language === "de" ? "Englisch" : "English";
    if (name === "German") return i18n.language === "vi" ? "Tiếng Đức" : i18n.language === "de" ? "Deutsch" : "German";
    return name;
  };

  const languagesList = [
    {
      name: "Vietnamese",
      flag: "https://unpkg.com/language-icons/icons/vi.svg",
      proficiency: t("languages.vietnamese.proficiency"),
      percentage: 100,
      description: t("languages.vietnamese.description"),
    },
    {
      name: "English",
      flag: "https://unpkg.com/language-icons/icons/en.svg",
      proficiency: t("languages.english.proficiency"),
      percentage: 85,
      description: t("languages.english.description"),
    },
    {
      name: "German",
      flag: "https://unpkg.com/language-icons/icons/de.svg",
      proficiency: t("languages.german.proficiency"),
      percentage: 35,
      description: t("languages.german.description"),
    },
  ];

  return (
    <div ref={ref} className="border-b border-slate-200 dark:border-slate-800/60 pb-24 mt-20" id="languages-section">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
      >
        {t("languages.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {languagesList.map((lang, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass glass-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-850 hover:-translate-y-1 shadow-md dark:shadow-none"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700/60 flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt={lang.name}
                  src={lang.flag}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{getTranslatedName(lang.name)}</h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">{lang.proficiency}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
              {lang.description}
            </p>

            <div className="w-full">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>{t("languages.fluency")}</span>
                <span>{lang.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-305 dark:border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

Language.displayName = "Language";
export default Language;
