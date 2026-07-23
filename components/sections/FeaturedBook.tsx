"use client";

import Image from "next/image";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";

export default function FeaturedBook() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* النص */}

        <div className="order-2 lg:order-1">

          <Reveal>
            <p className="text-[#A30018] tracking-[8px] uppercase text-sm">
              Featured Book
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              عين التربية الفنية
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-xl leading-10 text-neutral-600">
              كتاب يقدم منهجاً بصرياً لتعليم التربية الفنية،
              يجمع بين الخبرة الأكاديمية والتطبيق العملي،
              ويعيد النظر في طريقة تدريس الفن للأجيال الجديدة.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-4xl font-black text-[#A30018]">
                  150
                </h3>

                <p className="mt-2 text-neutral-500">
                  صفحة
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#A30018]">
                  12
                </h3>

                <p className="mt-2 text-neutral-500">
                  مرحلة
                </p>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14">
              <Button href="/books">
                استعراض الكتاب
              </Button>
            </div>
          </Reveal>

        </div>

        {/* صورة الكتاب */}

        <div className="relative order-1 lg:order-2">

          <Image
            src="/books/cover.jpg"
            alt="عين التربية الفنية"
            width={1800}
            height={2700}
            priority
            className="
              w-full
              h-auto
              rounded-[36px]
              shadow-2xl
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />

        </div>

      </div>
    </Section>
  );
}