"use client";

import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

export default function Manifesto() {
  return (
    <Section className="py-40">

      <div className="max-w-5xl mx-auto text-center">

        <Reveal>

          <p className="text-[#A30018] tracking-[8px] uppercase text-sm">
            Manifesto
          </p>

        </Reveal>

        <Reveal delay={0.1}>

          <h2 className="mt-10 text-5xl md:text-7xl lg:text-8xl font-black leading-[1.15]">
           ليس الفن نسخاً ولا تكراراً
            <br />
           بل هو انت..
          </h2>

        </Reveal>

        <Reveal delay={0.25}>

          <p className="mt-14 max-w-3xl mx-auto text-lg md:text-2xl leading-10 text-neutral-600">
            تؤمن أكاديمية عمر خزعل بأن الفن ليس مجموعة أدوات أو برامج،
            بل طريقة في التفكير والرؤية وصياغة المعنى.
            <br />
            لذلك صُممت مناهجنا لتجمع بين المعرفة الأكاديمية،
            والتطبيق العملي، وبناء الشخصية الفنية المستقلة.
          </p>

        </Reveal>

      </div>

    </Section>
  );
}