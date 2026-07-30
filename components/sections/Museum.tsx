"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const wings = [
  {
    tag: "GALLERY I",
    title: "الدورات الأكاديمية",
    description: "مسارات تعليمية متكاملة في الرسم الأكاديمي، الرسم الرقمي، التصميم الجرافيكي، الذكاء الاصطناعي، والبحث العلمي.",
    link: "/courses",
    linkText: "الدخول الى الدورات ←",
    badge: "7 مسارات متخصصة",
  },
  {
    tag: "LIBRARY II",
    title: "مكتبة المؤلفات",
    description: "مجموعة من الكتب والكتيبات المنهجية المكتوبة بعناية لتشريح الفنون وفلسفة الرؤية البصرية والمنظور.",
    link: "/books",
    linkText: "استكشف المكتبة ←",
    badge: "إصدارات ومؤلفات",
  },
  {
    tag: "ARCHIVE III",
    title: "دفتر الأكاديمية (مقالات نقدية)",
    description: "أرشيف فكري يضم مقالات نقدية وتحليلات بصرية تعيد قراءة تاريخ الفنون وفلسفة الإبداع الجمالي.",
    link: "/journal",
    linkText: "قراءة المقالات ←",
    badge: "دراسات وتأملات",
  },
];

export default function Museum() {
  return (
    <section className="py-32 bg-[#FAF8F3] relative border-y border-[#C5A059]/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A30018] tracking-[8px] uppercase text-xs md:text-sm font-bold"
          >
            MUSEUM GALLERIES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl md:text-6xl font-black text-[#121212]"
          >
            الأكاديمية والمعرض
          </motion.h2>

          <p className="mt-6 text-lg text-neutral-600 font-serif leading-8">
            تنقل بين أجنحة المعرض الفني والمكتبة الأكاديمية للاطلاع على كافة المخرجات والدورات.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <motion.div
              key={wing.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                rounded-[32px]
                bg-white
                p-8
                md:p-10
                border
                border-[#C5A059]/30
                museum-frame-shadow
                flex
                flex-col
                justify-between
                transition-all
                duration-300
                hover:border-[#A30018]
              "
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-widest">
                    {wing.tag}
                  </span>

                  <span className="text-xs text-[#A30018] font-bold bg-[#A30018]/10 px-3 py-1 rounded-full">
                    {wing.badge}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#121212] group-hover:text-[#A30018] transition-colors duration-300">
                  {wing.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600 font-serif text-base md:text-lg">
                  {wing.description}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-100">
                <Link
                  href={wing.link}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#A30018]
                    font-bold
                    text-base
                    group-hover:translate-x-[-4px]
                    transition-transform
                    duration-300
                  "
                >
                  {wing.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}