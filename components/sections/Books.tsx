"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const books = [
  {
    title: "عين التربية الفنية",
    year: "إصدار 2026",
    description:
      "مرجع أكاديمي لتعليم التربية الفنية، يجمع بين الأسس النظرية والتطبيق العملي، ويقدم منهجاً حديثاً لتدريس الفن باللغة العربية.",
    image: "/books/3aynaltarbya.webp",
    badge: "إصدار رسمي متوفر",
  },
  {
    title: "فن الرسم العراقي",
    year: "قريباً في المعرض",
    description:
      "كتاب متخصص في استعراض فن الرسم وتقنياته، يبدأ تاريخياً ويقود القارئ نحو بناء الرؤية الفنية الكاملة لفناني العراق.",
    image: "/books/fanalrasm.webp",
    badge: "تحت الطبع والنشر",
  },
];

export default function Books() {
  return (
    <section className="py-32 md:py-44 bg-white relative border-b border-[#C5A059]/20">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] tracking-[8px] uppercase text-xs md:text-sm font-bold"
        >
          RARE LIBRARY & PUBLICATIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl md:text-7xl font-black text-[#121212]"
        >
          مكتبة المؤلفات الفنية
        </motion.h2>

        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-9 md:leading-10 text-neutral-700 font-serif">
          مؤلفات أكاديمية تهدف إلى تطوير الثقافة البصرية، وتعليم الفنون بمنهج عربي أصيل يجمع بين الجذور الأكاديمية والتطبيق المعاصر.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 md:gap-16">
          {books.map((book, index) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="
                group
                grid
                md:grid-cols-[240px_1fr]
                gap-8
                md:gap-10
                items-center
                p-8
                rounded-[36px]
                bg-[#FAF8F3]
                border
                border-[#C5A059]/30
                museum-frame-shadow
                transition-all
                duration-300
                hover:border-[#A30018]
              "
            >
              <div className="relative aspect-[2/3] rounded-[24px] overflow-hidden shadow-2xl bg-neutral-200">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-widest">
                    {book.year}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-[#121212] group-hover:text-[#A30018] transition-colors duration-300">
                  {book.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600 font-serif text-base md:text-lg">
                  {book.description}
                </p>

                <div className="mt-8">
                  <Link
                    href="/books"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#121212]
                      text-white
                      px-8
                      py-3.5
                      font-bold
                      transition-all
                      duration-300
                      hover:bg-[#A30018]
                      shadow-md
                    "
                  >
                    استعراض تفاصيل الكتاب ←
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}