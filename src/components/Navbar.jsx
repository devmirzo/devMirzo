import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/about" },
    { name: t("navbar.projects"), path: "/projects" },
    { name: t("navbar.blog"), path: "/blog" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled
          ? "py-4 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(31,41,55,0.08)] border-b border-[#2c3e63]/10 dark:border-white/10"
          : "py-8 bg-transparent"      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative group flex items-center gap-3">
          <motion.div whileHover={{ rotate: -5, scale: 1.05 }} className="relative">
            <img
              src="/logo-bg.png"
              alt="logo"
              className={`w-[50px] md:w-[60px] object-contain transition-all duration-300 ${
                scrolled ? "brightness-100" : "brightness-110 drop-shadow-2xl dark:brightness-200"
              }`}
            />
            <div className="absolute -inset-1 bg-[#4f8cff]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black text-2xl text-[#2c3e63] dark:text-[#f8fafc] tracking-tight leading-none">
              Humoyun<span className="text-[#4f8cff]">.</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1f2937]/40 dark:text-[#f8fafc]/40 leading-none mt-1">
              Dev Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#4f8cff] ${
                    location.pathname === link.path
                      ? "text-[#4f8cff]"
                      : "text-[#2c3e63]/60 dark:text-[#f8fafc]/60"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-[#2c3e63]/10 dark:bg-[#f8fafc]/10 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 text-[#2c3e63] dark:text-[#f8fafc] hover:bg-[#4f8cff]/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Language Switcher */}
          <div className="flex bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 rounded-xl p-1 gap-1">
            {['uz', 'ru', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                  i18n.language === lng 
                    ? "bg-[#2c3e63] text-white dark:bg-[#4f8cff]" 
                    : "text-[#2c3e63]/40 dark:text-[#f8fafc]/40 hover:text-[#2c3e63] dark:hover:text-[#f8fafc]"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="group relative px-7 py-3 rounded-xl bg-[#2c3e63] dark:bg-[#4f8cff] text-white font-bold text-sm tracking-wide overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#4f8cff] dark:bg-[#2c3e63] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1f2937] dark:group-hover:text-white">
              {t("navbar.contact")} <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 text-[#2c3e63] dark:text-[#f8fafc]"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-[#2c3e63] dark:bg-[#4f8cff] text-white rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-[#f9f7ed] dark:bg-[#0f172a] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-[#2c3e63] dark:text-[#f8fafc]"
              >
                Humoyun<span className="text-[#4f8cff]">Mirzo.</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-4 bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 text-[#2c3e63] dark:text-[#f8fafc] rounded-2xl"
              >
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl sm:text-5xl font-black leading-none ${
                      location.pathname === link.path
                        ? "text-[#4f8cff]"
                        : "text-[#2c3e63] dark:text-[#f8fafc]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto space-y-8">
              {/* Mobile Language Switcher */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#2c3e63]/40 dark:text-[#f8fafc]/40">
                  {t("navbar.language")}:
                </span>
                <div className="flex bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 rounded-xl p-1 gap-1">
                  {['uz', 'ru', 'en'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                        i18n.language === lng 
                          ? "bg-[#2c3e63] text-white dark:bg-[#4f8cff]" 
                          : "text-[#2c3e63]/40 dark:text-[#f8fafc]/40"
                      }`}
                    >
                      {lng}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2c3e63] dark:bg-[#4f8cff] text-[#fcfaee] py-5 rounded-[2rem] font-black text-xl sm:text-2xl shadow-2xl shadow-[#2c3e63]/30 hover:bg-[#4f8cff] dark:hover:bg-white dark:hover:text-[#0f172a] transition-colors"
                >
                  {t("navbar.contact")} <Sparkles size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}