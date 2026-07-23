import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const getTranslatedLocation = (loc) => {
    if (loc === "Ha Noi, Viet Nam") {
      return i18n.language === "vi" ? "Hà Nội, Việt Nam" : "Ha Noi, Viet Nam";
    }
    return loc;
  };

  return (
    <div ref={ref} className="pb-16 text-slate-700 dark:text-slate-300 mb-10 mx-auto max-w-5xl px-4" id="contact-section">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent"
      >
        {t("contact.title")}
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5"
        >
          <div className="glass rounded-2xl p-8 border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">{t("contact.sendMessage")}</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(t("contact.successMsg")); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder={t("contact.firstName")}
                  className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition duration-200 text-sm placeholder:text-slate-450 dark:placeholder:text-slate-500"
                />
                <input
                  required
                  type="text"
                  placeholder={t("contact.lastName")}
                  className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition duration-200 text-sm placeholder:text-slate-455 dark:placeholder:text-slate-500"
                />
              </div>
              <input
                required
                type="email"
                placeholder={t("contact.email")}
                className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition duration-200 text-sm placeholder:text-slate-455 dark:placeholder:text-slate-500"
              />
              <input
                type="tel"
                placeholder={t("contact.phone")}
                className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition duration-200 text-sm placeholder:text-slate-455 dark:placeholder:text-slate-500"
              />
              <textarea
                required
                rows="4"
                placeholder={t("contact.message")}
                className="bg-slate-100/60 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition duration-200 text-sm placeholder:text-slate-455 dark:placeholder:text-slate-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 text-slate-950 font-bold py-3 hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25"
              >
                {t("contact.sendBtn")}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 flex flex-col justify-between"
        >
          <div className="glass rounded-2xl p-8 border border-slate-200 dark:border-slate-800/80 flex-grow flex flex-col justify-between shadow-md dark:shadow-none">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-8">{t("contact.info")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{t("contact.location")}</div>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{getTranslatedLocation(CONTACT.address)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Email</div>
                    <a href={`mailto:${CONTACT.email}`} className="text-slate-800 dark:text-slate-200 font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Phone</div>
                    <a href={`tel:${CONTACT.phoneNo}`} className="text-slate-800 dark:text-slate-200 font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      {CONTACT.phoneNo}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/60">
              <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4">{t("contact.connect")}</h4>
              <div className="flex gap-4 text-2xl">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-200"
                  href="https://github.com/vuduyviet1110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-200"
                  href="https://www.facebook.com/profile.php?id=100013827735971"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-200"
                  href="https://www.instagram.com/vitra.vu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
