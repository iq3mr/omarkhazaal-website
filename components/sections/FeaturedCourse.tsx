"use client";

import Image from "next/image";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";

export default function FeaturedCourse() {
  return (
    <Section>

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <Reveal>

          <div className="relative overflow-hidden rounded-[40px]">

            <Image
              src="/courses/featuredDA.jpg"
              alt="الرسم الرقمي"
              width={900}
              height={1200}
              className="
                aspect-[4/5]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </Reveal>

        <div>

          <Reveal>

            <p className="text-[#A30018] tracking-[8px] uppercase text-sm">
              Featured Course
            </p>

          </Reveal>

          <Reveal delay={0.1}>

            <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              الرسم الرقمي
            </h2>

          </Reveal>

          <Reveal delay={0.2}>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              رحلة تعليمية تبدأ من المبادئ الأساسية للرسم،
              وتصل بك إلى إنتاج أعمال احترافية باستخدام أحدث
              أدوات الرسم الرقمي، من خلال مشاريع عملية،
              وتمارين، ومراجعات مستمرة.
            </p>

          </Reveal>

          <Reveal delay={0.3}>

            <div className="mt-12 grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-4xl font-black text-[#A30018]">
                  16
                </h3>

                <p className="mt-2 text-neutral-500">
                  درساً
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#A30018]">
                  8+
                </h3>

                <p className="mt-2 text-neutral-500">
                  ساعة تعليم
                </p>
              </div>

            </div>

          </Reveal>

          <Reveal delay={0.4}>

            <div className="mt-14">

              <Button href="/courses/digital-painting">
                استعراض الدورة
              </Button>

            </div>

          </Reveal>

        </div>

      </div>

    </Section>
  );
}