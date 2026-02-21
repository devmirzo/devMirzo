import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const contactMethods = [
    {
      icon: <Send size={22} />,
      label: "Telegram",
      value: "@devmirzo",
      link: "https://t.me/devmirzo",
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "devmirzoo@gmail.com",
      link: "mailto:devmirzoo@gmail.com",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "Humoyun Mirzo",
      link: "https://www.linkedin.com/in/devmirzo/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bog'lanish | Abdurasuljonov Humoyun Mirzo</title>
        <meta name="description" content="Abdurasuljonov Humoyun Mirzo bilan bog'lanish. Loyiha takliflari yoki savollar uchun xabar yuboring." />
      </Helmet>
      <div className="pt-28 md:pt-36 pb-24 px-5 bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500">
        <h1 className="hidden">Abdurasuljonov Humoyun Mirzo</h1><div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c3e63] dark:bg-[#4f8cff] text-white dark:text-[#0f172a] text-[11px] font-semibold uppercase tracking-widest shadow-lg"
              >
                <Sparkles size={14} className="text-[#4f8cff] dark:text-[#0f172a]" />
                {t("contact.badge")}
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] dark:text-[#f8fafc] leading-tight">
                  {t("contact.title").split(". ").length > 1 ? (
                    <>
                      {t("contact.title").split(". ")[0]}.{" "}
                      <span className="text-[#4f8cff] italic font-light">
                        {t("contact.title").split(". ")[1]}
                      </span>
                    </>
                  ) : t("contact.title")}
              </h1>

              <p className="text-lg md:text-xl text-[#2c3e63]/70 dark:text-[#f8fafc]/70 leading-relaxed max-w-md font-medium">
                {t("contact.intro")}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-5">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between p-6 bg-white dark:bg-[#1e293b] rounded-2xl border border-[#2c3e63]/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-[#f3f1e6] dark:bg-[#0f172a] text-[#2c3e63] dark:text-[#f8fafc] rounded-xl group-hover:text-[#4f8cff] transition">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-[#2c3e63]/50 dark:text-[#f8fafc]/50 uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-lg font-bold text-[#2c3e63] dark:text-[#f8fafc] group-hover:text-[#4f8cff] transition">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-[#2c3e63]/30 dark:text-[#f8fafc]/30 group-hover:text-[#4f8cff] transition group-hover:rotate-12"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#1e293b] p-8 md:p-14 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-[#2c3e63]/5 dark:border-white/5 relative overflow-hidden group transition-colors">
              
              {/* Decorative Icon */}
              <div className="absolute -top-20 -right-20 opacity-[0.04] pointer-events-none text-[#2c3e63] dark:text-[#f8fafc] transition-transform group-hover:rotate-6 duration-700">
                <MessageSquare size={350} />
              </div>

              <form
                className="space-y-8 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label={t("contact.form.name")}
                    placeholder={t("contact.form.name_placeholder")}
                    type="text"
                  />
                  <InputField
                    label={t("contact.form.email")}
                    placeholder={t("contact.form.email_placeholder")}
                    type="email"
                  />
                </div>

                <SelectField t={t} />

                <TextAreaField t={t} />

                <button className="w-full py-5 bg-[#2c3e63] dark:bg-[#4f8cff] text-white dark:text-[#0f172a] font-semibold rounded-2xl hover:bg-[#1f2937] dark:hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 text-lg uppercase tracking-wider relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-[#4f8cff]/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">{t("contact.form.button")}</span>
                  <Send
                    size={20}
                    className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition"
                  />
                </button>
              </form>
            </div>

            {/* Footer Info */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#2c3e63]/50 dark:text-[#f8fafc]/50 font-semibold text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#4f8cff]" />
                {t("contact.location")}
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-[#4f8cff]/40" />

              <motion.a
                href="https://github.com/devmirzo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1f2937] dark:hover:text-[#f8fafc] transition"
              >
                <Github size={18} className="text-[#4f8cff]" />
                devmirzo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}

/* Reusable Fields */

function InputField({ label, placeholder, type }) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 dark:text-[#f8fafc]/60 uppercase tracking-wider ml-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-xl bg-[#f9f7ed] dark:bg-[#0f172a] ring-2 ring-[#2c3e63]/5 dark:ring-white/5 focus:ring-4 focus:ring-[#4f8cff]/40 dark:focus:ring-[#4f8cff]/40 outline-none transition font-medium text-[#1f2937] dark:text-[#f8fafc] placeholder:text-[#2c3e63]/30 dark:placeholder:text-[#f8fafc]/30"
      />
    </div>
  );
}

function SelectField({ t }) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 dark:text-[#f8fafc]/60 uppercase tracking-wider ml-2">
        {t("contact.form.subject")}
      </label>
      <div className="relative">
        <select className="w-full px-6 py-4 rounded-xl bg-[#f9f7ed] dark:bg-[#0f172a] ring-2 ring-[#2c3e63]/5 dark:ring-white/5 focus:ring-4 focus:ring-[#4f8cff]/40 dark:focus:ring-[#4f8cff]/40 outline-none appearance-none cursor-pointer font-medium text-[#1f2937] dark:text-[#f8fafc]">
          <option className="dark:bg-[#0f172a]">{t("contact.form.subjects.project")}</option>
          <option className="dark:bg-[#0f172a]">{t("contact.form.subjects.mentoring")}</option>
          <option className="dark:bg-[#0f172a]">{t("contact.form.subjects.collaboration")}</option>
          <option className="dark:bg-[#0f172a]">{t("contact.form.subjects.other")}</option>
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2c3e63]/30 dark:text-[#f8fafc]/30 pointer-events-none">
          <ArrowUpRight size={18} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}

function TextAreaField({ t }) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 dark:text-[#f8fafc]/60 uppercase tracking-wider ml-2">
        {t("contact.form.message")}
      </label>
      <textarea
        rows="5"
        placeholder={t("contact.form.message_placeholder")}
        className="w-full px-6 py-4 rounded-2xl bg-[#f9f7ed] dark:bg-[#0f172a] ring-2 ring-[#2c3e63]/5 dark:ring-white/5 focus:ring-4 focus:ring-[#4f8cff]/40 dark:focus:ring-[#4f8cff]/40 outline-none resize-none font-medium text-[#1f2937] dark:text-[#f8fafc] placeholder:text-[#2c3e63]/30 dark:placeholder:text-[#f8fafc]/30"
      ></textarea>
    </div>
  );
}