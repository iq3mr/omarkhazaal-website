"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "هل لتاريخ الفن ان يكذب؟",
    date: "12 يوليو 2026",
    image: "/journal/post11.jpg",
    href: "/journal/how-to-learn",
  },
  {
    title: "ما حقيقة الاسعار المرتفعة للوحات؟",
    date: "8 يوليو 2026",
    image: "/journal/post12.jpg",
    href: "/journal/why-people-fail",
  },
  {
    title: "كيف يكون النقد الحقيقي لفن الرسم؟",
    date: "2 يوليو 2026",
    image: "/journal/post13.jpg",
    href: "/journal/artist-vs-designer",
  },
];

export default function Journal() {
  return (
    <section className="py-40">

      <div className="container">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] tracking-[8px] uppercase text-sm"
        >
          Journal
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl md:text-7xl font-black"
        >
          دفترنا
        </motion.h2>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-600">
          مقالات، أبحاث، وتأملات في الفن والتعليم والتصميم، تُكتب لترافق
          رحلتك الإبداعية وتمنحك منظورًا أوسع.
        </p>

        <div className="mt-24 grid lg:grid-cols-3 gap-10">

          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
            >
              <Link href={post.href} className="group block">

                <div className="relative overflow-hidden rounded-[32px]">

                  <Image
                    src={post.image}
                    alt={post.title}
                    width={900}
                    height={1100}
                    className="aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <p className="mt-7 text-sm tracking-[3px] uppercase text-[#A30018]">
                  {post.date}
                </p>

                <h3 className="mt-3 text-3xl leading-snug group-hover:text-[#A30018] transition">
                  {post.title}
                </h3>

                <span className="inline-block mt-8 text-lg text-neutral-500 group-hover:text-black transition">
                  اقرأ المقال →
                </span>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}