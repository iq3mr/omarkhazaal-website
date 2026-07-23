"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">

              <div
                className={`
                  rounded-full
                  border
                  transition-all
                  duration-500
                  ${
                    scrolled
                      ? "bg-white/80 border-white/40 shadow-2xl backdrop-blur-3xl"
                      : "bg-white/45 border-white/25 backdrop-blur-xl"
                  }
                `}
              >
                <div className="h-16 lg:h-20 flex items-center justify-between px-5 lg:grid lg:grid-cols-3">

                  {/* Desktop Right */}
                  <nav className="hidden lg:flex items-center justify-center gap-8">

                    {links.slice(0, 3).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group relative text-[15px] font-medium hover:text-[#A30018] transition"
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

                  {/* Mobile Menu */}
                  <button
                    onClick={() => setMobileMenu(true)}
                    className="lg:hidden"
                  >
                    <Menu size={28} />
                  </button>

                  {/* Logo */}
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
                        w-10
                        lg:w-[46px]
                        h-auto
                        drop-shadow-[0_0_18px_rgba(163,0,24,.4)]
                        transition
                        duration-500
                        hover:scale-110
                      "
                    />

                    <span className="mt-2 text-xs lg:text-sm font-bold">
                      أكاديمية عمر خزعل
                    </span>
                  </Link>

                  {/* Desktop Left */}
                  <nav className="hidden lg:flex items-center justify-center gap-8">

                    {links.slice(3).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group relative text-[15px] font-medium hover:text-[#A30018] transition"
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

                  {/* Empty Space Mobile */}
                  <div className="lg:hidden w-7" />

                </div>
              </div>

            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}

      <AnimatePresence>

        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: .3 }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-80
                bg-[#F8F6F1]
                z-[60]
                shadow-2xl
                p-8
                flex
                flex-col
              "
            >
              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  القائمة
                </h2>

                <button
                  onClick={() => setMobileMenu(false)}
                >
                  <X size={28} />
                </button>

              </div>

              <nav className="mt-12 flex flex-col gap-8">

                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                      text-xl
                      font-medium
                      hover:text-[#A30018]
                      transition
                    "
                  >
                    {item.name}
                  </Link>
                ))}

              </nav>

            </motion.aside>

          </>
        )}

      </AnimatePresence>
    </>
  );
}