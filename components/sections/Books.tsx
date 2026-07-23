"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const books = [
  {
    title: "عين التربية الفنية",
    year: "2026",
    description:
      "مرجع أكاديمي لتعليم التربية الفنية، يجمع بين الأسس النظرية والتطبيق العملي، ويقدم منهجاً حديثاً لتدريس الفن باللغة العربية.",
    image: "/books/cover.jpg",
  },
  {
    title: "فن الرسم العراقي",
    year: "قريباً",
    description:
      "كتاب متخصص في استعراض فن الرسم وتقنياته، يبدأ تاريخياً ويقود القارئ نحو بناء الرؤية الفنية الكاملة لفناني العراق.",
    image: "/books/fanalrasm.jpg",
  },
];

export default function Books() {
  return (
    <section className="py-40 bg-white">

      <div className="container">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] tracking-[6px] uppercase text-sm"
        >
          Library
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl md:text-7xl font-black"
        >
          المكتبة
        </motion.h2>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-600">
          مؤلفات أكاديمية تهدف إلى تطوير الثقافة البصرية، وتعليم الفنون بمنهج
          عربي يجمع بين المعرفة الأكاديمية والتطبيق العملي.
        </p>

        <div className="mt-24 grid lg:grid-cols-2 gap-16">

          {books.map((book, index) => (

            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="
                group
                grid
                md:grid-cols-[240px_1fr]
                gap-10
                items-center
              "
            >

              <div className="relative aspect-[2/3] rounded-[28px] overflow-hidden shadow-2xl">

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

                <span className="text-[#A30018] tracking-[4px] uppercase text-sm">
                  {book.year}
                </span>

                <h3 className="mt-4 text-4xl font-bold">
                  {book.title}
                </h3>

                <p className="mt-6 leading-9 text-neutral-600">
                  {book.description}
                </p>

                <button
                  className="
                    mt-10
                    rounded-full
                    bg-[#151515]
                    text-white
                    px-8
                    py-3
                    transition
                    hover:bg-[#A30018]
                  "
                >
                  استعراض الكتاب
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}