import React from "react";
import { motion } from "framer-motion";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { FaNodeJs, FaVuejs, FaAngular, FaPython, FaDocker, FaGitAlt, FaFigma, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs, SiNuxtdotjs, SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Technology = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const iconVariants = (duration) => ({
    initial: { y: -6 },
    animate: {
      y: [6, -6],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  });

  const getLevelTranslation = (level) => {
    if (level === "Advanced") return t("technologies.levels.advanced");
    if (level === "Intermediate") return t("technologies.levels.intermediate");
    if (level === "Familiar") return t("technologies.levels.familiar");
    return level;
  };

  const getCategoryTitle = (title) => {
    if (title === "Front-end Development") {
      return i18n.language === "vi" ? "Phát triển Front-end" : i18n.language === "de" ? "Front-end Entwicklung" : "Front-end Development";
    }
    if (title === "Back-end & Databases") {
      return i18n.language === "vi" ? "Hệ thống Back-end & CSDL" : i18n.language === "de" ? "Back-end & Datenbanken" : "Back-end & Databases";
    }
    if (title === "DevOps & Tools") {
      return i18n.language === "vi" ? "DevOps & Công cụ" : i18n.language === "de" ? "DevOps & Werkzeuge" : "DevOps & Tools";
    }
    return title;
  };

  const categories = [
    {
      title: "Front-end Development",
      skills: [
        { name: "React.js", icon: <RiReactjsLine className="text-cyan-500 dark:text-cyan-400" />, level: "Advanced" },
        { name: "Next.js", icon: <TbBrandNextjs className="text-slate-800 dark:text-slate-100" />, level: "Advanced" },
        { name: "Vue.js", icon: <FaVuejs className="text-green-500" />, level: "Intermediate" },
        { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-emerald-500 dark:text-emerald-400" />, level: "Intermediate" },
        { name: "Angular", icon: <FaAngular className="text-red-650 dark:text-red-600" />, level: "Familiar" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500" />, level: "Advanced" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 dark:text-sky-400" />, level: "Advanced" },
        { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: "Intermediate" },
      ],
    },
    {
      title: "Back-end & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" />, level: "Intermediate" },
        { name: "MySQL", icon: <DiMysql className="text-blue-600" />, level: "Intermediate" },
        { name: "MongoDB", icon: <DiMongodb className="text-emerald-600 dark:text-emerald-500" />, level: "Intermediate" },
        { name: "PostgreSQL", icon: <DiPostgresql className="text-sky-600" />, level: "Intermediate" },
        { name: "Python", icon: <FaPython className="text-yellow-600 dark:text-yellow-500" />, level: "Familiar" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Familiar" },
        { name: "AWS S3", icon: <FaAws className="text-orange-500" />, level: "Familiar" },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: "Advanced" },
        { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: "Familiar" },
      ],
    },
  ];

  return (
    <div ref={ref} className="border-b border-slate-200 dark:border-slate-800/60 pb-24 mt-20" id="technologies-section">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
      >
        {t("technologies.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={catIdx}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            className="glass rounded-2xl p-6 flex flex-col h-full border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-none"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 border-b border-slate-200 dark:border-slate-850 pb-3 text-cyan-600 dark:text-cyan-400">
              {getCategoryTitle(cat.title)}
            </h3>
            
            <div className="flex flex-col gap-4 flex-grow">
              {cat.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  variants={iconVariants(1.5 + (skillIdx % 3) * 0.25)}
                  initial="initial"
                  animate="animate"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900/80 border border-slate-200 dark:border-slate-800/30 hover:border-cyan-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {getLevelTranslation(skill.level)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

Technology.displayName = "Technology";
export default Technology;
