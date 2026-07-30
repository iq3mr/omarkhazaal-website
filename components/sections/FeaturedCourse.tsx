"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

export default function FeaturedCourse() {
  return (
    <Section className="py-28 md:py-36 relative">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-[#C5A059]/30 museum-frame-shadow p-3 bg-white group">
            <div className="relative overflow-hidden rounded-[32px] bg-neutral-100">
              <Image
                src="/courses/featuredDA.webp"
                alt="الرسم الرقمي"
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-widest shadow-lg">
                MASTERPIECE COURSE
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A30018]/10 text-[#A30018] text-xs font-bold tracking-[6px] uppercase mb-6">
              المسار الأكثر طلباً
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-[#121212]">
              الرسم الرقمي الاحترافي
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl leading-9 md:leading-10 text-neutral-700 font-serif">
              رحلة تعليمية تفصيلية تبدأ من الأسس النظرية والتظليل، وتصل بك إلى إنتاج أعمال بصرية رقمية احترافية باستخدام أحدث البرامج والأدوات، من خلال مشاريع عملية ومراجعات مستمرة.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-8 p-6 rounded-3xl bg-white/80 border border-[#C5A059]/20 museum-frame-shadow">
              <div>
                <h3 className="text-4xl font-black text-[#A30018]">16</h3>
                <p className="mt-1 text-sm font-bold text-neutral-600">درساً أسبوعياً</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#121212]">8+</h3>
                <p className="mt-1 text-sm font-bold text-neutral-600">ساعة تطبيق مباشر</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12">
              <Link
                href="/courses/digital-painting"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-4
                  rounded-full
                  bg-[#A30018]
                  text-white
                  font-bold
                  text-lg
                  shadow-lg
                  hover:bg-[#800013]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                استعراض تفاصيل الدورة ←
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}