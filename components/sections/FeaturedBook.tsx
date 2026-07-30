"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

export default function FeaturedBook() {
  return (
    <Section className="py-28 md:py-36 relative">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* النص */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-[6px] uppercase mb-6">
              إصدار المكتبة الوطنية
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-[#121212]">
              عين التربية الفنية
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl leading-9 md:leading-10 text-neutral-700 font-serif">
              يقدم الكتاب منهجاً بصرياً حديثاً لتعليم الفنون والتربية الجمالية، يجمع بين الخبرة الأكاديمية والتطبيق العملي الميسر، ويعيد صياغة أساليب التفكير البصري للأجيال القادمة.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-8 mt-10 p-6 rounded-3xl bg-white/80 border border-[#C5A059]/20 museum-frame-shadow">
              <div>
                <h3 className="text-4xl font-black text-[#A30018]">+150</h3>
                <p className="mt-1 text-sm font-bold text-neutral-600">صفحة ملونة</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#121212]">12</h3>
                <p className="mt-1 text-sm font-bold text-neutral-600">مرحلة دراسية</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12">
              <Link
                href="/books"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-4
                  rounded-full
                  bg-[#A30018]
                  text-white
                  !text-white
                  font-bold
                  text-lg
                  shadow-lg
                  hover:bg-[#800013]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                استعراض الكتاب والمؤلفات ←
              </Link>
            </div>
          </Reveal>
        </div>

        {/* صورة الكتاب */}
        <div className="relative order-1 lg:order-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] border border-[#C5A059]/30 museum-frame-shadow p-3 bg-white group">
              <Image
                src="/books/3aynaltarbya.webp"
                alt="عين التربية الفنية"
                width={900}
                height={1350}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  w-full
                  h-auto
                  rounded-[32px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-widest shadow-lg">
                PUBLICATION 2026
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}