"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useVelocity,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";

interface DraggableEyeProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  inactivityTimeoutMs?: number;
}

export default function DraggableEye({
  src = "/eye.webp",
  alt = "عمر خزعل",
  width = 320,
  height = 320,
  className = "w-44 sm:w-56 md:w-68 lg:w-80 h-auto",
  inactivityTimeoutMs = 15000,
}: DraggableEyeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({
    left: -1000,
    right: 1000,
    top: -1000,
    bottom: 5000,
  });

  // Motion values for smooth 2D positioning & velocity-driven rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Velocity tracking for dynamic rotation tilt
  const xVelocity = useVelocity(x);
  const rotateRaw = useTransform(xVelocity, [-1500, 0, 1500], [-18, 0, 18]);
  const rotate = useSpring(rotateRaw, { stiffness: 250, damping: 25 });

  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Smoothly return eye to center (0,0) after inactivity
  const returnToOrigin = useCallback(() => {
    animate(x, 0, {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    });
    animate(y, 0, {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    });
  }, [x, y]);

  // Reset 15s inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      returnToOrigin();
    }, inactivityTimeoutMs);
  }, [inactivityTimeoutMs, returnToOrigin]);

  // Calculate full document boundaries so Eye can be dragged across the ENTIRE page
  const updateConstraints = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
    );
    const docWidth = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      window.innerWidth
    );

    const absoluteTop = rect.top + scrollY;
    const absoluteLeft = rect.left + scrollX;

    const padding = 20;

    setConstraints({
      left: -(absoluteLeft - padding),
      right: docWidth - (absoluteLeft + rect.width + padding),
      top: -(absoluteTop - padding),
      bottom: docHeight - (absoluteTop + rect.height + padding),
    });
  }, []);

  useEffect(() => {
    updateConstraints();
    window.addEventListener("resize", updateConstraints, { passive: true });
    window.addEventListener("scroll", updateConstraints, { passive: true });

    // Initial timer on mount
    resetInactivityTimer();

    return () => {
      window.removeEventListener("resize", updateConstraints);
      window.removeEventListener("scroll", updateConstraints);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [updateConstraints, resetInactivityTimer]);

  const handleDragStart = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
  };

  const handleDragEnd = () => {
    resetInactivityTimer();
  };

  return (
    <div ref={containerRef} className="relative inline-block z-[100]">
      <motion.div
        drag
        dragConstraints={constraints}
        dragElastic={0.15}
        dragSnapToOrigin={false}
        dragTransition={{
          power: 0.25,
          timeConstant: 250,
          modifyTarget: (target) => target,
          bounceStiffness: 180,
          bounceDamping: 18,
        }}
        style={{ x, y, rotate }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 1.04 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="cursor-grab active:cursor-grabbing touch-none select-none relative inline-block group"
      >
        {/* Subtle Ambient Glow Behind Eye */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#A30018]/25 via-[#C5A059]/25 to-[#A30018]/25 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          draggable={false}
          sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
          className={`relative h-auto drop-shadow-[0_15px_35px_rgba(163,0,24,.35)] pointer-events-none ${className}`}
        />
      </motion.div>
    </div>
  );
}
