"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { Type, MoveVertical, Sparkles, SlidersHorizontal } from "lucide-react";
import { parseQuranJson, ParsedSurah } from "../../lib/loadQuranJson";

interface WordPosCache {
  el: HTMLElement;
  cx: number;
  cy: number;
}

export default function PersonalMuseumPage() {
  const [surahs, setSurahs] = useState<ParsedSurah[]>([]);
  const [loading, setLoading] = useState(true);

  // Typography Controls
  const [fontSize, setFontSize] = useState<number>(26);
  const [lineHeight, setLineHeight] = useState<number>(2.6);
  const [selectedFont, setSelectedFont] = useState<string>("font-quran-serif");

  const containerRef = useRef<HTMLDivElement>(null);
  const wordCacheRef = useRef<WordPosCache[]>([]);
  const activeLitWordsRef = useRef<Set<HTMLElement>>(new Set());

  const animationFrameRef = useRef<number | null>(null);
  const isPointerInsideRef = useRef(false);

  const targetPosRef = useRef({ x: -1000, y: -1000 });
  const currentPosRef = useRef({ x: -1000, y: -1000 });

  // Measure & cache exact word positions after DOM layout renders or resizes
  const cacheWordPositions = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const wordElements = containerRef.current.querySelectorAll<HTMLElement>(".quran-word-node");

    const cache: WordPosCache[] = [];
    wordElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      cache.push({
        el,
        cx: rect.left - containerRect.left + rect.width / 2,
        cy: rect.top - containerRect.top + rect.height / 2,
      });
    });

    wordCacheRef.current = cache;
  };

  // High-Performance RAF Lerp & Word Distance Illumination Engine (120fps GPU execution)
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    animateRef.current = () => {
      if (!containerRef.current) return;

      // 1. Inertial Smooth Light Beam Tracking
      const lerpFactor = 0.14;
      currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor;
      currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor;

      const lightX = currentPosRef.current.x;
      const lightY = currentPosRef.current.y;

      containerRef.current.style.setProperty("--spotlight-x", `${lightX}px`);
      containerRef.current.style.setProperty("--spotlight-y", `${lightY}px`);

      // 2. Word Proximity Distance Illumination Calculation
      const spotlightRadius = 260; // Light beam radius in pixels
      const currentlyLit = new Set<HTMLElement>();

      if (isPointerInsideRef.current && wordCacheRef.current.length > 0) {
        const cache = wordCacheRef.current;
        const len = cache.length;

        for (let i = 0; i < len; i++) {
          const item = cache[i];
          // Quick vertical bounds check (only calculate words within 300px Y range)
          const dy = Math.abs(lightY - item.cy);
          if (dy > spotlightRadius) continue;

          const dx = Math.abs(lightX - item.cx);
          if (dx > spotlightRadius) continue;

          const dist = Math.hypot(dx, dy);
          if (dist < spotlightRadius) {
            const factor = 1 - dist / spotlightRadius;
            const eased = factor * factor; // Soft smooth radial falloff

            item.el.style.opacity = `${0.28 + eased * 0.72}`;
            item.el.style.color = eased > 0.25 ? "#FFFFFF" : "#F5F2EB";
            item.el.style.textShadow = eased > 0.08
              ? `0 0 ${14 * eased}px rgba(197, 160, 89, ${0.85 * eased}), 0 0 ${28 * eased}px rgba(255, 255, 255, ${0.45 * eased})`
              : "none";
            item.el.style.transform = eased > 0.05 ? `scale(${1 + 0.035 * eased}) translateZ(0)` : "none";

            currentlyLit.add(item.el);
          }
        }
      }

      // 3. Reset previously lit words that are now outside the light beam
      activeLitWordsRef.current.forEach((el) => {
        if (!currentlyLit.has(el)) {
          el.style.opacity = "";
          el.style.color = "";
          el.style.textShadow = "";
          el.style.transform = "";
        }
      });
      activeLitWordsRef.current = currentlyLit;

      // 4. Continue animation loop while light is moving or cursor inside
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

  const handlePointerLeave = () => {
    isPointerInsideRef.current = false;
    // Reset all lit word styles on pointer leave
    activeLitWordsRef.current.forEach((el) => {
      el.style.opacity = "";
      el.style.color = "";
      el.style.textShadow = "";
      el.style.transform = "";
    });
    activeLitWordsRef.current.clear();
  };

  // Fetch full quran.json dataset
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

    return () => {
      isMounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Recalculate word positions after rendering, font size change, line height change, or window resize
  useEffect(() => {
    if (loading || !containerRef.current) return;

    // Run after DOM paint
    const timer = setTimeout(() => {
      cacheWordPositions();
    }, 100);

    const observer = new ResizeObserver(() => {
      cacheWordPositions();
    });

    observer.observe(containerRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading, fontSize, lineHeight, selectedFont, surahs]);

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
              onPointerLeave={handlePointerLeave}
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
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle 500px at var(--spotlight-x) var(--spotlight-y), rgba(197, 160, 89, 0.08) 0%, rgba(197, 160, 89, 0.02) 40%, transparent 80%)",
                }}
              />

              {/* Manuscript Text Container with Per-Word Proximity Illumination */}
              <div
                className={`relative z-10 text-justify transition-all duration-300 ${selectedFont}`}
                style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}
              >
                {surahs.map((surah, idx) => (
                  <div key={idx} className="mb-14 relative group/surah">
                    {/* Surah Header Line */}
                    <div className="text-center my-6 py-2 border-y border-[#C5A059]/25 transition-colors duration-300 group-hover/surah:border-[#C5A059]/50">
                      <span className="text-xs sm:text-sm font-bold text-[#C5A059] tracking-widest">
                        {surah.title}
                      </span>
                    </div>

                    {/* Verses & Words Structure with quran-word-node className */}
                    <div className="text-justify tracking-normal selection:bg-[#C5A059] selection:text-black">
                      {surah.verses.map((verse, vIdx) => (
                        <span key={vIdx} className="inline group/verse">
                          {verse.words.map((word, wIdx) => (
                            <span
                              key={wIdx}
                              className="quran-word-node inline-block px-[2px] opacity-35 text-[#F5F2EB] transition-all duration-200"
                            >
                              {word}{" "}
                            </span>
                          ))}
                          <span className="quran-word-node inline-block px-1 font-bold text-[#C5A059] opacity-50 transition-all duration-200">
                            {verse.number}{" "}
                          </span>
                        </span>
                      ))}
                    </div>
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
