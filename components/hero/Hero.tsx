

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      <div className="container relative z-10 text-center flex flex-col items-center">

        <Image
          src="/eye.webp"
          alt="أكاديمية عمر خزعل"
          width={280}
          height={280}
          priority
          sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
          className="
            w-40
            sm:w-52
            md:w-64
            lg:w-72
            h-auto
            drop-shadow-[0_0_55px_rgba(163,0,24,.35)]
          "
        />

        <h1
          className="
            mt-10
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-tight
          "
        >
          أكاديمية عمر خزعل
        </h1>

        <p
          className="
            mt-8
            max-w-3xl
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            md:leading-10
            text-neutral-600
            px-4
          "
        >
          للتعليم و التدريب
          <br />
         في مجالات الفنون المرئية و صناعة المحتوى
        </p>

        

      </div>

      <div
        className="
          hidden
          md:block
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#A30018] to-transparent" />
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-36
          md:h-48
          bg-gradient-to-b
          from-transparent
          to-[#F5F2EB]
        "
      />
    </section>
  );
}