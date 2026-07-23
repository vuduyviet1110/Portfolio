import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaCalendarAlt, FaUserTag } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Projects = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const getTranslatedRole = (role) => {
    if (role === "Odoo Developer") {
      return i18n.language === "vi" ? "Lập trình viên Odoo" : i18n.language === "de" ? "Odoo-Entwickler" : "Odoo Developer";
    }
    if (role === "Full-stack Developer") {
      return i18n.language === "vi" ? "Lập trình viên Full-stack" : i18n.language === "de" ? "Full-Stack-Entwickler" : "Full-stack Developer";
    }
    if (role === "Front-end Developer") {
      return i18n.language === "vi" ? "Lập trình viên Front-end" : i18n.language === "de" ? "Frontend-Entwickler" : "Front-end Developer";
    }
    return role;
  };

  const getTranslatedProject = (project) => {
    let key = "";
    if (project.title.includes("iCare")) key = "icare";
    else if (project.title.includes("Voice-Bio")) key = "voiceBio";
    else if (project.title.includes("IBANK")) key = "ibank";
    else if (project.title.includes("ESG")) key = "esg";

    if (key) {
      return {
        ...project,
        role: getTranslatedRole(project.role),
        description: t(`projects.list.${key}.description`),
        responsibilities: t(`projects.list.${key}.responsibilities`, { returnObjects: true }),
      };
    }
    return {
      ...project,
      role: getTranslatedRole(project.role),
    };
  };

  const translatedProjects = PROJECTS.map(getTranslatedProject);

  return (
    <div
      ref={ref}
      className="border-b border-slate-200 dark:border-slate-800/60 pb-20 mt-20"
      id="projects-section"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
      >
        {t("projects.title")}
      </motion.h2>

      <div className="flex flex-col gap-16 max-w-5xl mx-auto px-4">
        {translatedProjects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
          >
            {/* Project Image Panel */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/5 flex flex-col justify-start"
            >
              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 aspect-video lg:aspect-auto lg:h-[280px]">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 dark:opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Project Details Panel */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap gap-2.5 mb-3.5">
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-500/10 dark:border-cyan-500/20">
                    <FaUserTag /> {project.role}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/50">
                    <FaUsers /> {t("projects.teamSize")}: {project.teamSize}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/50">
                    <FaCalendarAlt /> {project.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-750 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.responsibilities && Array.isArray(project.responsibilities) && (
                  <div className="mb-5">
                    <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-2">{t("projects.responsibilities")}</h4>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-xs md:text-sm font-light space-y-1">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      <FaGithub className="text-lg" /> Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
