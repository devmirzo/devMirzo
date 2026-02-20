import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Search,
  Hash,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

export default function Blog() {
  const categories = [
    "Barchasi",
    "Dasturlash",
    "Yapon tili",
    "Mentoring",
    "Hayot",
  ];

  const posts = [
    {
      id: 1,
      title: "React v19: Nimalar yangi?",
      category: "Dasturlash",
      date: "Feb 12, 2026",
      excerpt:
        "Yaqinda chiqqan React 19 versiyasidagi eng muhim o'zgarishlar va ularning amaliy tahlili...",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "JLPT N3 imtihoniga tayyorlanish",
      category: "Yapon tili",
      date: "Jan 25, 2026",
      excerpt:
        "Yapon tili darajasini oshirishda lug'at boyligi va grammatikani qanday o'rganish kerak?",
      image:
        "https://images.unsplash.com/photo-1528181304800-2f1738b99546?w=800&q=80",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Mentorlik san'ati",
      category: "Mentoring",
      date: "Jan 10, 2026",
      excerpt:
        "O'quvchilarga bilim berishda eng samarali metodikalar va shaxsiy tajribalarim...",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      readTime: "6 min",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Abdurasuljonov Humoyun Mirzo</title>
        <meta name="description" content="Abdurasuljonov Humoyun Mirzo blogi. Dasturlash, tillar va shaxsiy rivojlanish haqidagi maqolalar." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 sm:px-6 bg-gradient-to-b from-[#f9f7ed] to-[#f3f1e6] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500">
        <h1 className="hidden">Abdurasuljonov Humoyun Mirzo</h1>
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3e63]/5 dark:bg-[#f8fafc]/5 text-[#2c3e63] dark:text-[#f8fafc] text-[11px] font-bold uppercase tracking-[0.25em] border border-[#2c3e63]/10 dark:border-white/10">
              <Sparkles size={14} className="text-[#4f8cff]" />
              Bilimlar xazinasi
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2c3e63] dark:text-[#f8fafc] leading-tight">
              Fikrlar va{" "}
              <span className="text-[#4f8cff] italic font-light">
                Tajribalar.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#1e293b]/70 dark:text-[#f8fafc]/70 leading-relaxed font-medium max-w-2xl">
              Dasturlash, tillar va shaxsiy rivojlanish haqidagi maqolalarimni
              shu yerda o'qishingiz mumkin.
            </p>
          </motion.div>

          {/* ================= FILTER BAR ================= */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between border-b border-[#2c3e63]/10 dark:border-white/10 pb-8">
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wide transition-all whitespace-nowrap ${
                    i === 0
                      ? "bg-[#2c3e63] dark:bg-[#4f8cff] text-white dark:text-[#0f172a] shadow-md"
                      : "bg-white dark:bg-[#1e293b] text-[#2c3e63]/60 dark:text-[#f8fafc]/60 border border-[#2c3e63]/10 dark:border-white/10 hover:text-[#4f8cff] hover:border-[#4f8cff]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2c3e63]/40 dark:text-[#f8fafc]/40"
              />
              <input
                type="text"
                placeholder="Maqola qidirish..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-[#1e293b] border border-[#2c3e63]/10 dark:border-white/10 focus:border-[#4f8cff] dark:focus:border-[#4f8cff] focus:ring-2 focus:ring-[#4f8cff]/30 outline-none text-[#1e293b] dark:text-[#f8fafc] font-medium"
              />
            </div>
          </div>
        </div>

        {/* ================= POSTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">

                <div className="relative h-[360px] overflow-hidden rounded-3xl bg-[#1e293b] shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60" />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-[#4f8cff] text-white dark:text-[#0f172a] rounded-lg text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest mb-3 text-white/70">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#4f8cff]" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 bg-[#4f8cff] rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-[#4f8cff]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#4f8cff] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-[#2c3e63]/70 dark:text-[#f8fafc]/70 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2c3e63] dark:text-[#f8fafc] group-hover:gap-4 transition-all">
                    Batafsil
                    <ArrowRight size={18} className="text-[#4f8cff]" />
                  </div>
                </div>

              </Link>
            </motion.article>
          ))}
        </div>

        {/* ================= NEWSLETTER ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-[#2c3e63] dark:bg-[#1e293b] rounded-[3rem] relative overflow-hidden transition-colors"
        >
          <div className="absolute -top-20 -right-20 opacity-[0.03] text-white">
            <Hash size={400} />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Yangiliklardan{" "}
                <span className="text-[#4f8cff]">
                  xabardor bo'ling.
                </span>
              </h2>
              <p className="text-white/70 max-w-md">
                Eng sara maqolalar va IT darsliklarni haftasiga bir marta
                pochtangizga yuboraman.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur border border-white/10">
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f8fafc] outline-none focus:ring-2 focus:ring-[#4f8cff]"
                />

                <button className="w-full py-3 bg-[#4f8cff] text-white dark:text-[#0f172a] font-semibold rounded-xl hover:bg-white dark:hover:bg-white hover:text-[#2c3e63] transition-all flex items-center justify-center gap-2">
                  Obuna bo'lish <ArrowRight size={18} />
                </button>

                <p className="text-center text-white/40 text-xs">
                  Istagan vaqtingizda obunani bekor qilishingiz mumkin
                </p>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    </>
  );
}