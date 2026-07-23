"use client";

import { motion } from "framer-motion";

export default function Feature() {
  return (
    <section className="bg-[#151515] text-white min-h-screen flex items-center">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <span className="uppercase tracking-[10px] text-[#A30018]">
            Museum
          </span>

          <h2 className="text-6xl md:text-8xl font-black mt-8 leading-tight">

            ليست مجرد
            <br />

            منصة تعليمية.

          </h2>

          <p className="max-w-3xl text-2xl text-neutral-400 leading-10 mt-10">

            أكاديمية عمر خزعل هي مساحة تجمع بين
            الفن،
            التصميم،
            المعرفة،
            والبحث،
            لتقديم تجربة رقمية حديثة تشبه زيارة معرض فني.

          </p>

        </motion.div>

      </div>

    </section>
  );
}