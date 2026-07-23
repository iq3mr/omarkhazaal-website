"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-80
          -left-80
          w-[900px]
          h-[900px]
          rounded-full
          blur-[180px]
          opacity-20
        "
        style={{
          background: "#A30018",
        }}
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-96
          -right-96
          w-[900px]
          h-[900px]
          rounded-full
          blur-[180px]
          opacity-15
        "
        style={{
          background: "#A30018",
        }}
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
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