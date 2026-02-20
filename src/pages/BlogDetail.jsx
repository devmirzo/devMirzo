import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageCircle,
  Sparkles,
  Quote,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "React v19: Nimalar yangi?",
      category: "Dasturlash",
      date: "Feb 12, 2026",
      excerpt:
        "Yaqinda chiqqan React 19 versiyasidagi eng muhim o'zgarishlar va ularning amaliy tahlili bilan tanishing.",
      content: `React 19 bizga ko'plab yangi imkoniyatlarni taqdim etmoqda. Masalan, yangi 'use' hooki, server komponentlari bilan ishlashning yanada osonlashgani va avtomatik optimizatsiya mexanizmlari.

Bu versiyaning asosiy maqsadi dasturchilarni ortiqcha 'useMemo' va 'useCallback' kabi hooklardan xalos qilishdir. React Compiler endi kodni o'zi tahlil qiladi va qaysi qismlarni qayta hisoblash kerakligini aqlli ravishda hal qiladi.`,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    },
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f7ed] space-y-6 px-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#2c3e63]">
          Maqola topilmadi!
        </h2>
        <Link
          to="/blog"
          className="px-8 py-3 bg-[#2c3e63] text-white rounded-xl font-semibold hover:bg-[#1f2937] transition"
        >
          Blogga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] min-h-screen selection:bg-[#4f8cff] selection:text-white">
      <Helmet>
        <title>{post.title} | Abdurasuljonov Humoyun Mirzo</title>
        <meta name="description" content={`${post.title} - Abdurasuljonov Humoyun Mirzo blogi. ${post.excerpt}`} />
      </Helmet>
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-[#4f8cff] z-[120] origin-left shadow-[0_0_20px_rgba(79,140,255,0.6)]"
        style={{ scaleX }}
      />

      {/* HERO */}
      <header className="pt-28 md:pt-36 pb-16 md:pb-24 px-5">
          <h1 className="hidden">Abdurasuljonov Humoyun Mirzo</h1>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-xs font-semibold text-[#2c3e63]/60 uppercase tracking-[0.35em] hover:text-[#4f8cff] transition group"
          >
            <div className="p-2 rounded-full border border-[#2c3e63]/10 group-hover:border-[#4f8cff] group-hover:-translate-x-1 transition">
              <ArrowLeft size={16} />
            </div>
            Ortga qaytish
          </Link>

          <div className="space-y-6">
            <span className="px-4 py-1.5 bg-[#4f8cff]/10 text-[#4f8cff] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#4f8cff]/20">
              {post.category}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] leading-[1.05] tracking-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#2c3e63]/50 uppercase tracking-wider pt-6 border-t border-[#2c3e63]/10">
            
            <div className="flex items-center gap-4 text-[#2c3e63]">
              <div className="w-11 h-11 rounded-2xl bg-[#2c3e63] p-[3px] overflow-hidden">
                <img
                  src="/avatar.png"
                  alt="Humoyun Mirzo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-left">
                <p className="text-[10px] opacity-50 leading-none mb-1">
                  Muallif
                </p>
                <p className="text-sm font-semibold">Abdurasuljonov Humoyun Mirzo</p>
              </div>
            </div>

            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-[#4f8cff]" />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={15} className="text-[#4f8cff]" />
              5 daqiqa mutolaa
            </span>
          </div>
        </div>
      </header>

      {/* IMAGE */}
      <div className="max-w-6xl mx-auto px-5 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] border-white"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-5 pb-32">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar */}
          <aside className="lg:w-16 flex lg:flex-col gap-4 sticky top-28 h-fit order-last lg:order-first items-center">
            {[Share2, Bookmark, MessageCircle].map((Icon, i) => (
              <button
                key={i}
                className="p-4 bg-white rounded-2xl text-[#2c3e63]/40 hover:text-[#4f8cff] hover:-translate-y-1 shadow-sm border border-[#2c3e63]/5 transition"
              >
                <Icon size={20} />
              </button>
            ))}
          </aside>

          {/* Article */}
          <article className="flex-1">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] border border-[#2c3e63]/5">
              
              {/* Excerpt */}
              <div className="relative mb-14">
                <Quote
                  className="absolute -top-6 -left-6 text-[#4f8cff]/20"
                  size={70}
                />
                <p className="text-xl md:text-2xl font-bold text-[#2c3e63] leading-relaxed italic relative z-10">
                  {post.excerpt}
                </p>
              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-[#2c3e63] prose-p:text-[#2c3e63]/80 prose-strong:text-[#1f2937]">
                <p className="whitespace-pre-line">{post.content}</p>

                <div className="my-14 p-8 bg-[#f9f7ed] rounded-2xl border border-[#4f8cff]/20 relative overflow-hidden group">
                  <Sparkles className="absolute top-5 right-5 text-[#4f8cff]/40 group-hover:rotate-12 transition" />
                  <h3 className="text-xl font-bold text-[#2c3e63] mb-3">
                    Muhim nuqta: Barqarorlik
                  </h3>
                  <p className="m-0 text-[#2c3e63]/80">
                    Dasturlashda trendlar ortidan quvish emas, fundamental bilimlarni mustahkamlash muhimdir.
                  </p>
                </div>

                <h2>Xulosa o'rnida</h2>
                <p>
                  React 19 bilan ishlash orqali biz tezroq ilovalar yaratamiz va
                  dasturchi sifatida yangi bosqichga chiqamiz.
                </p>
              </div>
            </div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-14 bg-[#2c3e63] p-8 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 text-center md:text-left text-white shadow-2xl"
            >
              <div className="w-32 h-32 bg-white rounded-3xl overflow-hidden border-4 border-white/10">
                <img
                  src="/avatar.png"
                  alt="Muallif"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-3xl font-bold mb-1">
                    Humoyun Mirzo
                  </h4>
                  <p className="text-[#4f8cff] text-xs uppercase tracking-widest font-semibold">
                    Software Engineer & IT Mentor
                  </p>
                </div>

                <p className="text-white/70 max-w-lg">
                  Murakkab texnologik jarayonlarni sodda va tushunarli
                  ko'rinishda yetkazishga harakat qilaman.
                </p>

                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-[#4f8cff] text-[#1f2937] rounded-xl font-semibold hover:bg-white transition"
                >
                  Savol yo'llash
                </Link>
              </div>
            </motion.div>
          </article>
        </div>
      </main>
    </div>
  );
}