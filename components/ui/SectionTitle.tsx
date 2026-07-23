"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "right",
}: Props) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-right";

  return (
    <div className={`max-w-4xl ${alignment}`}>

      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-sm
            tracking-[6px]
            uppercase
            text-[#A30018]
          "
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="
          mt-5
          text-5xl
          md:text-7xl
          font-black
          leading-tight
        "
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          className="
            mt-8
            text-xl
            leading-10
            text-neutral-600
            max-w-3xl
          "
        >
          {description}
        </motion.p>
      )}

    </div>
  );
}