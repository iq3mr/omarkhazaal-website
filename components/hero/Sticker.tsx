"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  initialRotate?: number;
  initialX?: number | string;
  initialY?: number | string;
  badge?: string;
  badgeColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Sticker({
  children,
  className = "",
  initialRotate = 0,
  initialX = 0,
  initialY = 0,
  badge,
  badgeColor = "bg-red-600",
  onClick,
  style,
}: StickerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={constraintsRef}
      drag
      dragElastic={0.15}
      dragMomentum={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      initial={{
        rotate: initialRotate,
        x: initialX,
        y: initialY,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: initialRotate,
      }}
      whileHover={{
        scale: 1.06,
        rotate: initialRotate * 0.5,
        zIndex: 40,
        filter: "drop-shadow(0 20px 25px rgba(220, 38, 38, 0.15))",
      }}
      whileDrag={{
        scale: 1.12,
        rotate: 0,
        zIndex: 50,
        cursor: "grabbing",
        filter: "drop-shadow(0 30px 40px rgba(0, 0, 0, 0.22))",
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={() => {
        if (!isDragging && onClick) {
          onClick();
        }
      }}
      style={
        {
          touchAction: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitUserDrag: "none",
          ...style,
        } as React.CSSProperties
      }
      className={`
        absolute
        cursor-grab
        will-change-transform
        select-none
        transition-shadow
        duration-300
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
