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

export default function Contact() {
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
      <div className="pt-28 md:pt-36 pb-24 px-5 bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6]">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c3e63] text-white text-[11px] font-semibold uppercase tracking-widest shadow-lg"
              >
                <Sparkles size={14} className="text-[#4f8cff]" />
                Hamkorlikka tayyorman
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] leading-tight">
                Keling, birga <br />
                <span className="text-[#4f8cff] italic font-light">
                  yaratamiz.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#2c3e63]/70 leading-relaxed max-w-md font-medium">
                Yangi loyiha, mentoring yoki IT haqida suhbatlashish uchun xabar
                qoldiring. Men doimo yangi g'oyalar uchun ochiqman.
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
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-[#2c3e63]/5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-[#f3f1e6] text-[#2c3e63] rounded-xl group-hover:text-[#4f8cff] transition">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-[#2c3e63]/50 uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-lg font-bold text-[#2c3e63] group-hover:text-[#4f8cff] transition">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-[#2c3e63]/30 group-hover:text-[#4f8cff] transition group-hover:rotate-12"
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
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-[#2c3e63]/5 relative overflow-hidden group">
              
              {/* Decorative Icon */}
              <div className="absolute -top-20 -right-20 opacity-[0.04] pointer-events-none text-[#2c3e63] transition-transform group-hover:rotate-6 duration-700">
                <MessageSquare size={350} />
              </div>

              <form
                className="space-y-8 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="To'liq ismingiz"
                    placeholder="Ismingizni kiriting"
                    type="text"
                  />
                  <InputField
                    label="Email manzilingiz"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>

                <SelectField />

                <TextAreaField />

                <button className="w-full py-5 bg-[#2c3e63] text-white font-semibold rounded-2xl hover:bg-[#1f2937] transition-all shadow-xl flex items-center justify-center gap-3 text-lg uppercase tracking-wider relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-[#4f8cff]/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Xabarni yuborish</span>
                  <Send
                    size={20}
                    className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition"
                  />
                </button>
              </form>
            </div>

            {/* Footer Info */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#2c3e63]/50 font-semibold text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#4f8cff]" />
                Farg'ona, O'zbekiston
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-[#4f8cff]/40" />

              <motion.a
                href="https://github.com/devmirzo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1f2937] transition"
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
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 uppercase tracking-wider ml-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-xl bg-[#f9f7ed] ring-2 ring-[#2c3e63]/5 focus:ring-4 focus:ring-[#4f8cff]/40 outline-none transition font-medium text-[#1f2937] placeholder:text-[#2c3e63]/30"
      />
    </div>
  );
}

function SelectField() {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 uppercase tracking-wider ml-2">
        Mavzuni tanlang
      </label>
      <div className="relative">
        <select className="w-full px-6 py-4 rounded-xl bg-[#f9f7ed] ring-2 ring-[#2c3e63]/5 focus:ring-4 focus:ring-[#4f8cff]/40 outline-none appearance-none cursor-pointer font-medium text-[#1f2937]">
          <option>Loyiha buyurtmasi</option>
          <option>IT-Mentoring & Kurslar</option>
          <option>Hamkorlik taklifi</option>
          <option>Boshqa masalalar</option>
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2c3e63]/30 pointer-events-none">
          <ArrowUpRight size={18} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}

function TextAreaField() {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-semibold text-[#2c3e63]/60 uppercase tracking-wider ml-2">
        Sizning xabaringiz
      </label>
      <textarea
        rows="5"
        placeholder="Qanday yordam bera olaman?"
        className="w-full px-6 py-4 rounded-2xl bg-[#f9f7ed] ring-2 ring-[#2c3e63]/5 focus:ring-4 focus:ring-[#4f8cff]/40 outline-none resize-none font-medium text-[#1f2937] placeholder:text-[#2c3e63]/30"
      ></textarea>
    </div>
  );
}