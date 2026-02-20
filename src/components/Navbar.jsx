import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Asosiy", path: "/" },
    { name: "Haqida", path: "/about" },
    { name: "Loyihalar", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Aloqa", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled
          ? "py-4 bg-[#fcfaee]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(31,41,55,0.08)] border-b border-[#2c3e63]/10"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative group flex items-center gap-3">
          <motion.div whileHover={{ rotate: -5, scale: 1.05 }} className="relative">
            <img
              src="/logo-bg.png"
              alt="logo"
              className={`w-[50px] md:w-[60px] object-contain transition-all duration-300 ${
                scrolled ? "brightness-100" : "brightness-110 drop-shadow-2xl"
              }`}
            />
            <div className="absolute -inset-1 bg-[#4f8cff]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black text-2xl text-[#2c3e63] tracking-tight leading-none">
              Humoyun<span className="text-[#4f8cff]">.</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1f2937]/40 leading-none mt-1">
              Dev Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-[#1f2937]/5 p-1.5 rounded-2xl border border-[#2c3e63]/5 backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-5 py-2 rounded-xl text-sm font-black transition-all duration-300 tracking-tight ${
                location.pathname === link.path
                  ? "text-[#fcfaee]"
                  : "text-[#2c3e63]/60 hover:text-[#2c3e63] hover:bg-[#2c3e63]/5"
              }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-[#2c3e63] rounded-xl -z-10 shadow-lg shadow-[#2c3e63]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative flex items-center gap-2 bg-[#2c3e63] text-[#fcfaee] px-7 py-3 rounded-2xl font-black text-sm transition-all shadow-[0_15px_30px_-10px_rgba(44,62,99,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(44,62,99,0.6)] active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#4f8cff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1f2937]">
              Let's Talk <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 text-[#2c3e63] bg-[#2c3e63]/5 rounded-2xl border border-[#2c3e63]/10 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#fcfaee] border-b border-[#2c3e63]/10 shadow-2xl md:hidden z-50"
          >
            <div className="p-10 space-y-4 flex flex-col">
              {links.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-black tracking-tighter transition-colors ${
                      location.pathname === link.path
                        ? "text-[#2c3e63]"
                        : "text-[#2c3e63]/20 hover:text-[#2c3e63]/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, pt: 20 }}
                animate={{ opacity: 1, pt: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2c3e63] text-[#fcfaee] py-5 rounded-[2rem] font-black text-2xl mt-8 shadow-2xl shadow-[#2c3e63]/30 hover:bg-[#4f8cff] transition-colors"
                >
                  Let's Talk <Sparkles size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}