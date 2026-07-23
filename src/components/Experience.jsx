import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = React.forwardRef((props, ref) => {
  const { t } = useTranslation();

  // Map the static experiences details to translated version
  const translatedExperiences = EXPERIENCES.map((exp) => {
    // If Zen8labs, map to translation keys
    if (exp.company === "Zen8labs") {
      return {
        ...exp,
        role: t("experience.roles.zen8labs"),
        // use returnObjects: true to get array from i18next
        description: t("experience.descriptions.zen8labs", { returnObjects: true }),
      };
    }
    return exp;
  });

  return (
    <div ref={ref} className="border-b border-slate-200 dark:border-slate-800/60 pb-20 mt-20" id="experience-section">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
      >
        {t("experience.title")}
      </motion.h2>

      <div className="relative border-l border-slate-300 dark:border-slate-700 max-w-4xl mx-auto px-4">
        {translatedExperiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6 group">
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 ring-4 ring-cyan-500/20 group-hover:scale-125 transition-transform duration-300"></span>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <motion.h3 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2"
                >
                  {exp.role} 
                  <span className="text-cyan-600 dark:text-cyan-400 text-lg font-medium">@ {exp.company}</span>
                </motion.h3>
              </div>
              <motion.span 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 border border-slate-350 dark:border-slate-700/50 self-start md:self-auto"
              >
                {exp.year}
              </motion.span>
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass glass-hover rounded-xl p-6 mb-4"
            >
              <ul className="space-y-2.5 text-slate-700 dark:text-slate-300 text-sm md:text-base font-light mb-6 list-disc list-inside">
                {Array.isArray(exp.description) && exp.description.map((bullet, i) => (
                  <li key={i} className="leading-relaxed hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200">
                    <span className="text-slate-700 dark:text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-100/50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-500/10 dark:border-cyan-500/20 shadow-sm shadow-cyan-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
});

Experience.displayName = "Experience";
export default Experience;
