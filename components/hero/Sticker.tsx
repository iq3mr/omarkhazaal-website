"use client";

import React from "react";
import { motion } from "framer-motion";

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  initialRotate?: number;
  badge?: string;
  badgeColor?: string;
  style?: React.CSSProperties;
}

export default function Sticker({
  children,
  className = "",
  initialRotate = 0,
  badge,
  badgeColor = "bg-red-600",
  style,
}: StickerProps) {
  return (
    <motion.div
      drag
      dragSnapToOrigin={false}
      dragMomentum={false}
      dragElastic={0.05}
      initial={{
        rotate: initialRotate,
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 40,
        filter: "drop-shadow(0 20px 25px rgba(220, 38, 38, 0.18))",
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 50,
        cursor: "grabbing",
        filter: "drop-shadow(0 25px 35px rgba(0, 0, 0, 0.25))",
      }}
      style={
        {
          touchAction: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          cursor: "grab",
          ...style,
        } as React.CSSProperties
      }
      className={`
        absolute
        will-change-transform
        select-none
        ${className}
      `}
    >
      {badge && (
        <span
          className={`
            absolute
            -top-3
            -right-2
            z-10
            px-2.5
            py-0.5
            text-[10px]
            font-bold
            text-white
            rounded-full
            shadow-md
            pointer-events-none
            tracking-wider
            uppercase
            ${badgeColor}
          `}
        >
          {badge}
        </span>
      )}
      {children}
    </motion.div>
  );
}
