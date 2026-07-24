"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  className = "",
}: RevealProps) {

  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
              y,
            }
      }

      whileInView={
        reduceMotion
          ? {
              opacity: 1,
            }
          : {
              opacity: 1,
              y: 0,
            }
      }

      viewport={{
        once,
        amount: 0.15,
      }}

      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}

      className={className}
    >
      {children}
    </motion.div>
  );
}