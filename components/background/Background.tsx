"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* الخلفية الأساسية */}
      <div className="absolute inset-0 bg-[#F5F2EB]" />

      {/* توهج أحمر علوي */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-64 -left-64 w-[900px] h-[900px] rounded-full blur-[170px]"
        style={{
          background: "rgba(163,0,24,.08)",
        }}
      />

      {/* توهج سفلي */}
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
        className="absolute -bottom-80 -right-80 w-[850px] h-[850px] rounded-full blur-[180px]"
        style={{
          background: "rgba(163,0,24,.06)",
        }}
      />

      {/* شبكة دقيقة جداً */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
}