"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* الخلفية الأولى */}

      <motion.div
        className="
          absolute
          -top-52
          -left-52
          w-[340px]
          h-[340px]
          md:w-[520px]
          md:h-[520px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          blur-[90px]
          will-change-transform
        "
        style={{
          background: "rgba(163,0,24,.06)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
                x: [0, 40, 0],
                y: [0, -20, 0],
              }
        }
        transition={{
          duration: 28,
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
          w-[340px]
          h-[340px]
          md:w-[520px]
          md:h-[520px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          blur-[90px]
          will-change-transform
        "
        style={{
          background: "rgba(163,0,24,.05)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1.04, 1, 1.04],
                x: [0, -40, 0],
                y: [0, 30, 0],
              }
        }
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 text-center flex flex-col items-center">

        {/* العين */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <Image
            src="/eye.WEBP"
            alt="أكاديمية عمر خزعل"
            width={280}
            height={280}
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width:768px) 160px,(max-width:1200px) 240px,280px"
            className="
              w-40
              sm:w-52
              md:w-64
              lg:w-72
              h-auto
              drop-shadow-[0_0_40px_rgba(163,0,24,.25)]
              select-none
            "
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .55 }}
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .12,
            duration: .5,
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .25,
            duration: .5,
          }}
          className="mt-10 md:mt-14"
        >
          <Button href="/courses">
            ابدأ رحلتك
          </Button>
        </motion.div>

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