"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "../../components/ui/Button";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  function move(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.width / 2) / 35);
    mouseY.set((e.clientY - rect.height / 2) / 35);
  }

  return (
    <section
      onMouseMove={move}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* الخلفية الأولى */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-52
          -left-52
          w-[500px]
          h-[500px]
          sm:w-[650px]
          sm:h-[650px]
          lg:w-[900px]
          lg:h-[900px]
          rounded-full
          blur-[150px]
        "
        style={{
          background: "rgba(163,0,24,.08)",
        }}
      />

      {/* الخلفية الثانية */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-52
          -right-52
          w-[500px]
          h-[500px]
          sm:w-[650px]
          sm:h-[650px]
          lg:w-[850px]
          lg:h-[850px]
          rounded-full
          blur-[150px]
        "
        style={{
          background: "rgba(163,0,24,.06)",
        }}
      />

      {/* المحتوى */}

      <div className="container relative z-10 text-center flex flex-col items-center">

        <motion.div
          style={{
            x,
            y,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
            },
          }}
        >
          <Image
            src="/eye.png"
            alt="أكاديمية عمر خزعل"
            width={280}
            height={280}
            priority
            className="
              w-40
              sm:w-52
              md:w-64
              lg:w-72
              h-auto
              drop-shadow-[0_0_70px_rgba(163,0,24,.45)]
            "
          />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
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

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
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
            px-2
          "
        >
          الفن ليس مادة دراسية فحسب
          <br />
          بل اسلوب حياة
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .4,
          }}
          className="
            mt-10
            sm:mt-12
            md:mt-16
          "
        >
          <Button href="/courses">
            ابدأ رحلتك
          </Button>
        </motion.div>

      </div>

      {/* مؤشر النزول */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
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
      </motion.div>

      {/* دمج القسم مع القسم التالي */}

      <div className="absolute bottom-0 left-0 w-full h-40 md:h-48 bg-gradient-to-b from-transparent to-[#F5F2EB]" />
    </section>
  );
}