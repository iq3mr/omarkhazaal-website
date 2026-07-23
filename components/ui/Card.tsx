"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  delay?: number;
};

export default function Card({
  children,
  href,
  className = "",
  delay = 0,
}: CardProps) {
  const content = (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-200/80
        bg-white/70
        backdrop-blur-xl
        shadow-sm
        transition-all
        duration-500
        hover:border-[#A30018]/30
        hover:shadow-2xl
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(163,0,24,.06), transparent 55%)",
        }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}