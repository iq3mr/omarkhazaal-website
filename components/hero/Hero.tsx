import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-32 pb-20">
      {/* Museum Ambient Spotlight Lighting */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none" />

      {/* Museum Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#151515_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="container relative z-10 text-center flex flex-col items-center max-w-5xl">
        {/* Museum Plaque Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full museum-plaque text-[#E5DDD0] text-xs md:text-sm font-medium tracking-widest uppercase mb-10 shadow-xl border border-[#C5A059]/30">
          <span className="w-2 h-2 rounded-full bg-[#A30018] animate-pulse" />
          <span>حيث الفن التشكيلي والبحث الأكاديمي</span>
        </div>

        {/* Central Artwork Showcase */}
        <div className="relative group">
          {/* Subtle Outer Glowing Frame */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#A30018]/20 via-[#C5A059]/20 to-[#A30018]/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          
          <Image
            src="/eye.webp"
            alt="أكاديمية عمر خزعل"
            width={320}
            height={320}
            priority
            sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
            className="
              relative
              w-44
              sm:w-56
              md:w-68
              lg:w-80
              h-auto
              drop-shadow-[0_15px_35px_rgba(163,0,24,.35)]
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        </div>

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
          أكاديمية عمر خزعل
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

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#F5F2EB] pointer-events-none" />
    </section>
  );
}