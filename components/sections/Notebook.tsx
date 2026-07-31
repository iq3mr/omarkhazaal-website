"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "هل لتاريخ الفن أن يكذب؟",
    date: "12 يوليو 2026",
    category: "نقد وتاريخ الفن",
    image: "/journal/post11.webp",
    href: "/journal/how-to-learn",
  },
  {
    title: "ما حقيقة الأسعار المرتفعة للوحات العالمية؟",
    date: "8 يوليو 2026",
    category: "اقتصاد وسوق الفن",
    image: "/journal/post12.webp",
    href: "/journal/why-people-fail",
  },
  {
    title: "كيف يكون النقد الحقيقي لفن الرسم؟",
    date: "2 يوليو 2026",
    category: "فلسفة بصرية",
    image: "/journal/post13.webp",
    href: "/journal/artist-vs-designer",
  },
];

export default function Journal() {
  return (
    <section className="py-32 md:py-44 bg-white relative">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] uppercase text-xs md:text-sm font-bold"
        >
          CRITICAL ESSAYS & JOURNAL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl md:text-7xl font-black text-[#121212]"
        >
          دفتر الأكاديمية والمقالات النقدية
        </motion.h2>

        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-9 md:leading-10 text-neutral-700 font-serif">
          مقالات نقدية، أبحاث، وتأملات في الفن والتعليم والجمال، تُكتب لترافق رحلتك الإبداعية وتمنحك عمقاً ورؤية أوسع.
        </p>

        <div className="mt-20 grid lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <Link
                href={post.href}
                className="
                  group
                  block
                  rounded-[32px]
                  bg-white
                  p-6
                  border
                  border-[#C5A059]/30
                  museum-frame-shadow
                  transition-all
                  duration-300
                  hover:border-[#A30018]
                  hover:-translate-y-2
                "
              >
                <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-neutral-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full museum-plaque text-[#C5A059] text-[11px] font-bold tracking-widest shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="pt-6">
                  <span className="text-xs text-[#A30018] font-bold tracking-widest uppercase">
                    {post.date}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[#121212] group-hover:text-[#A30018] transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-sm font-bold text-neutral-600 group-hover:text-[#A30018]">
                    <span>قراءة المقال الكامل</span>
                    <span className="group-hover:translate-x-[-4px] transition-transform duration-300">←</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}