"use client";

import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

export default function Manifesto() {
  return (
    <Section className="py-32 md:py-44 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full museum-plaque text-[#C5A059] text-xs md:text-sm font-bold tracking-[8px] uppercase mb-8 shadow-md">
            <span>الرؤية والبيان الفني</span>
          </div>
        </Reveal>

        {/* Framed Museum Wall Panel */}
        <div className="relative p-10 md:p-20 rounded-[40px] bg-white border border-[#C5A059]/30 museum-frame-shadow">
          {/* Subtle Corner Accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#A30018]/40 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#A30018]/40 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#A30018]/40 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#A30018]/40 pointer-events-none" />

          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.15] text-[#121212]">
              ليس الفن نسخاً ولا تكراراً...
              <br />
              <span className="text-[#A30018] font-serif">بل هو أنت.</span>
            </h2>
          </Reveal>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-10" />

          <Reveal delay={0.25}>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl leading-10 text-neutral-700 font-serif">
              تؤمن أكاديمية عمر خزعل بأن الفن ليس مجرد استخدام أدوات أو برامج،
              بل هو أسلوب في التفكير العميق، وتدريب العين على صياغة المعنى والبصمة.
              <br />
              <span className="block mt-4 text-[#A30018] font-bold">
                صُممت مناهجنا لتجمع بين المعرفة الأكاديمية الصارمة، والتطبيق العملي، لبناء شخصية فنية مستقلة ومبدعة.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}