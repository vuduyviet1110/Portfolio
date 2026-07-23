import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslation } from "react-i18next";

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="border-b border-slate-200 dark:border-slate-800/60 pb-20 dark:text-slate-300 text-slate-700 flex flex-col justify-center items-center mt-20"
      id="about-section"
    >
      <div className="flex space-x-2.5">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
        >
          {t("about.title1")}{" "}
        </motion.h2>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-cyan-600 dark:text-cyan-400 text-4xl font-extrabold tracking-tight"
        >
          {t("about.title2")}
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 gap-10 items-stretch w-full max-w-5xl">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-between"
        >
          <TextGenerateEffect
            className="font-light text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic"
            words={t("about.description")}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex"
        >
          <div className="glass glass-hover rounded-2xl p-8 flex flex-col justify-center w-full relative overflow-hidden group">
            {/* Background design elements */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-5 dark:opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <img
                src="https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-ha-noi-inkythuatso-22-10-55-59.jpg"
                alt="HANU Logo Back"
                className="w-full h-full object-contain filter grayscale"
              />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl border border-slate-350 dark:border-slate-700/60 overflow-hidden bg-white p-1 flex-shrink-0 flex items-center justify-center">
                <img
                  src="https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-ha-noi-inkythuatso-22-10-55-59.jpg"
                  alt="HANU Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">{t("about.education")}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t("about.academicBg")}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-1">{t("about.institution")}</div>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{EDUCATION.school}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{EDUCATION.duration}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-1">{t("about.major")}</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("about.majorVal")}</div>
                </div>
                <div>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-1">{t("about.gpa")}</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{EDUCATION.gpa} / 4.0</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
