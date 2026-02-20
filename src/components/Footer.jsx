import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const xMovement = useTransform(scrollYProgress, [0, 1], [120, -250]);

  const links = [
    { name: "Asosiy", path: "/" },
    { name: "Haqida", path: "/about" },
    { name: "Loyihalar", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Aloqa", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/devmirzo" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/devmirzo" },
    { icon: <Send size={20} />, href: "https://t.me/devmirzo" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer
      ref={containerRef}
      className="bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] pt-28 md:pt-36 pb-12 overflow-hidden relative border-t border-[#2c3e63]/10"
    >
      {/* Moving Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.025]">
        <motion.h2
          style={{ x: xMovement }}
          className="text-[18vw] font-black leading-none whitespace-nowrap uppercase tracking-tight text-[#2c3e63]"
        >
          Creative Developer Humoyun Mirzo
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3e63]/5 text-[#2c3e63] text-xs font-semibold uppercase tracking-widest mb-6 border border-[#2c3e63]/10">
              <Sparkles size={14} className="text-[#4f8cff]" />
              Loyiha haqida o'ylayapsizmi?
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] tracking-tight leading-[0.95]">
              Keling, birga <br />
              <span className="text-[#4f8cff] italic font-light">
                yaratamiz.
              </span>
            </h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#2c3e63] rounded-2xl flex items-center gap-4 text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#1f2937] transition-all shadow-xl hover:-translate-y-1"
            >
              Bog'lanish
              <ArrowUpRight
                size={20}
                className="text-[#4f8cff]"
              />
            </Link>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 border-b border-[#2c3e63]/10 pb-20">
          {/* BRAND */}
          <div className="md:col-span-5 space-y-8">
            <Link
              to="/"
              className="text-2xl font-black flex items-center gap-4 text-[#2c3e63] group"
            >
              <img src=".././public/logo-bg.png" className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#4f8cff] group-hover:rotate-6 transition ">
                
              </img>
              <div>
                <p className="leading-none">Humoyun Mirzo</p>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">
                  Software Engineer
                </span>
              </div>
            </Link>

            <p className="text-[#2c3e63]/70 text-base leading-relaxed max-w-sm">
              Murakkab texnologik yechimlarni oddiy va chiroyli dizayn bilan
              birlashtirib, foydalanuvchilar uchun qulay tajribalar yarataman.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#2c3e63] border border-[#2c3e63]/10 shadow-sm hover:bg-[#4f8cff] hover:text-white hover:border-[#4f8cff] transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* MENU */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold text-[#2c3e63]/30 uppercase tracking-[0.3em] mb-8">
              Menyu
            </p>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-lg font-semibold text-[#2c3e63] hover:text-[#4f8cff] transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#4f8cff] group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-4 space-y-8">
            <p className="text-xs font-bold text-[#2c3e63]/30 uppercase tracking-[0.3em]">
              Bog'lanish
            </p>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#4f8cff] font-bold mb-2">
                Email
              </p>
              <motion.a href="mailto:devmirzoo@gmail.com" className="text-xl font-bold text-[#2c3e63] hover:text-[#4f8cff] transition">
                devmirzoo@gmail.com
              </motion.a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#4f8cff] font-bold mb-2">
                Telegram
              </p>
              <motion.a href="https://t.me/devmirzo" className="text-xl font-bold text-[#2c3e63] hover:text-[#4f8cff] transition">
                @devmirzo
              </motion.a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-3 text-[#2c3e63]/50 font-medium">
            © {currentYear} Barcha huquqlar himoyalangan
            <span className="w-1.5 h-1.5 bg-[#4f8cff] rounded-full"></span>
            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={14}
                className="text-[#2c3e63] fill-[#2c3e63] hover:text-red-500 hover:fill-red-500 transition"
              />
              by Humoyun
            </span>
          </div>

          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <Link
                key={link}
                to="#"
                className="text-[11px] uppercase tracking-wider text-[#2c3e63]/40 hover:text-[#2c3e63] transition"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}