"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-40 bg-white">

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* الصورة */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px]">

              <Image
                src="/about/omar-2026.jpg"
                alt="Omar Khazaal"
                fill
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* النص */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-[#A30018] tracking-[6px] uppercase text-sm">
              About
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              عمر خزعل
            </h2>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              فنان تشكيلي، ومدرس تربية فنية، وباحث في تعليم الفنون،
              يعمل على تطوير المحتوى العربي في مجالات الرسم،
              التصميم، والثقافة البصرية، من خلال تجربة تجمع
              بين العمل الأكاديمي والتطبيق العملي.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-14">

              <div>
                <h3 className="text-5xl font-black text-[#A30018]">
                  +10
                </h3>

                <p className="mt-2 text-neutral-600">
                  سنوات خبرة
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#A30018]">
                  +1000
                </h3>

                <p className="mt-2 text-neutral-600">
                  طالب ومتدرب
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#A30018]">
                  +50
                </h3>

                <p className="mt-2 text-neutral-600">
                  ورشة ودورة
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#A30018]">
                  2026
                </h3>

                <p className="mt-2 text-neutral-600">
                  إطلاق الأكاديمية
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}