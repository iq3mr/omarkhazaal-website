"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? `
        bg-[#151515]
        text-white
        hover:bg-[#A30018]
      `
      : `
        border
        border-neutral-300
        text-black
        hover:border-[#A30018]
        hover:text-[#A30018]
      `;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          className={`
            inline-flex
            items-center
            justify-center
            rounded-full
            px-8
            py-4
            transition-all
            duration-300
            ${classes}
          `}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        rounded-full
        px-8
        py-4
        transition-all
        duration-300
        ${classes}
      `}
    >
      {children}
    </motion.button>
  );
}