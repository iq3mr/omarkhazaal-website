"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "الدورات", href: "/courses" },
  { name: "الكتب", href: "/books" },
  { name: "دفترنا", href: "/journal" },
  { name: "عن عمر خزعل", href: "/about" },
  { name: "تواصل", href: "/contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -120 }}
          animate={{ y: 0 }}
          exit={{ y: -120 }}
          transition={{ duration: 0.45 }}
          className="fixed top-0 inset-x-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-6 pt-5">

            <div
              className={`
                rounded-full
                transition-all
                duration-500
                border
                ${
                  scrolled
                    ? "bg-white/80 border-white/40 shadow-2xl backdrop-blur-3xl"
                    : "bg-white/45 border-white/25 backdrop-blur-xl"
                }
              `}
            >
              <div className="h-20 grid grid-cols-3 items-center">

                {/* القائمة */}
                <nav className="hidden lg:flex items-center justify-center gap-8">

                  {links.slice(0, 3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative text-[15px] font-medium transition hover:text-[#A30018]"
                    >
                      {item.name}

                      <span
                        className="
                          absolute
                          -bottom-2
                          right-0
                          h-[2px]
                          w-0
                          bg-[#A30018]
                          transition-all
                          duration-300
                          group-hover:w-full
                        "
                      />
                    </Link>
                  ))}

                </nav>

                {/* الشعار */}
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center"
                >

                  <Image
                    src="/eye.png"
                    alt="Academy"
                    width={46}
                    height={46}
                    priority
                    className="
                      drop-shadow-[0_0_18px_rgba(163,0,24,.4)]
                      transition
                      duration-500
                      hover:scale-110
                    "
                  />

                  <span className="mt-2 text-sm font-bold tracking-wide">
                    أكاديمية عمر خزعل
                  </span>

                </Link>

                {/* القائمة الثانية */}
                <nav className="hidden lg:flex items-center justify-center gap-8">

                  {links.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative text-[15px] font-medium transition hover:text-[#A30018]"
                    >
                      {item.name}

                      <span
                        className="
                          absolute
                          -bottom-2
                          right-0
                          h-[2px]
                          w-0
                          bg-[#A30018]
                          transition-all
                          duration-300
                          group-hover:w-full
                        "
                      />
                    </Link>
                  ))}

                </nav>

              </div>
            </div>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}