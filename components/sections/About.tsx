"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 md:py-44 bg-white relative border-y border-[#C5A059]/20 overflow-hidden">
      <div className="container overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* الصورة المؤطرة بالمتحف */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-full overflow-hidden"
          >
            <div className="relative p-2.5 sm:p-3.5 rounded-[32px] sm:rounded-[40px] border border-[#C5A059]/30 museum-frame-shadow bg-[#FAF8F3] group max-w-full">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] sm:rounded-[32px] bg-neutral-200 w-full">
                <Image
                  src="/about/omar-2026.webp"
                  alt="الفنان التشكيلي عمر خزعل"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full museum-plaque text-[#C5A059] text-[10px] sm:text-xs font-bold tracking-widest shadow-lg">
                  ARTIST PORTRAIT
                </div>
              </div>
            </div>
          </motion.div>

          {/* النص */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-full overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-[11px] sm:text-xs font-bold uppercase mb-6 max-w-full">
              سيرة الفنان ومؤسس الأكاديمية
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-[#121212]">
              عمر خزعل
            </h2>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10 text-neutral-700 font-serif">
              فنان تشكيلي ومدرس تربية فنية، باحث في الفنون التشكيلية يعمل على تطوير المحتوى العربي الأكاديمي في مجالات الرسم، التصميم، والثقافة البصرية، من خلال تجربة تجمع بين سنوات الدراسة والتطبيق العملي.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 p-4 sm:p-6 rounded-3xl bg-[#FAF8F3] border border-[#C5A059]/20 museum-frame-shadow max-w-full">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#A30018]">+10</h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">سنوات خبرة فنية وأكاديمية</p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#121212]">+650</h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">طالب ومتدرب</p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#A30018]">7</h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">مسارات ورش ودورات</p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#121212]">2026</h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">تأسيس الأكاديمية</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  sm:px-8
                  py-3.5
                  rounded-full
                  bg-[#121212]
                  text-white
                  font-bold
                  text-sm
                  sm:text-base
                  transition-all
                  duration-300
                  hover:bg-[#A30018]
                  shadow-md
                "
              >
                قراءة السيرة الأكاديمية الكاملة ←
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}