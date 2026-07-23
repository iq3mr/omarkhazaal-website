"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] text-white py-40">

      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-20"
        style={{
          background: "#A30018",
          right: "-250px",
          top: "-250px",
        }}
      />

      <div className="container relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tracking-[6px] uppercase text-[#A30018] text-sm"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
        >
          هل لديك فكرة؟
          <br />
          لنصنعها معاً
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-3xl mx-auto text-xl leading-10 text-neutral-400"
        >
          سواء كنت تبحث عن التعلم، أو التعاون في مشروع،
          أو ترغب في الاستفسار عن الدورات والكتب،
          يسعدني أن أسمع منك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            href="mailto:omarkhazaal.iq@gmail.com"
            className="
              inline-flex
              items-center
              rounded-full
              bg-[#A30018]
              px-10
              py-4
              text-lg
              transition
              hover:scale-105
            "
          >
            تواصل الآن
          </Link>
        </motion.div>

      </div>

    </section>
  );
}