import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  Code2,
  Heart,
  Languages,
  Sparkles,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const skills = [
    { name: t("about.skills_list.frontend"), level: "85%", icon: <Code2 size={18} /> },
    { name: t("about.skills_list.mentoring"), level: "90%", icon: <Heart size={18} /> },
    { name: t("about.skills_list.japanese"), level: "70%", icon: <Languages size={18} /> },
  ];

  return (
    <>
      <Helmet>
        <title>Haqida | Abdurasuljonov Humoyun Mirzo</title>
        <meta name="description" content="Abdurasuljonov Humoyun Mirzo haqida ma'lumot. Muhandislik talabasi va IT-mentor. Tajriba va texnik mahoratlar." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 sm:px-6 bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500">
        <h1 className="hidden">Abdurasuljonov Humoyun Mirzo</h1>
        <div className="max-w-7xl mx-auto">

        {/* ================= INTRO SECTION ================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 text-[#2c3e63] dark:text-[#f8fafc] text-[11px] font-bold uppercase tracking-[0.25em] border border-[#2c3e63]/10 dark:border-white/10">
                <Sparkles size={14} className="text-[#4f8cff]" />
                {t("about.badge")}
              </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] dark:text-[#f8fafc] leading-[1] tracking-tight">
                {t("about.title").split(". ").length > 1 ? (
                  <>
                    {t("about.title").split(". ")[0]}.{" "}
                    <span className="text-[#4f8cff] font-light italic">
                      {t("about.title").split(". ")[1]}
                    </span>
                  </>
                ) : t("about.title")}
              </h1>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-[#1e293b]/80 dark:text-[#f8fafc]/80 leading-relaxed max-w-2xl font-medium">
              <Trans
                i18nKey="about.intro"
                components={[
                  <br key="br" />,
                  <span
                    key="span"
                    className="font-black text-[#1e293b] dark:text-[#f8fafc] underline decoration-[#4f8cff] decoration-4 underline-offset-4"
                  />,
                ]}
              />
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 pt-6">
              <StatItem value="4.0" label={t("about.stats.gpa")} />
              <StatItem value="N3" label={t("about.stats.jlpt")} />
              <div className="col-span-2 sm:col-span-1">
                <StatItem value="180+" label={t("about.stats.students")} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[8px] border-white dark:border-[#1e293b] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] group transition-all duration-500 hover:scale-[1.02]">
              <img
                src="/my.png"
                alt="Humoyun Mirzo"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#2c3e63]/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="absolute inset-0 bg-[#4f8cff] rounded-[3rem] -rotate-3 -z-10 opacity-30 blur-3xl" />
          </motion.div>
        </div>

        {/* ================= EXPERIENCE & SKILLS ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* EXPERIENCE */}
          <div className="space-y-14">
            <h3 className="text-3xl md:text-4xl font-black text-[#2c3e63] dark:text-[#f8fafc] flex items-center gap-4">
              <div className="p-4 bg-[#2c3e63] dark:bg-[#4f8cff] text-white dark:text-[#0f172a] rounded-2xl shadow-md">
                <Briefcase size={26} />
              </div>
              {t("about.experience_title")}
            </h3>

            <div className="space-y-10 border-l-2 border-[#2c3e63]/10 dark:border-white/10 pl-8 ml-4">
              <TimelineItem
                year={t("about.timeline.fdtu.year")}
                title={t("about.timeline.fdtu.title")}
                subtitle={t("about.timeline.fdtu.subtitle")}
                desc={t("about.timeline.fdtu.desc")}
              />

              <TimelineItem
                year={t("about.timeline.mentor.year")}
                title={t("about.timeline.mentor.title")}
                subtitle={t("about.timeline.mentor.subtitle")}
                desc={t("about.timeline.mentor.desc")}
              />

              <TimelineItem
                year={t("about.timeline.jlpt.year")}
                title={t("about.timeline.jlpt.title")}
                subtitle={t("about.timeline.jlpt.subtitle")}
                desc={t("about.timeline.jlpt.desc")}
              />
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-14">
            <h3 className="text-3xl md:text-4xl font-black text-[#2c3e63] dark:text-[#f8fafc] flex items-center gap-4">
              <div className="p-4 bg-[#4f8cff] text-white rounded-2xl shadow-md">
                <Star size={26} />
              </div>
              {t("about.technical_skills")}
            </h3>

            <div className="bg-white dark:bg-[#1e293b] p-10 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-[#2c3e63]/5 dark:border-white/5 space-y-8 transition-colors">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 font-bold text-[#2c3e63] dark:text-[#f8fafc]">
                      <span className="p-2 bg-[#f9f7ed] dark:bg-[#0f172a] text-[#4f8cff] rounded-xl border border-[#2c3e63]/5 dark:border-white/5">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </div>
                    <span className="text-xs font-semibold text-[#1e293b]/50 dark:text-[#f8fafc]/50 uppercase tracking-widest">
                      {skill.level}
                    </span>
                  </div>

                  <div className="h-2.5 w-full bg-[#f3f1e6] dark:bg-[#0f172a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.2 }}
                      className="h-full bg-[#2c3e63] dark:bg-[#4f8cff] rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}

              {/* Stack */}
              <div className="pt-6 border-t border-[#2c3e63]/10 dark:border-white/10">
                <p className="text-xs font-semibold text-[#2c3e63]/40 dark:text-[#f8fafc]/40 uppercase tracking-widest mb-5 text-center">
                  {t("about.tech_stack")}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Node.js",
                    "Firebase",
                    "Git",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[#f9f7ed] dark:bg-[#0f172a] text-[#2c3e63] dark:text-[#f8fafc] text-xs font-semibold rounded-xl tracking-wide border border-[#2c3e63]/10 dark:border-white/10 hover:bg-[#2c3e63] dark:hover:bg-[#4f8cff] hover:text-white dark:hover:text-[#0f172a] hover:-translate-y-1 hover:shadow-md transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function StatItem({ value, label }) {
  return (
    <div className="text-center px-6 py-4 rounded-2xl bg-white/70 dark:bg-[#1e293b]/70 backdrop-blur border border-[#2c3e63]/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
      <h4 className="text-3xl md:text-4xl font-black text-[#2c3e63] dark:text-[#f8fafc] hover:text-[#4f8cff] transition-colors">
        {value}
      </h4>
      <p className="text-[11px] font-semibold text-[#2c3e63]/40 dark:text-[#f8fafc]/40 uppercase tracking-widest mt-2">
        {label}
      </p>
    </div>
  );
}

function TimelineItem({ year, title, subtitle, desc }) {
  return (
    <div className="relative group">
      <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] border-2 border-[#2c3e63] dark:border-[#4f8cff] transition-all group-hover:border-[#4f8cff]" />

      <span className="inline-block px-3 py-1 bg-[#1e293b] dark:bg-[#4f8cff] text-[#4f8cff] dark:text-[#0f172a] font-bold text-[10px] uppercase tracking-widest rounded-md mb-2">
        {year}
      </span>

      <h4 className="text-xl md:text-2xl font-black text-[#2c3e63] dark:text-[#f8fafc]">
        {title}
      </h4>

      <p className="text-sm font-semibold text-[#4f8cff] italic opacity-80">
        {subtitle}
      </p>

      <p className="text-[#1e293b]/70 dark:text-[#f8fafc]/70 mt-3 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}