"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-white py-36 md:py-44 border-t border-[#C5A059]/30">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{
          background: "#A30018",
          right: "-250px",
          top: "-250px",
        }}
      />

      <div className="container relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full museum-plaque text-[#C5A059] text-xs md:text-sm font-bold uppercase mb-8 shadow-xl"
        >
          <span>JOIN THE ACADEMY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight text-white"
        >
          هل لديك مشروع أو استفسار؟
          <br />
          <span className="text-[#A30018] font-serif">لنصنع الإبداع معاً</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl leading-10 text-neutral-300 font-serif"
        >
          سواء كنت ترغب بالانضمام لأحد المسارات الأكاديمية، التعاون في مشروع فني، أو استفسار عن الدورات والمؤلفات، يسعدني الترحيب بك والتواصل معك مباشرة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdx88xZ3ODj_1NwOox-7M0bZvWpFMVLiulmKmmZpsXOuvB9CQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#A30018]
              px-10
              py-4
              text-lg
              font-bold
              shadow-[0_10px_30px_rgba(163,0,24,0.4)]
              hover:bg-[#800013]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            التسجيل في الدورات ←
          </a>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              backdrop-blur-md
              text-white
              border
              border-[#C5A059]/40
              px-10
              py-4
              text-lg
              font-bold
              hover:bg-white
              hover:text-black
              hover:scale-105
              transition-all
              duration-300
            "
          >
            تواصل مباشر
          </Link>
        </motion.div>
      </div>
    </section>
  );
}