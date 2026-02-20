import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Rocket,
  Monitor,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Platform",
      category: "Web Application",
      desc: "IT-Universe o'quv markazi uchun maxsus ishlab chiqilgan, talabalar va darslarni boshqarish tizimi.",
      tech: ["React", "Node.js", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      icon: <Layers size={18} />,
    },
    {
      title: "JLPT Master App",
      category: "Mobile First UI",
      desc: "Yapon tili darajasini oshirish uchun interaktiv so'z yodlash va test topshirish platformasi.",
      tech: ["React Native", "Tailwind", "Zustand"],
      image:
        "https://images.unsplash.com/photo-1528181304800-2f1738b99546?w=800&q=80",
      icon: <Rocket size={18} />,
    },
    {
      title: "HMA Portfolio v4",
      category: "Personal Brand",
      desc: "Hozirgi ko'rib turgan portfoliongiz. Tailwind v4 va Framer Motion yordamida yaratilgan.",
      tech: ["Vite", "Tailwind v4", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: <Monitor size={18} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Loyihalar | Abdurasuljonov Humoyun Mirzo</title>
        <meta name="description" content="Abdurasuljonov Humoyun Mirzo tomonidan yaratilgan tanlangan loyihalar. Web ilovalar va raqamli yechimlar." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-24 px-6 bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] selection:bg-[#4f8cff] selection:text-white">
        <h1 className="hidden">Abdurasuljonov Humoyun Mirzo</h1>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3e63]/5 border border-[#2c3e63]/10 text-[#2c3e63] text-[11px] font-semibold uppercase tracking-[0.25em]">
              <Sparkles size={14} className="text-[#4f8cff]" />
              Portfoliom
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] leading-[0.95] tracking-tight">
              Tanlangan <br />
              <span className="text-[#4f8cff] italic font-light">
                Loyihalar.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#2c3e63]/60 max-w-md text-base md:text-lg font-medium leading-relaxed border-l-2 border-[#4f8cff] pl-6 py-2"
          >
            Har bir loyiha — bu yangi texnologik tajriba va foydalanuvchi muammosiga topilgan raqamli yechimdir.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              {/* IMAGE CARD */}
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden bg-[#1f2937] border-8 border-white shadow-[0_40px_80px_-20px_rgba(44,62,99,0.15)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_50px_100px_-20px_rgba(79,140,255,0.25)]">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[40%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 scale-105 group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* ACTION BUTTONS */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-500 translate-y-6 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="p-4 bg-[#4f8cff] rounded-2xl text-white hover:bg-white hover:text-[#2c3e63] transition shadow-xl"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white rounded-2xl text-[#2c3e63] hover:bg-[#4f8cff] hover:text-white transition shadow-xl"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>

                {/* FLOATING INFO */}
                <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 bg-[#4f8cff]/20 backdrop-blur rounded-lg text-[#4f8cff]">
                      {project.icon}
                    </span>
                    <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="text-2xl font-black">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-8 px-2 flex flex-col flex-1">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-black text-[#2c3e63]">
                    {project.title}
                  </h3>
                  <div className="h-[2px] flex-1 ml-4 bg-[#2c3e63]/10 group-hover:bg-[#4f8cff]/30 transition" />
                </div>

                <p className="text-[#2c3e63]/60 text-sm md:text-base leading-relaxed font-medium mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-[#2c3e63]/60 bg-white px-4 py-1.5 rounded-xl border border-[#2c3e63]/10 shadow-sm group-hover:border-[#4f8cff]/40 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-28 md:mt-40 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#2c3e63] to-[#1f2937] text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f8cff]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Barcha loyihalarim <br />
              <span className="text-[#4f8cff]">
                ochiq manbalidir.
              </span>
            </h2>

            <p className="text-white/70 text-base md:text-lg font-medium">
              Kod arxitekturasi va strukturasini o‘rganmoqchi bo‘lsangiz,
              GitHub profilimda barcha repositoriyalar mavjud.
            </p>

            <a
              href="https://github.com/devmirzo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#4f8cff] text-white rounded-2xl font-semibold hover:bg-white hover:text-[#2c3e63] transition shadow-xl hover:-translate-y-1"
            >
              <Github size={22} />
              Github Profilim
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}