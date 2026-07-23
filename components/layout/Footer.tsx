"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/iq3mr",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/iq3mr",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@omarkhazaal",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/omarkhazaal",
  },
  {
    name: "X",
    href: "https://x.com/iq33mr",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] text-white py-28">

      {/* Glow */}

      <div
        className="absolute -left-52 -bottom-52 w-[520px] h-[520px] rounded-full blur-[180px] opacity-20"
        style={{
          background: "#A30018",
        }}
      />

      <div className="container relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
         بكل بساطة, خليك افضل و راح اساعدك تكون افضل.
        </motion.h2>

        <div className="w-24 h-[2px] bg-[#A30018] mt-8 mb-10" />

        <p className="max-w-2xl text-xl leading-10 text-neutral-400">
         لا تتردد تراسلني
        </p>

        <div className="grid lg:grid-cols-2 gap-20 mt-24">

          {/* Email */}

          <div>

            <p className="text-[#A30018] uppercase tracking-[5px] text-sm">
              Email
            </p>

            <a
              href="mailto:omarkhazaal.iq@gmail.com"
              className="
                mt-5
                inline-block
                text-2xl
                md:text-3xl
                font-bold
                hover:text-[#A30018]
                transition
              "
            >
               البريد الإلكتروني
            </a>

          </div>

          {/* Social */}

          <div>

            <p className="text-[#A30018] uppercase tracking-[5px] text-sm">
              Social
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              {socials.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="
                    rounded-full
                    border
                    border-neutral-700
                    px-5
                    py-2
                    hover:bg-[#A30018]
                    hover:border-[#A30018]
                    transition
                  "
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-24 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-neutral-500">
            © 2026 أكاديمية عمر خزعل — جميع الحقوق محفوظة.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              rounded-full
              border
              border-neutral-700
              px-5
              py-2
              hover:bg-white
              hover:text-black
              transition
            "
          >
            العودة إلى الأعلى ↑
          </button>

        </div>

      </div>

    </footer>
  );
}