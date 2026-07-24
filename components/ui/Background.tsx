"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Background() {

  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Glow 1 */}

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
          blur-[70px]
          md:blur-[120px]
          lg:blur-[180px]
          opacity-20
          will-change-transform
        "
        style={{
          background: "#A30018",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 80, 0],
                y: [0, -50, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow 2 */}

      <motion.div
        className="
          absolute
          -bottom-60
          -right-60
          w-[420px]
          h-[420px]
          md:w-[650px]
          md:h-[650px]
          lg:w-[900px]
          lg:h-[900px]
          rounded-full
          blur-[70px]
          md:blur-[120px]
          lg:blur-[180px]
          opacity-15
          will-change-transform
        "
        style={{
          background: "#A30018",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -70, 0],
                y: [0, 60, 0],
                scale: [1.05, 1, 1.05],
              }
        }
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

    </div>
  );
}