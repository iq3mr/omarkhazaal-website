"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Search, ArrowUp } from "lucide-react";
import MusicButton from "../../components/ui/MusicButton";
import { QURAN_SURAHS } from "../../lib/quranData";

export default function PersonalMuseumPage() {
  const [fontSize, setFontSize] = useState<number>(24);
  const [searchQuery, setSearchQuery] = useState("");
  const [showIndex, setShowIndex] = useState(false);
  const [ambientGlow, setAmbientGlow] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  // Update spotlight position via CSS Variables with requestAnimationFrame for 120fps hardware acceleration
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
    // Initial center spotlight fallback
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--spotlight-x", `${rect.width / 2}px`);
      containerRef.current.style.setProperty("--spotlight-y", `300px`);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const filteredSurahs = QURAN_SURAHS.filter(
    (s) => s.name.includes(searchQuery) || s.englishName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToSurah = (num: number) => {
    setShowIndex(false);
    const element = document.getElementById(`surah-${num}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#050505] text-[#F5F2EB] min-h-screen pt-28 pb-24 selection:bg-[#C5A059] selection:text-black">
        {/* Header Title Section */}
        <div className="container text-center pt-4 pb-10 flex flex-col items-center relative z-20">
          {/* Museum Audio Music Player Button */}
          <div className="mb-4">
            <MusicButton audioSrc="/audio/museummusic.ogg" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            <span>القرآن الكريم</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
          </motion.div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-serif font-black leading-tight text-[#F5F2EB] tracking-wide">
            الْقُرْآنُ الْكَرِيمُ
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#C5A059] font-serif tracking-widest opacity-90">
            مِنْ سُورَةِ الْفَاتِحَةِ إِلَى سُورَةِ النَّاسِ
          </p>

          {/* Quick Floating Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 p-2 rounded-full bg-white/5 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl">
            <button
              onClick={() => setShowIndex(!showIndex)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#181818] border border-[#C5A059]/40 text-xs font-bold text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>فهرس السور</span>
            </button>

            {/* Font Size Adjusters */}
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#141414] border border-white/10 text-xs text-neutral-400">
              <span className="text-[10px] ml-1 text-neutral-500 font-bold">حجم الخط:</span>
              <button
                onClick={() => setFontSize((prev) => Math.max(18, prev - 2))}
                className="w-6 h-6 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold"
              >
                -
              </button>

              <span className="w-6 text-center font-mono font-bold text-white text-xs">{fontSize}</span>

              <button
                onClick={() => setFontSize((prev) => Math.min(42, prev + 2))}
                className="w-6 h-6 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>

            {/* Ambient Glow Toggle */}
            <button
              onClick={() => setAmbientGlow(!ambientGlow)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                ambientGlow
                  ? "bg-[#C5A059]/20 border-[#C5A059] text-[#C5A059]"
                  : "bg-neutral-900 border-neutral-700 text-neutral-400"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>إضاءة هادئة</span>
            </button>
          </div>
        </div>

        {/* Index Drawer Modal */}
        <AnimatePresence>
          {showIndex && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 mb-10 relative z-30"
            >
              <div className="p-6 rounded-3xl bg-[#121212] border border-[#C5A059]/40 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>فهرس السور المباركة</span>
                  </div>

                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="ابحث عن سورة..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pr-9 pl-4 py-1.5 rounded-full bg-black/60 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                  {filteredSurahs.map((surah) => (
                    <button
                      key={surah.number}
                      onClick={() => scrollToSurah(surah.number)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/80 hover:bg-[#C5A059] hover:text-black border border-neutral-800 transition-all duration-300 group text-right"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-black/40 group-hover:bg-black/80 group-hover:text-[#C5A059] text-[10px] font-mono font-bold flex items-center justify-center text-[#C5A059]">
                          {surah.number}
                        </span>
                        <span className="text-xs font-serif font-bold">{surah.name}</span>
                      </div>
                      <span className="text-[10px] opacity-60 font-serif">{surah.revelationType}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Interactive Digital Manuscript Canvas */}
        <div className="max-w-6xl mx-auto px-4 relative">
          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-[40px] p-6 sm:p-12 md:p-16 border border-[#C5A059]/20 bg-[#0A0A0A] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] cursor-crosshair select-text"
            style={
              {
                "--spotlight-x": "50%",
                "--spotlight-y": "300px",
              } as React.CSSProperties
            }
          >
            {/* Ambient Background Aura Glow */}
            {ambientGlow && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle 600px at var(--spotlight-x) var(--spotlight-y), rgba(197, 160, 89, 0.08) 0%, transparent 80%)",
                }}
              />
            )}

            {/* Base Layer: Low-Contrast Manuscript Text */}
            <div
              className="relative z-10 font-serif leading-[2.6] text-justify text-neutral-600/35 transition-all duration-300"
              style={{ fontSize: `${fontSize}px` }}
            >
              {QURAN_SURAHS.map((surah) => (
                <div id={`surah-${surah.number}`} key={surah.number} className="mb-16 relative">
                  {/* Surah Frame Header */}
                  <div className="text-center my-8 py-4 border-y border-[#C5A059]/20 bg-gradient-to-r from-transparent via-[#C5A059]/10 to-transparent">
                    <span className="text-xs font-bold text-[#C5A059] tracking-widest block mb-1">
                      سُورَةُ {surah.name} • {surah.revelationType} ({surah.versesCount} آياتها)
                    </span>
                  </div>

                  {/* Bismillah */}
                  {surah.bismillah && (
                    <div className="text-center my-6 font-serif text-[#C5A059]/60 text-lg sm:text-xl">
                      بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>
                  )}

                  {/* Verses Text */}
                  <p className="text-justify font-serif tracking-normal selection:bg-[#C5A059] selection:text-black">
                    {surah.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Spotlight Layer: Masked Luminous High-Contrast Illuminated Text */}
            <div
              aria-hidden="true"
              className="absolute inset-0 p-6 sm:p-12 md:p-16 pointer-events-none z-20 font-serif leading-[2.6] text-justify text-[#F5F2EB] transition-all duration-150"
              style={{
                fontSize: `${fontSize}px`,
                textShadow: "0 0 16px rgba(197, 160, 89, 0.5), 0 0 30px rgba(255, 255, 255, 0.2)",
                WebkitMaskImage:
                  "radial-gradient(circle 260px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle 260px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
              }}
            >
              {QURAN_SURAHS.map((surah) => (
                <div key={`spotlight-${surah.number}`} className="mb-16 relative">
                  {/* Surah Frame Header */}
                  <div className="text-center my-8 py-4 border-y border-[#C5A059] bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent">
                    <span className="text-xs font-bold text-[#C5A059] tracking-widest block mb-1">
                      سُورَةُ {surah.name} • {surah.revelationType} ({surah.versesCount} آياتها)
                    </span>
                  </div>

                  {/* Bismillah */}
                  {surah.bismillah && (
                    <div className="text-center my-6 font-serif text-[#C5A059] text-lg sm:text-xl font-bold">
                      بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>
                  )}

                  {/* Verses Text */}
                  <p className="text-justify font-serif tracking-normal text-[#F5F2EB]">
                    {surah.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Back To Top Floating Action */}
        <div className="fixed bottom-8 left-8 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 rounded-full museum-plaque border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 flex items-center justify-center shadow-2xl group"
            title="العودة لأعلى الصفحة"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
