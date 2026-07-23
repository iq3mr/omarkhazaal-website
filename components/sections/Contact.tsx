"use client";

import { motion } from "framer-motion";

const links = [
  {
    title: "البريد الإلكتروني",
    value: "info@omarkhazaal.com",
    href: "mailto:info@omarkhazaal.com",
    icon: "✉️",
  },
  {
    title: "Instagram",
    value: "@iq3mr",
    href: "https://instagram.com/iq3mr",
    icon: "📷",
  },
  {
    title: "Facebook",
    value: "Omar Khazaal",
    href: "#",
    icon: "📘",
  },
  {
    title: "YouTube",
    value: "Omar Khazaal",
    href: "#",
    icon: "▶️",
  },
];

export default function Contact() {
  return (
    <section className="py-40">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] tracking-[8px] uppercase text-sm"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl md:text-7xl font-black"
        >
          تواصل معي
        </motion.h2>

        <p className="mt-8 text-xl text-neutral-600 leading-10 max-w-3xl">
          إذا كنت ترغب في التعاون، الاستفسار عن دورة، أو لديك مشروع فني أو أكاديمي،
          يسعدني التواصل معك.
        </p>

        <div className="mt-20 space-y-8">
          {links.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-neutral-300
                py-8
              "
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#A30018] text-white flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-neutral-500">{item.title}</p>

                  <h3 className="text-2xl font-bold mt-1">
                    {item.value}
                  </h3>
                </div>
              </div>

              <span
                className="
                  text-[#A30018]
                  text-3xl
                  transition
                  duration-300
                  group-hover:-translate-y-2
                  group-hover:translate-x-2
                "
              >
                ↖
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}