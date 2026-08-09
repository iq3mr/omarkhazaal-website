"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { Type, MoveVertical, Sparkles, SlidersHorizontal } from "lucide-react";
import { parseQuranJson, ParsedSurah } from "../../lib/loadQuranJson";

export default function QuranPage() {
  const [surahs, setSurahs] = useState<ParsedSurah[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Typography Controls
  const [fontSize, setFontSize] = useState<number>(26);
  const [lineHeight, setLineHeight] = useState<number>(2.6);
  const [selectedFont, setSelectedFont] = useState<string>("font-quran-serif");

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isPointerInsideRef = useRef(false);

  const targetPosRef = useRef({ x: -1000, y: -1000 });
  const currentPosRef = useRef({ x: -1000, y: -1000 });

  // Ultra-Fast 120fps Inertial Lerp Animation Loop (GPU Hardware Accelerated)
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    animateRef.current = () => {
      if (!containerRef.current) return;

      const lerpFactor = 0.15;
      currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor;
      currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor;

      containerRef.current.style.setProperty("--spotlight-x", `${currentPosRef.current.x}px`);
      containerRef.current.style.setProperty("--spotlight-y", `${currentPosRef.current.y}px`);

      const dist = Math.hypot(
        targetPosRef.current.x - currentPosRef.current.x,
        targetPosRef.current.y - currentPosRef.current.y
      );

      if (dist > 0.1 || isPointerInsideRef.current) {
        animationFrameRef.current = requestAnimationFrame(() => animateRef.current());
      } else {
        animationFrameRef.current = null;
      }
    };
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isPointerInsideRef.current = true;

    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(() => animateRef.current());
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPosRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
    isPointerInsideRef.current = true;

    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(() => animateRef.current());
    }
  };

  const handlePointerLeave = () => {
    isPointerInsideRef.current = false;
  };

  // Fetch full quran.json dataset with live progress tracking
  useEffect(() => {
    let isMounted = true;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/quran/quran.json");

    xhr.onprogress = (e) => {
      if (!isMounted) return;
      const totalEst = e.lengthComputable && e.total > 0 ? e.total : 3783592;
      const pct = Math.min(99, Math.round((e.loaded / totalEst) * 100));
      setLoadingProgress(pct);
    };

    xhr.onload = () => {
      if (!isMounted) return;
      if (xhr.status === 200) {
        setLoadingProgress(100);
        try {
          const data = JSON.parse(xhr.responseText);
          const parsed = parseQuranJson(data);
          setSurahs(parsed);
          setTimeout(() => {
            if (isMounted) setLoading(false);
          }, 300);
        } catch (err) {
          console.error("Error parsing quran.json:", err);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    xhr.onerror = () => {
      if (isMounted) setLoading(false);
    };

    xhr.send();

    return () => {
      isMounted = false;
      xhr.abort();
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
        <div className="text-center pt-4 pb-6 flex flex-col items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-widest uppercase shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            <span>الْقُرْآنُ الْكَرِيمُ</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
          </motion.div>

          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-serif font-black leading-tight text-[#F5F2EB] tracking-wide">
            الْقُرْآنُ الْكَرِيمُ
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#C5A059] font-serif tracking-widest opacity-80">
            مِنْ سُورَةِ الْفَاتِحَةِ إِلَى سُورَةِ النَّاسِ
          </p>

          {/* Interactive Typography Toolbar (أداة التحكم بالخطوط والسطور) */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-6 p-2 px-4 rounded-full bg-white/5 backdrop-blur-2xl border border-[#C5A059]/35 shadow-2xl z-30">
            {/* Arabic Font Selector */}
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#C5A059]" />
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="bg-[#141414] border border-[#C5A059]/30 text-xs text-[#F5F2EB] font-bold py-1.5 px-3 rounded-full focus:outline-none focus:border-[#C5A059] cursor-pointer"
              >
                <option value="font-quran-serif">خط الثماني العريض</option>
                <option value="font-amiri">الخط الأميري الأصيل</option>
                <option value="font-scheherazade">خط النسخ القرآني</option>
                <option value="font-quran-sans">خط الثماني الحديث</option>
              </select>
            </div>

            <div className="w-[1px] h-5 bg-white/10 hidden sm:block" />

            {/* Font Size Adjuster */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] text-neutral-400 font-bold">الحجم:</span>
              <div className="flex items-center gap-1 bg-[#141414] border border-white/10 px-2 py-0.5 rounded-full">
                <button
                  onClick={() => setFontSize((prev) => Math.max(18, prev - 2))}
                  className="w-5 h-5 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
                <span className="w-6 text-center font-mono font-bold text-white text-xs">{fontSize}</span>
                <button
                  onClick={() => setFontSize((prev) => Math.min(48, prev + 2))}
                  className="w-5 h-5 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-[1px] h-5 bg-white/10 hidden sm:block" />

            {/* Line Spacing Adjuster */}
            <div className="flex items-center gap-2">
              <MoveVertical className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] text-neutral-400 font-bold">السطور:</span>
              <div className="flex items-center gap-1 bg-[#141414] border border-white/10 px-2 py-0.5 rounded-full">
                <button
                  onClick={() => setLineHeight((prev) => Math.max(1.8, parseFloat((prev - 0.2).toFixed(1))))}
                  className="w-5 h-5 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-xs">{lineHeight.toFixed(1)}</span>
                <button
                  onClick={() => setLineHeight((prev) => Math.min(3.4, parseFloat((prev + 0.2).toFixed(1))))}
                  className="w-5 h-5 rounded-full bg-neutral-800 hover:bg-[#C5A059] hover:text-black transition flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Museum Progress Loading Indicator */}
        {loading && (
          <div className="max-w-md mx-auto px-6 py-20 text-center flex flex-col items-center justify-center relative z-20">
            <div className="font-serif text-[#C5A059] text-sm sm:text-base mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin text-[#C5A059]" />
              <span>جَارٍ تَحْمِيلُ النَّصِّ الْقُرْآنِيِّ الْكِلاَسِيكِيِّ...</span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-3 rounded-full bg-neutral-900 border border-[#C5A059]/40 p-[2px] overflow-hidden shadow-2xl relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#C5A059]/60 via-[#C5A059] to-[#FFF0B0] transition-all duration-300 shadow-[0_0_12px_rgba(197,160,89,0.8)]"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            {/* Percentage Text */}
            <div className="mt-3 font-mono text-xs font-bold text-[#C5A059] tracking-widest">
              {loadingProgress}%
            </div>
          </div>
        )}

        {/* Full Page Flowing Manuscript Container */}
        {!loading && (
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 relative">
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchMove}
              onTouchEnd={handlePointerLeave}
              className="relative w-full overflow-hidden bg-[#050505] cursor-crosshair select-text py-6"
              style={
                {
                  "--spotlight-x": "50%",
                  "--spotlight-y": "350px",
                } as React.CSSProperties
              }
            >
              {/* Soft Ambient Light Aura Following Mouse */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-25"
                style={{
                  background:
                    "radial-gradient(circle 600px at var(--spotlight-x) var(--spotlight-y), rgba(197, 160, 89, 0.09) 0%, rgba(197, 160, 89, 0.02) 45%, transparent 80%)",
                }}
              />

              {/* Base Layer: Low-Contrast Manuscript Text Filling Full Page */}
              <div
                className={`relative z-10 text-justify text-neutral-600/35 transition-all duration-300 ${selectedFont}`}
                style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}
              >
                {surahs.map((surah, idx) => (
                  <div key={idx} className="mb-14 relative">
                    {/* Surah Header Line */}
                    <div className="text-center my-6 py-2 border-y border-[#C5A059]/20">
                      <span className="text-xs sm:text-sm font-bold text-[#C5A059] tracking-widest">
                        {surah.title}
                      </span>
                    </div>

                    {/* Verses Text */}
                    <p className="text-justify tracking-normal selection:bg-[#C5A059] selection:text-black">
                      {surah.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Spotlight Layer: Masked Luminous High-Contrast Illuminated Text with 120fps GPU Composite Mask */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 py-6 pointer-events-none z-20 text-justify text-[#F5F2EB] transition-all duration-150 ${selectedFont}`}
                style={{
                  fontSize: `${fontSize}px`,
                  lineHeight: lineHeight,
                  textShadow: "0 0 18px rgba(197, 160, 89, 0.75), 0 0 35px rgba(255, 255, 255, 0.35)",
                  WebkitMaskImage:
                    "radial-gradient(circle 280px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.15) 70%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle 280px at var(--spotlight-x) var(--spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.15) 70%, transparent 100%)",
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

                    {/* Verses Text */}
                    <p className="text-justify tracking-normal text-[#F5F2EB]">
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
