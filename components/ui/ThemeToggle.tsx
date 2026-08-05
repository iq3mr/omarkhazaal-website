"use client";

import { useTheme } from "../providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className={`w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "تفعيل الوضع المضيء" : "تفعيل الوضع الداكن"}
      title={isDark ? "التحويل للوضع المضيء" : "التحويل للوضع الداكن"}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        w-9
        h-9
        rounded-full
        border
        transition-all
        duration-300
        ${
          isDark
            ? "bg-[#1D1D1D] border-neutral-700 text-[#C5A059] hover:border-[#C5A059] hover:bg-[#252525]"
            : "bg-white/80 border-neutral-300 text-neutral-800 hover:border-[#A30018] hover:text-[#A30018] hover:bg-white"
        }
        shadow-sm
        backdrop-blur-md
        group
        ${className}
      `}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#C5A059] group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-700 group-hover:text-[#A30018] transition-colors duration-300" />
        )}
      </motion.div>
    </button>
  );
}
