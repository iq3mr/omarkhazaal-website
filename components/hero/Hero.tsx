"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* الخلفية الأولى */}

      <motion.div
        className="
          absolute
          -top-52
          -left-52
          w-[420px]
          h-[420px]
          md:w-[650px]
          md:h-[650px]
          lg:w-[900px]
          lg:h-[900px]
          rounded-full
          blur-[120px]
          will-change-transform
        "
        style={{
          background: "rgba(163,0,24,.08)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* الخلفية الثانية */}

      <motion.div
        className="
          absolute
          -bottom-52
          -right-52
          w-[420px]
          h-[420px]
          md:w-[650px]
          md:h-[650px]
          lg:w-[850px]
          lg:h-[850px]
          rounded-full
          blur-[120px]
          will-change-transform
        "
        style={{
          background: "rgba(163,0,24,.06)",
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* المحتوى */}

      <div className="container relative z-10 text-center flex flex-col items-center">

        {/* الشعار */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <Image
            src="/eye.png"
            alt="أكاديمية عمر خزعل"
            width={280}
            height={280}
            priority
            sizes="(max-width:768px) 160px, (max-width:1200px) 240px, 280px"
            className="
              w-40
              sm:w-52
              md:w-64
              lg:w-72
              h-auto
              drop-shadow-[0_0_55px_rgba(163,0,24,.35)]
              select-none
            "
          />

        </motion.div>

        {/* العنوان */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
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
        </motion.h1>
                {/* الوصف */}

        <motion.p
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .15,
            duration: .7,
          }}
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
          الفن ليس مادة دراسية فحسب
          <br />
          بل أسلوب حياة.
        </motion.p>

        {/* الزر */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
            duration: .7,
          }}
          className="
            mt-10
            md:mt-14
          "
        >
          <Button href="/courses">
            ابدأ رحلتك
          </Button>
        </motion.div>

      </div>

      {/* مؤشر النزول */}

      <motion.div
        className="
          hidden
          md:block
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#A30018] to-transparent" />
      </motion.div>

      {/* دمج القسم التالي */}

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