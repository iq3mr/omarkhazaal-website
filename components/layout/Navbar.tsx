"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
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

  const closeMenu = useCallback(() => {
    setMobileMenu(false);
  }, []);

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const updateNavbar = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }

      lastScroll = current;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.header
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{
              duration: .35,
              ease: "easeOut",
            }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">

              <div
                className={`
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${
                    scrolled
                      ? "bg-white/85 border-white/40 shadow-xl backdrop-blur-md md:backdrop-blur-2xl"
                      : "bg-white/60 border-white/25 backdrop-blur-sm md:backdrop-blur-xl"
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
                        className="group relative text-[15px] font-medium transition-colors hover:text-[#A30018]"
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

                  {/* Mobile Button */}

                  <button
                    aria-label="فتح القائمة"
                    onClick={() => setMobileMenu(true)}
                    className="
                      lg:hidden
                      p-1
                    "
                  >
                    <Menu size={28} />
                  </button>

                  {/* Logo */}

                  <Link
                    href="/"
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
  src="/eye.webp"
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
                        className="group relative text-[15px] font-medium transition-colors hover:text-[#A30018]"
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

                  <div className="lg:hidden w-8" />

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

            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-50"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: .28,
                ease: "easeOut",
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[300px]
                max-w-[82vw]
                bg-[#F8F6F1]
                shadow-2xl
                z-[60]
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
                  aria-label="إغلاق القائمة"
                  onClick={closeMenu}
                  className="p-1"
                >
                  <X size={28} />
                </button>

              </div>

              <nav className="mt-12 flex flex-col gap-8">

                {links.map((item) => (

                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      text-xl
                      font-medium
                      transition-colors
                      hover:text-[#A30018]
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