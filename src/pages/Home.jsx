import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  GraduationCap,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const titles = ["Humoyun Mirzo", "Front-End Developer", "Student"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (

    <>
    <Helmet>
        <title>Humoyun Mirzo | Frontend Developer</title>
        <meta
          name="description"
          content="Humoyun Mirzo - Frontend Developer. Modern, minimal and high-performance web interfaces."
        />
      </Helmet>
    <section className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] relative">
      <h1 className="hidden">Humoyun Mirzo Abdurasuljonov</h1>
      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4f8cff]/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#2c3e63]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c3e63] text-white text-[11px] font-semibold uppercase tracking-widest mb-8 shadow-lg"
          >
            <Sparkles size={14} className="text-[#4f8cff]" />
            Creative Developer
          </motion.div>

          {/* Dynamic Title */}
          <div className="relative h-[140px] sm:h-[170px] md:h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titles[index]}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-black text-[#2c3e63] leading-[0.95] tracking-tight"
              >
                {titles[index] === "Humoyun Mirzo" ? (
                  <>
                    Humoyun <br />
                    <span className="text-[#4f8cff] italic font-light">
                      Mirzo.
                    </span>
                  </>
                ) : (
                  <span className="text-[#1f2937]">
                    {titles[index]}
                  </span>
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-[#2c3e63]/70 text-lg md:text-xl mt-6 mb-10 max-w-xl leading-relaxed font-medium">
            Murakkab interfeyslarni raqamli san'at darajasiga olib chiqaman.
            <span className="text-[#1f2937] font-bold border-b-2 border-[#4f8cff] ml-1">
              IT-Universe
            </span>{" "}
            akademiyasida mentor.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 items-center">
            <Link
              to="/projects"
              className="bg-[#1f2937] text-white px-10 py-4 rounded-2xl font-semibold text-sm uppercase tracking-wider hover:bg-[#2c3e63] transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Loyihalar
              <ArrowRight
                size={18}
                className="text-[#4f8cff] group-hover:translate-x-2 transition"
              />
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/devmirzo"
                className="p-4 text-[#2c3e63]/40 hover:text-[#4f8cff] hover:bg-white rounded-2xl shadow-sm border border-[#2c3e63]/5 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/devmirzo/"
                className="p-4 text-[#2c3e63]/40 hover:text-[#4f8cff] hover:bg-white rounded-2xl shadow-sm border border-[#2c3e63]/5 transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[440px] aspect-[4/5] group">

            {/* Decorative Layer */}
            <div className="absolute inset-0 bg-[#2c3e63] rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-700 shadow-2xl shadow-[#2c3e63]/30" />

            {/* Image */}
            <div className="absolute inset-0 bg-[#1f2937] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/my-picture.png"
                alt="Humoyun Mirzo"
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Skill Card */}
            <motion.div
              animate={{ y: [20, -10, 20] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-10 top-[18%] bg-white p-4 rounded-2xl shadow-xl border border-[#4f8cff]/20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#4f8cff] rounded-xl text-white shadow-md">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#2c3e63]/50 font-bold">
                    Asosiy mahorat
                  </p>
                  <p className="text-sm font-bold text-[#1f2937]">
                    React & Next.js
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Academic Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -left-12 bottom-16 bg-[#2c3e63] p-5 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-[#4f8cff]" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Akademik
                  </p>
                  <p className="text-sm font-bold text-white">
                    FDTU Engineer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 right-8 bg-[#4f8cff] text-[#1f2937] px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-wide shadow-lg">
              2+ Yillik Tajriba
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}