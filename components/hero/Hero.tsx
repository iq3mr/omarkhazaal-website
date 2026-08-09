import Link from "next/link";
import DraggableEye from "../ui/DraggableEye";
import MusicButton from "../ui/MusicButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible flex items-center justify-center pt-32 pb-20">
      {/* Museum Ambient Spotlight Lighting */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none" />

      {/* Museum Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#151515_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="container relative z-10 text-center flex flex-col items-center max-w-5xl">
        {/* Interactive Background Music Button */}
        <MusicButton audioSrc="/audio/music.ogg" />

        {/* Central Artwork Showcase - Interactive Draggable Eye */}
        <DraggableEye />

        {/* Title */}
        <h1
          className="
            mt-12
            text-5xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            font-black
            leading-[1.08]
            tracking-tight
            text-[#121212]
          "
        >
          عمر خزعل
        </h1>

        {/* Museum Divider */}
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent my-8" />

        {/* Subtitle */}
        <p
          className="
            max-w-3xl
            text-lg
            sm:text-xl
            md:text-2xl
            leading-9
            md:leading-10
            text-neutral-700
            px-4
            font-serif
          "
        >
          تعليم منهجي وتدريب عملي لجميع المستويات
          <br />
          <span className="text-[#A30018] font-bold">في الفنون المرئية، وصناعة المحتوى</span>
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="#courses"
            className="
              px-10
              py-4
              rounded-full
              bg-[#A30018]
              text-white
              font-bold
              text-lg
              shadow-[0_10px_30px_rgba(163,0,24,0.35)]
              hover:bg-[#800013]
              hover:scale-105
              transition-all
              duration-300
              border
              border-[#A30018]
            "
          >
            استكشف الدورات
          </Link>

          <Link
            href="/about"
            className="
              px-10
              py-4
              rounded-full
              bg-white/80
              backdrop-blur-md
              text-[#121212]
              font-bold
              text-lg
              border
              border-[#C5A059]/40
              shadow-md
              hover:bg-white
              hover:border-[#A30018]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            عن الفنان
          </Link>
        </div>

        {/* Museum Quick Stats Bar */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-20 p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#C5A059]/30 shadow-xl max-w-4xl w-full">
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-[#A30018]">+650</h3>
            <p className="mt-2 text-xs md:text-sm font-bold text-neutral-600 uppercase tracking-wider">طالب ومتدرب</p>
          </div>

          <div className="border-x border-neutral-300/60 px-2 sm:px-6">
            <h3 className="text-3xl md:text-5xl font-black text-[#121212]">7</h3>
            <p className="mt-2 text-xs md:text-sm font-bold text-neutral-600 uppercase tracking-wider">مسارات أكاديمية</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-black text-[#A30018]">+10</h3>
            <p className="mt-2 text-xs md:text-sm font-bold text-neutral-600 uppercase tracking-wider">سنوات خبرة فنية</p>
          </div>
        </div>
      </div>

      {/* Decorative Line & Fade */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}