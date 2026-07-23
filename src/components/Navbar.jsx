import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

// eslint-disable-next-line react/prop-types
function NavBar({ scrollTo }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const langList = [
    { code: "en", label: "EN" },
    { code: "vi", label: "VI" },
    { code: "de", label: "DE" }
  ];

  const handleNavClick = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 mb-10">
      <nav className="flex py-4 px-6 md:px-10 justify-between items-center antialiased glass rounded-b-2xl border-t-0 shadow-lg transition-all duration-300 dark:text-slate-300 text-slate-700">
        <div className="flex font-outfit font-extrabold text-2xl tracking-wider text-cyan-500">
          VITRA<span className="dark:text-white text-slate-950">.VU</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="gap-6 flex text-sm font-semibold tracking-wide">
            <motion.li whileHover={{ y: -2 }} className="transition-colors duration-200">
              <button onClick={() => scrollTo("about")} className="hover:text-cyan-500 dark:hover:text-cyan-400">{t("navbar.about")}</button>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} className="transition-colors duration-200">
              <button onClick={() => scrollTo("experience")} className="hover:text-cyan-500 dark:hover:text-cyan-400">{t("navbar.experience")}</button>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} className="transition-colors duration-200">
              <button onClick={() => scrollTo("technology")} className="hover:text-cyan-500 dark:hover:text-cyan-400">{t("navbar.technologies")}</button>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} className="transition-colors duration-200">
              <button onClick={() => scrollTo("projects")} className="hover:text-cyan-500 dark:hover:text-cyan-400">{t("navbar.projects")}</button>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} className="transition-colors duration-200">
              <button onClick={() => scrollTo("contact")} className="hover:text-cyan-500 dark:hover:text-cyan-400">{t("navbar.contact")}</button>
            </motion.li>
          </ul>
        </div>

        {/* Desktop Action & Socials */}
        <div className="hidden md:flex gap-4 items-center text-lg">
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            href="https://github.com/vuduyviet1110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            href="https://www.facebook.com/profile.php?id=100013827735971"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            href="https://www.instagram.com/vitra.vu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </motion.a>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors duration-200 text-base"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
          </button>

          {/* Language selector */}
          <div className="flex bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-full p-0.5 text-xs font-bold gap-0.5">
            {langList.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  i18n.language === lang.code
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all duration-200"
            href="https://drive.google.com/file/d/1_jnwW51PZK12SsbL3M58cgJW9-F8D2ac/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navbar.cv")}
          </motion.a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors text-sm"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
          </button>

          {/* Mobile Language Switcher */}
          <div className="flex bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 rounded-full p-0.5 text-[10px] font-bold gap-0.5">
            {langList.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`px-1.5 py-0.5 rounded-full transition-all duration-200 ${
                  i18n.language === lang.code
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl p-1 hover:text-cyan-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] left-0 right-0 mt-2 p-6 glass rounded-2xl shadow-2xl flex flex-col gap-6 md:hidden border border-slate-800/80 z-40 mx-4"
          >
            <ul className="flex flex-col gap-4 text-base font-semibold">
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="w-full text-left py-2 hover:text-cyan-500 border-b border-slate-200 dark:border-slate-800/60 pb-2 block"
                >
                  {t("navbar.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("experience")}
                  className="w-full text-left py-2 hover:text-cyan-500 border-b border-slate-200 dark:border-slate-800/60 pb-2 block"
                >
                  {t("navbar.experience")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("technology")}
                  className="w-full text-left py-2 hover:text-cyan-500 border-b border-slate-200 dark:border-slate-800/60 pb-2 block"
                >
                  {t("navbar.technologies")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("projects")}
                  className="w-full text-left py-2 hover:text-cyan-500 border-b border-slate-200 dark:border-slate-800/60 pb-2 block"
                >
                  {t("navbar.projects")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full text-left py-2 hover:text-cyan-500 border-b border-slate-200 dark:border-slate-800/60 pb-2 block"
                >
                  {t("navbar.contact")}
                </button>
              </li>
            </ul>

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex gap-4 text-xl">
                <a
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  href="https://github.com/vuduyviet1110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  href="https://www.facebook.com/profile.php?id=100013827735971"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  href="https://www.instagram.com/vitra.vu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>

              <a
                className="text-xs font-semibold px-4 py-2 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all duration-200"
                href="https://drive.google.com/file/d/1_jnwW51PZK12SsbL3M58cgJW9-F8D2ac/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("navbar.cv")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
