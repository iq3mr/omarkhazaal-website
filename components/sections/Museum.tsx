"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "الدورات",
    text: "تعلم الرسم، التصميم، التسويق، وصناعة المحتوى من خلال دورات احترافية.",
  },
  {
    title: "الكتب",
    text: "مكتبة رقمية تضم كتباً وملفات PDF في الفنون والتصميم.",
  },
  {
    title: "دفترنا",
    text: "مقالات نقدية، أفكار، وتأملات في الفن والثقافة.",
  },
];

export default function Museum() {
  return (
    <section className="py-36 bg-[#F5F2EB]">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-5xl font-black text-center mb-20"
        >
          اكتشف الأكاديمية
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: .35 }}
              className="rounded-3xl border border-[#E7E1D7] bg-white p-10 shadow-sm hover:shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-6 text-[#151515]">
                {item.title}
              </h3>

              <p className="leading-9 text-neutral-600">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}