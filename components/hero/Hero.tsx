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
    if (window.innerWidth < 1024) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.width / 2) / 35);
    mouseY.set((e.clientY - rect.height / 2) / 35);
  }

  return (
    <section
      onMouseMove={move}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        pt-32
        pb-24
      "
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
          w-[420px]
          h-[420px]
          sm:w-[600px]
          sm:h-[600px]
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
          w-[420px]
          h-[420px]
          sm:w-[600px]
          sm:h-[600px]
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

      <div className="container relative z-10">

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          <motion.div
            style={{ x, y }}
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
                w-28
                sm:w-40
                md:w-56
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
              mt-8
              text-3xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[1.15]
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
              mt-7
              max-w-3xl
              text-sm
              sm:text-base
              md:text-xl
              leading-8
              md:leading-10
              text-neutral-600
            "
          >
            الفن ليس مادة دراسية فحسب
            <br />
            بل أسلوب حياة.

            <br className="hidden md:block" />

            <span className="hidden md:inline">
              منصة عربية حديثة لتعليم الفن والرسم والتصميم
              وصناعة المحتوى وفق منهج أكاديمي معاصر.
            </span>
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
              flex
              flex-col
              sm:flex-row
              gap-4
              w-full
              sm:w-auto
              justify-center
            "
          >
            <Button href="/courses">
              ابدأ رحلتك
            </Button>

            <Button
              href="/books"
              variant="secondary"
            >
              تصفح الكتب
            </Button>

          </motion.div>

        </div>

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
          lg:block
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#A30018] to-transparent" />
      </motion.div>

      {/* دمج القسم مع القسم التالي */}

      <div className="absolute bottom-0 left-0 w-full h-28 md:h-48 bg-gradient-to-b from-transparent to-[#F5F2EB]" />
    </section>
  );
}