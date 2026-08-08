"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { parseQuranJson, ParsedSurah } from "../../lib/loadQuranJson";

export default function PersonalMuseumPage() {
  const [surahs, setSurahs] = useState<ParsedSurah[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  // Update spotlight position via CSS variables with requestAnimationFrame for 120fps smooth performance
  const updateSpotlight = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = mousePosRef.current.x - rect.left;
      const relativeY = mousePosRef.current.y - rect.top;

      containerRef.current.style.setProperty("--spotlight-x", `${relativeX}px`);
      containerRef.current.style.setProperty("--spotlight-y", `${relativeY}px`);
    }
    animationFrameRef.current = null;
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY };
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(updateSpotlight);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(updateSpotlight);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function loadQuran() {
      try {
        const res = await fetch("/quran/quran.json");
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            const parsed = parseQuranJson(data);
            setSurahs(parsed);
            setLoading(false);
          }
        } else {
          if (isMounted) setLoading(false);
        }
      } catch (err) {
        console.error("Error loading quran.json:", err);
        if (isMounted) setLoading(false);
      }
    }

    loadQuran();

    // Initial center spotlight fallback
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--spotlight-x", `${rect.width / 2}px`);
      containerRef.current.style.setProperty("--spotlight-y", `350px`);
    }

    return () => {
      isMounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-[#F5F2EB] min-h-screen pt-28 pb-20 selection:bg-[#C5A059] selection:text-black">
        {/* Minimal Museum Header Title */}
        <div className="text-center pt-4 pb-8 flex flex-col items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-widest uppercase shadow-2xl"
          >
            <span>الْقُرْآنُ الْكَرِيمُ</span>
          </motion.div>

          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-serif font-black leading-tight text-[#F5F2EB] tracking-wide">
            الْقُرْآنُ الْكَرِيمُ
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#C5A059] font-serif tracking-widest opacity-80">
            مِنْ سُورَةِ الْفَاتِحَةِ إِلَى سُورَةِ النَّاسِ
          </p>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center py-20 font-serif text-[#C5A059] text-sm animate-pulse">
            جَارٍ تَحْمِيلُ النَّصِّ الْقُرْآنِيِّ الْكِلاَسِيكِيِّ...
          </div>
        )}

        {/* Full Page Flowing Manuscript Container */}
        {!loading && (
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 relative">
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onTouchMove={handleTouchMove}
              className="relative w-full overflow-hidden bg-[#050505] cursor-crosshair select-text py-6"
              style={
                {
                  "--spotlight-x": "50%",
                  "--spotlight-y": "350px",
                } as React.CSSProperties
              }
            >
              {/* Soft Ambient Light Aura */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-25"
                style={{
                  background:
                    "radial-gradient(circle 700px at var(--spotlight-x) var(--spotlight-y), rgba(197, 160, 89, 0.09) 0%, transparent 80%)",
                }}
              />

              {/* Base Layer: Low-Contrast Manuscript Text Filling Full Page */}
              <div className="relative z-10 font-serif text-lg sm:text-2xl md:text-3xl leading-[2.6] text-justify text-neutral-600/30 transition-all duration-300">
                {surahs.map((surah, idx) => (
                  <div key={idx} className="mb-14 relative">
                    {/* Surah Header Line */}
                    <div className="text-center my-6 py-2 border-y border-[#C5A059]/20">
                      <span className="text-xs sm:text-sm font-bold text-[#C5A059] tracking-widest">
                        {surah.title}
                      </span>
                    </div>

                    {/* Surah Body Verses */}
                    <p className="text-justify font-serif tracking-normal selection:bg-[#C5A059] selection:text-black">
                      {surah.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Spotlight Layer: Masked Luminous High-Contrast Illuminated Text */}
              <div
                aria-hidden="true"
                className="absolute inset-0 py-6 pointer-events-none z-20 font-serif text-lg sm:text-2xl md:text-3xl leading-[2.6] text-justify text-[#F5F2EB] transition-all duration-150"
                style={{
                  textShadow: "0 0 16px rgba(197, 160, 89, 0.55), 0 0 30px rgba(255, 255, 255, 0.25)",
                  WebkitMaskImage:
                    "radial-gradient(circle 280px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle 280px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
                }}
              >
                {surahs.map((surah, idx) => (
                  <div key={`spotlight-${idx}`} className="mb-14 relative">
                    {/* Surah Header Line */}
                    <div className="text-center my-6 py-2 border-y border-[#C5A059]">
                      <span className="text-xs sm:text-sm font-bold text-[#C5A059] tracking-widest">
                        {surah.title}
                      </span>
                    </div>

                    {/* Surah Body Verses */}
                    <p className="text-justify font-serif tracking-normal text-[#F5F2EB]">
                      {surah.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
