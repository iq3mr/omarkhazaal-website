"use client";

import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";

export default function CourseHero() {
  return (
    <Section className="pt-44 md:pt-52 pb-24">

      <div className="max-w-5xl">

        <Reveal>

          <p className="text-[#A30018] tracking-[8px] text-sm uppercase">
            الدورات
          </p>

        </Reveal>

        <Reveal delay={0.1}>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[1.1]">
            تعلّم الفن...
            <br />
            كما يجب أن يُتعلَّم.
          </h1>

        </Reveal>

        <Reveal delay={0.2}>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-600">
            تقدم أكاديمية عمر خزعل تجربة تعليمية تجمع بين الأساس الأكاديمي،
            والتطبيق العملي، والخبرة المهنية، لتمنحك رحلة تعلم متكاملة
            تناسب المبتدئين والمحترفين.
          </p>

        </Reveal>

        <Reveal delay={0.3}>

          <div className="mt-14 flex flex-wrap gap-5">

            <Button href="#courses">
              استعرض الدورات
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              تواصل معنا
            </Button>

          </div>

        </Reveal>

        <Reveal delay={0.4}>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-4xl font-black text-[#A30018]">
                +10
              </h3>

              <p className="mt-2 text-neutral-500">
                سنوات خبرة
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#A30018]">
                4
              </h3>

              <p className="mt-2 text-neutral-500">
                مسارات تعليمية
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#A30018]">
                +100
              </h3>

              <p className="mt-2 text-neutral-500">
                درس عملي
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#A30018]">
                ∞
              </h3>

              <p className="mt-2 text-neutral-500">
                شغف بالفن
              </p>
            </div>

          </div>

        </Reveal>

      </div>

    </Section>
  );
}