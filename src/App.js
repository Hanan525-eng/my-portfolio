import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import {
  CV_FILE_PATH,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGES,
  SOCIAL_LINKS,
  PROJECTS,
  INTRO_DURATION,
} from "./constants";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineFileDownload,
  MdOutlineWhatsapp,
  MdOutlineLink,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  RiFileList2Line,
  RiContactsLine,
  RiCodeSSlashLine,
  RiContactsBookLine,
} from "react-icons/ri";

const getSampleProjects = () => PROJECTS;

const mobileNavLinks = (t, CV_FILE_PATH) => [
  { href: "#contact", label: t.nav.contact, icon: <RiContactsBookLine /> },
  {
    href: CV_FILE_PATH,
    label: t.nav.cv,
    icon: <RiFileList2Line />,
    download: true,
  },
  { href: "#projects", label: t.nav.projects, icon: <RiCodeSSlashLine /> },
  { href: "#apps", label: t.nav.apps, icon: <RiCodeSSlashLine /> },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, textDirection } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const whatsappMessage = WHATSAPP_MESSAGES[language];

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300"
      dir={textDirection}
      lang={language}
    >
      {/* أنيميشن البداية (باقي كما هو) */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-200 flex items-center justify-center mb-6 shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-4xl font-bold text-purple-900">
                  {language === "ar" ? "ح" : "H"}
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold text-white mb-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {language === "ar" ? "حنان" : "Hanan"}
              </motion.h1>
              <motion.p
                className={`text-xl text-purple-200 ${
                  textDirection === "rtl" ? "rtl" : "ltr"
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {language === "ar"
                  ? "مصممة ومطورة واجهات — UX · UI · Frontend"
                  : "UX/UI Designer & Frontend Developer — UI · UX · Frontend"}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="rounded-xl px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold shadow-lg">
            {language === "ar" ? "حنان" : "Hanan"}
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="hover:text-purple-600 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a href="#apps" className="hover:text-purple-600 transition-colors">
              {t.nav.apps}
            </a>
            <a href="#cv" className="hover:text-purple-600 transition-colors">
              {t.nav.cv}
            </a>
            <a
              href="#contact"
              className="hover:text-purple-600 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg border border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-sm font-medium"
            aria-label={
              language === "ar" ? "Switch to English" : "التبديل للعربية"
            }
          >
            {language === "ar" ? "EN" : "عربي"}
          </motion.button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={t.header.toggleTheme}
          >
            {theme === "dark" ? (
              <MdLightMode className="text-xl text-yellow-400" />
            ) : (
              <MdDarkMode className="text-xl" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-3 md:hidden rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <MdClose className="text-xl" />
            ) : (
              <MdMenu className="text-xl" />
            )}
          </button>
          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className=" hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg"
          >
            {t.header.contactButton}
          </a>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{
              opacity: 0,
              x: textDirection === "rtl" ? "100%" : "-100%",
            }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: textDirection === "rtl" ? "100%" : "-100%" }}
            transition={{ duration: 0.3 }}
            className={` fixed inset-0 z-40 md:hidden h-full w-full bg-white dark:bg-gray-900/95 backdrop-blur-sm p-6 pt-24 space-y-4 shadow-2xl overflow-y-auto ${
              textDirection === "rtl" ? "text-right" : "text-left"
            }`}
          >
            {mobileNavLinks(t, CV_FILE_PATH).map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                download={link.download ? "HananAwad_CV.pdf" : undefined}
                target={link.download ? "_blank" : "_self"}
                rel={link.download ? "noreferrer" : undefined}
                className="flex items-center gap-4 text-xl font-medium p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors border border-transparent hover:border-purple-400 dark:hover:border-purple-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-purple-600 dark:text-purple-400 text-2xl">
                  {link.icon}
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div
              className={textDirection === "rtl" ? "text-right" : "text-left"}
            >
              <h2
                className={`text-3xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ${
                  textDirection === "rtl" ? "rtl" : "ltr"
                }`}
              >
                {t.hero.title}
              </h2>
              <p
                className={`text-xl sm:text-center text-gray-600 dark:text-gray-300 mb-8 leading-relaxed ${
                  textDirection === "rtl" ? "rtl" : "ltr"
                }`}
              >
                {t.hero.description}
              </p>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-black/60 dark:via-purple-900/20 dark:to-black/60 border border-purple-200 dark:border-purple-700 h-80 flex items-center justify-center shadow-2xl"
              >
                <div className="text-center">
                  <img
                    src="/unnamed.png"
                    alt={t.hero.interactiveDemo}
                    className="rounded-full w-40 h-40 object-cover justify-center mb-4 mx-auto bg-gradient-to-br from-purple-400 to-purple-600"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {t.hero.interactiveDemo}
                  </h3>
                  <p
                    className={`text-purple-700 dark:text-purple-300 text-sm text-center ${
                      textDirection === "rtl" ? "rtl" : "ltr"
                    }`}
                  >
                    {t.hero.demoDescription}
                  </p>
                </div>
              </motion.div>

              <div
                className={`flex gap-4 mt-8  ${
                  textDirection === "rtl" ? "justify-end" : "justify-start"
                }`}
              >
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                >
                  {t.hero.exploreButton}
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg"
                >
                  {t.hero.contactButton}
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        {/* UX/UI Design Projects Section */}
        <section id="projects" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent ${
              textDirection === "rtl" ? "rtl" : "ltr"
            }`}
          >
            {t.projects.title}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getSampleProjects()
              .filter((p) => p.type !== "Frontend")
              .map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] sm:min-h-0"
                >
                  <div className="h-48 flex items-end p-6 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
                    <div
                      className={
                        textDirection === "rtl" ? "text-right" : "text-left"
                      }
                    >
                      <div className="text-sm font-medium text-purple-100 mb-2">
                        {project.type}
                      </div>
                      <h4
                        className={`text-xl font-bold text-white ${
                          textDirection === "rtl" ? "rtl" : "ltr"
                        }`}
                      >
                        {t.sampleProjects[`project${project.id}`]?.title ||
                          t.sampleProjects.project1.title}
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`p-6 ${
                      textDirection === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    <p
                      className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}
                    >
                      {t.sampleProjects[`project${project.id}`]?.desc ||
                        t.sampleProjects.project1.desc}
                    </p>

                    {/* Action Buttons */}
                    <div
                      className={`flex gap-3 mb-4 ${
                        textDirection === "rtl"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                        >
                          {t.projects.liveDemo}
                        </a>
                      )}
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        textDirection === "rtl"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </section>

        {/* Frontend Applications Section */}
        <section id="apps" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent ${
              textDirection === "rtl" ? "rtl" : "ltr"
            }`}
          >
            {t.apps.title}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getSampleProjects()
              .filter((p) => p.type === "Frontend")
              .map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] sm:min-h-0"
                >
                  <div className="h-48 flex items-center justify-center p-6 bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500">
                    <div
                      className={
                        textDirection === "rtl" ? "text-right" : "text-left"
                      }
                    >
                      <div className="text-sm text-purple-900 font-medium mb-2">
                        {project.type}
                      </div>
                      <h4 className="text-xl font-bold text-purple-900">
                        {t.sampleProjects[`project${project.id}`]?.title ||
                          t.sampleProjects.project3.title}
                      </h4>
                    </div>
                  </div>
                  <div
                    className={`p-6 ${
                      textDirection === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    <p
                      className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}
                    >
                      {t.sampleProjects[`project${project.id}`]?.desc ||
                        t.sampleProjects.project3.desc}
                    </p>
                    {/* Action Buttons */}
                    <div
                      className={`flex gap-3 mb-4 ${
                        textDirection === "rtl"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-all"
                        >
                          {t.apps.liveDemo}
                        </a>
                      )}

                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          {t.apps.viewProject}
                        </a>
                      )}

                      {!project.link && !project.code && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {language === "ar" ? "قريبًا" : "Coming soon"}
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        textDirection === "rtl"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </section>

        {/* CV Section */}

        <section id="cv" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent ${
              textDirection === "rtl" ? "rtl" : "ltr"
            }`}
          >
            {t.cv.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-gray-200 dark:border-gray-700 p-8 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 shadow-xl"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <RiFileList2Line className="text-4xl text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{t.cv.uploadTitle}</h4>
              <p
                className={`text-gray-600 dark:text-gray-300 text-lg ${
                  textDirection === "rtl" ? "rtl" : "ltr"
                }`}
              >
                {t.cv.uploadDescription}{" "}
              </p>
            </div>

            <div className="text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CV_FILE_PATH}
                target="_blank"
                download="HananAwad_UXUI_CV"
                rel="noreferrer"
                className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl font-bold shadow-2xl hover:from-purple-700 hover:to-purple-600 transition-all transform hover:shadow-3xl"
              >
                <MdOutlineFileDownload className="text-3xl" />
                <span className={textDirection === "rtl" ? "rtl" : "ltr"}>
                  {t.cv.downloadButton}
                </span>
                <RiFileList2Line className="text-2xl" />{" "}
              </motion.a>

              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                {language === "ar"
                  ? "تحميل مباشر - صيغة PDF"
                  : "Direct download - PDF format"}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-center ${
              textDirection === "rtl" ? "rtl" : "ltr"
            }`}
          >
            {t.contact.title}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 p-4 bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 shadow-xl min-h-[420px] sm:min-h-0"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 mx-auto">
                  <MdOutlineWhatsapp className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {t.contact.whatsappTitle}
                </h4>
                <p
                  className={`text-gray-600 dark:text-gray-300 text-sm ${
                    textDirection === "rtl" ? "rtl" : "ltr"
                  }`}
                >
                  {t.contact.whatsappDescription}
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-center px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-sm sm:text-base text-white hover:from-green-600 hover:to-green-700 transition-all shadow-lg font-medium"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.contact.whatsappButton}
                </motion.a>

                <div className="mt-6">
                  <p
                    className={`text-sm text-gray-600 dark:text-gray-300 mb-3 ${
                      textDirection === "rtl" ? "rtl" : "ltr"
                    }`}
                  >
                    {t.contact.customMessage}
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={t.contact.customMessagePlaceholder}
                      className={`flex-1 rounded-lg p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        textDirection === "rtl" ? "text-right" : "text-left"
                      }`}
                      id="customMessage"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
                      onClick={() => {
                        const messageInput =
                          document.getElementById("customMessage");
                        const message = messageInput?.value || whatsappMessage;
                        window.open(
                          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            message
                          )}`
                        );
                      }}
                    >
                      <RiContactsLine className="text-xl" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 p-8 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 shadow-xl min-h-[420px] sm:min-h-0"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <MdOutlineLink className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {t.contact.linksTitle}
                </h4>
                <p
                  className={`text-gray-600 dark:text-gray-300 text-sm ${
                    textDirection === "rtl" ? "rtl" : "ltr"
                  }`}
                >
                  {t.contact.linksDescription}
                </p>
              </div>

              <div className="space-y-4">
                {/* Behance Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
                  href={SOCIAL_LINKS.behance}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBehance className="text-2xl" />
                  <div
                    className={
                      textDirection === "rtl" ? "text-right" : "text-left"
                    }
                  >
                    <div className="font-bold">Behance</div>
                    <div
                      className={`text-sm text-orange-200 ${
                        textDirection === "rtl" ? "rtl" : "ltr"
                      }`}
                    >
                      {t.contact.behanceDesc}
                    </div>
                  </div>
                </motion.a>

                {/* GitHub Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-black transition-all shadow-lg"
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-2xl" />
                  <div
                    className={
                      textDirection === "rtl" ? "text-right" : "text-left"
                    }
                  >
                    <div className="font-bold">GitHub</div>
                    <div
                      className={`text-sm text-gray-300 ${
                        textDirection === "rtl" ? "rtl" : "ltr"
                      }`}
                    >
                      {t.contact.githubDesc}
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-blue-300 dark:border-blue-800 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="text-2xl" />
                  <div
                    className={
                      textDirection === "rtl" ? "text-right" : "text-left"
                    }
                  >
                    <div className="font-bold">LinkedIn</div>
                    <div
                      className={`text-sm text-blue-200 ${
                        textDirection === "rtl" ? "rtl" : "ltr"
                      }`}
                    >
                      {t.contact.linkedinDesc}
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">
          <p>
            {language === "ar"
              ? "© 2025 بورتفوليو حنان. جميع الحقوق محفوظة."
              : "© 2025 Hanan Portfolio. All rights reserved."}
          </p>
        </footer>
      </main>
    </div>
  );
}
