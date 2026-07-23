import ProfilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const container = (delay) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <div className="border-b border-slate-200 dark:border-slate-800/60 pb-16 lg:mb-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 mt-6">
      <div className="flex flex-1 flex-col gap-4 w-full">
        <motion.span
          variants={container(0.1)}
          initial="hidden"
          animate="visible"
          className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm"
        >
          {t("hero.welcome")}
        </motion.span>
        
        <motion.h1
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
        >
          Vu Duy Viet
        </motion.h1>

        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 bg-clip-text text-transparent tracking-tight inline-block"
        >
          {t("hero.role")}
        </motion.div>

        <motion.div
          variants={container(0.7)}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-slate-700 dark:text-slate-300 font-light"
        >
          <TextGenerateEffect
            className="font-light text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300"
            words={t("hero.description")}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container(0.9)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 max-w-md mt-6"
        >
          <div className="glass p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">2+</div>
            <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{t("hero.yearsExp")}</div>
          </div>
          <div className="glass p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">4+</div>
            <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{t("hero.projects")}</div>
          </div>
          <div className="glass p-4 rounded-xl text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">C1</div>
            <div className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{t("hero.english")}</div>
          </div>
        </motion.div>
      </div>

      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center relative">
        {/* Glow effect backround */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-full object-cover rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-2xl relative z-10 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300"
          src={ProfilePic}
          alt="Vu Duy Viet Profile"
        />
      </div>
    </div>
  );
}

export default Hero;
