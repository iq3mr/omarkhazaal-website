"use client";

import { useState, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Grid, ZoomIn, Sparkles, RefreshCw, X, Info } from "lucide-react";
import MusicButton from "../../components/ui/MusicButton";

export interface Artwork {
  id: string;
  title: string;
  eraId: string;
  eraNumeral: string;
  eraName: string;
  artistOrCivilization: string;
  year: string;
  medium: string;
  description: string;
  analysis: string;
  image: string;
  color: string;
  hotspots?: { x: number; y: number; icon: string; title: string; note: string }[];
}

// Multi-Artwork Gallery Collection
const museumArtworks: Artwork[] = [
  {
    id: "art-1",
    title: "رسوم الثيران في كهف لاسكو",
    eraId: "cave",
    eraNumeral: "𒁹",
    eraName: "فن الكهوف وما قبل التاريخ",
    artistOrCivilization: "إنسان العصر الحجري الأعلى",
    year: "30,000 قبل الميلاد",
    medium: "أكاسيد حديدية وفحم حيواني على الصخر",
    description: "أولى المحاولات البشرية لتجسيد الحركة والقدرة على الانطباع البصري الصادق للحيوانات والمحيط البيئي.",
    analysis: "يعتمد الفنان البدائي على الخطوط العريضة والاستفادة من نتوءات الصخور الطبيعية لإعطاء بعد تجسيمي وثلاثي الأبعاد.",
    image: "/museum/cave.webp",
    color: "#8C4F27",
    hotspots: [
      { x: 35, y: 45, icon: "🦣", title: "تجسيد الحركة", note: "تداخل السيقان لإعطاء انطباع بقوة الركض" },
      { x: 75, y: 60, icon: "✋", title: "البصمة اليدوية", note: "تقنية النفث اليدوي لتوقيع الهوية الفردية" },
    ],
  },
  {
    id: "art-2",
    title: "قيثارة أور الذهبية وقيثارة النمرود",
    eraId: "mesopotamia",
    eraNumeral: "<ctrl42>",
    eraName: "حضارات بلاد الرافدين",
    artistOrCivilization: "صنّاع الحضارة السومرية والبابلية",
    year: "2,600 قبل الميلاد",
    medium: "خشب مطعم بالذهب والأجلك والصدف",
    description: "رمز فخم يمثل ذروة الدقة الحرفية والجمالية الهندسية في الشرق الأدنى القديم.",
    analysis: "استخدام تقنيات التطعيم الدقيق مع التباين بين بريق الذهب والأزرق اللازوردي لخلق هيبة ملكية وطقسية.",
    image: "/museum/mesopotamia.webp",
    color: "#C5A059",
    hotspots: [
      { x: 45, y: 35, icon: "👑", title: "الرأس الذهبي", note: "تشكيل طقسي من الذهب الخالص" },
      { x: 65, y: 55, icon: "🦁", title: "النقوش اللوحية", note: "سرد أسطوري هندسي دقيق" },
    ],
  },
  {
    id: "art-3",
    title: "قناع توت عنخ آمون واللوحات الجدارية",
    eraId: "egypt",
    eraNumeral: "𒐈",
    eraName: "مصر القديمة (الفراعنة)",
    artistOrCivilization: "فنانو الدولة الحديثة المصرية",
    year: "1,323 قبل الميلاد",
    medium: "ذهب مرصع بالأحجار الكريمة والفايانس",
    description: "نموذج المثالية البصرية الخالدة وتطبيق قواعد النسب السريانية الجنائزية.",
    analysis: "اعتماد التناظر المطلق (Symmetry) والخطوط التحديدية الصارمة لتأكيد الخلود والاستقرار البصري.",
    image: "/museum/egypt.webp",
    color: "#D4AF37",
    hotspots: [
      { x: 50, y: 30, icon: "𓂀", title: "عين حورس", note: "رمزية الحماية والكمال الهندسي" },
      { x: 40, y: 70, icon: "🔺", title: "التناظر الرأسي", note: "توازن بصري متطابق على الجانبين" },
    ],
  },
  {
    id: "art-4",
    title: "تمثال رامي القرص ودقة التشريح",
    eraId: "greece",
    eraNumeral: "<ctrl42>",
    eraName: "الإغريق والرومان",
    artistOrCivilization: "النحات مايرون (Myron)",
    year: "450 قبل الميلاد",
    medium: "رخام كلاسيكي عن أصل برونزي",
    description: "تجسيد الحركة الديناميكية المتوازنة والتوازن بين الجهد العضلي والهدوء الذهني.",
    analysis: "تطبيق التوازن المتقابل (Contrapposto) والتوزيع التناسقي للوزن الجسدي لإبراز أوج الجمال الأكاديمي.",
    image: "/museum/greece.webp",
    color: "#8B9DAF",
    hotspots: [
      { x: 40, y: 45, icon: "🏛️", title: "قوس القوة", note: "انحناء التكوين البصري ليشكل قوساً انسيابياً" },
      { x: 60, y: 65, icon: "⚖️", title: "مركز التوازن", note: "ارتكاز القدم على نقطة ثقل مركزية" },
    ],
  },
  {
    id: "art-5",
    title: "الفيزياء الروحية والأيقونات البيزنطية",
    eraId: "medieval",
    eraNumeral: "<ctrl42>",
    eraName: "العصور الوسطى والمظلمة",
    artistOrCivilization: "معلمو الورش البيزنطية والقوطية",
    year: "1,100 ميلادية",
    medium: "تمبرا وأوراق الذهب على خشب",
    description: "تجريد العالم المادي لصالح العالم الروحي عبر الخلفيات الذهبية والخطوط العمودية الممتدة.",
    analysis: "إلغاء المنظور المادي التقليدي واستبداله بالمنظور المعكوس (Reverse Perspective) لإشعور الزائر بالحضور الإلهي.",
    image: "/museum/medival.webp",
    color: "#6B3A5D",
    hotspots: [
      { x: 35, y: 50, icon: "✝️", title: "الخلفية الذهبية", note: "إلغاء الزمان والمكان المادي لصالح الضوء النوراني" },
      { x: 65, y: 40, icon: "⚜️", title: "المنظور المعكوس", note: "الخطوط تتسع باتجاه الزائر بدلاً من نقطة التلاشي" },
    ],
  },
  {
    id: "art-6",
    title: "لوحة الجوكندا وتفتيت الضوء (Sphumato)",
    eraId: "renaissance",
    eraNumeral: "<ctrl42>",
    eraName: "عصر النهضة والأساتذة الكبار",
    artistOrCivilization: "ليوناردو دا فينشي",
    year: "1,503 ميلادية",
    medium: "زيت على لوح من خشب الحور",
    description: "أعظم إنجازات عصر النهضة في دمج التظليل الدخاني (Sfumato) مع البناء الهرمي للتكوين.",
    analysis: "استخدام تقنية السفوماتو لإخفاء الخطوط القاسية، والاعتماد على نقطة تلاشٍ واحدة خلف عيني الشخصية.",
    image: "/museum/renaissance.webp",
    color: "#A30018",
    hotspots: [
      { x: 50, y: 40, icon: "🎨", title: "تقنية السفوماتو", note: "تدرج التظليل الناعم بدون حدود حادة" },
      { x: 75, y: 60, icon: "📐", title: "التكوين الهرمي", note: "استقرار القاعدة وتجهيز الرأس كقمة هرمية" },
    ],
  },
  {
    id: "art-7",
    title: "ليلة النجوم والتعبيرية البصرية",
    eraId: "modern",
    eraNumeral: "<ctrl42>",
    eraName: "الفن الحديث والمعاصر",
    artistOrCivilization: "فينسنت فان غوخ",
    year: "1,889 ميلادية",
    medium: "زيت على قماش (Oil on Canvas)",
    description: "انفجار اللون والحركة الوجدانية والتعبير الحر عن المشاعر الداخلية عبر ضربات الفرشاة السميكة.",
    analysis: "اعتماد تقنية التلوين الكثيف (Impasto) والدوامات الإيقاعية لإبراز ديناميكية الحركة في السماء.",
    image: "/museum/modern.webp",
    color: "#1A5F7A",
    hotspots: [
      { x: 40, y: 35, icon: "🔷", title: "الدوامات الإيقاعية", note: "حركة التناغم البصري الدائري" },
      { x: 60, y: 65, icon: "⚡", title: "التباين المكمل", note: "تضاد الأصفر البرتقالي مع الأزرق الداكن" },
    ],
  },
];

const categories = [
  { id: "all", name: "كافة المعروضات" },
  { id: "cave", name: "فن الكهوف" },
  { id: "mesopotamia", name: "بلاد الرافدين" },
  { id: "egypt", name: "مصر القديمة" },
  { id: "greece", name: "الإغريق والرومان" },
  { id: "medieval", name: "العصور الوسطى" },
  { id: "renaissance", name: "عصر النهضة" },
  { id: "modern", name: "الفن الحديث" },
];

export default function PersonalMuseumPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Inspector Modal States
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeLayerMode, setActiveLayerMode] = useState<"original" | "sketch">("original");
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredArtworks = selectedCategory === "all"
    ? museumArtworks
    : museumArtworks.filter((art) => art.eraId === selectedCategory);

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (offset / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#0D0D0D] text-white min-h-screen pt-32 pb-24 selection:bg-[#A30018] selection:text-white">
        {/* Header Title */}
        <div className="container text-center pt-6 pb-12 flex flex-col items-center">
          {/* Museum Audio Music Player Button */}
          <MusicButton audioSrc="/audio/museummusic.ogg" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-sm md:text-base font-bold uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-[#A30018] animate-spin" />
            <span>المتحف الشخصي | معرض تاريخ الفنون</span>
            <Sparkles className="w-4 h-4 text-[#A30018] animate-spin" />
          </motion.div>

          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-white">
            محتوى والتحليل البصري
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-serif max-w-2xl mx-auto">
            اضغط على أي لوحة لاستعراض طبقات الرسم الهيكلي، شبكة المنظور، والتحليل الأكاديمي التفصيلي.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#A30018] border-[#A30018] text-white shadow-lg scale-105"
                    : "bg-[#181818] border-[#333] text-neutral-400 hover:border-[#C5A059] hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Showcase */}
        <div className="container max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => {
                  setSelectedArtwork(art);
                  setSliderPosition(50);
                  setActiveHotspot(null);
                  setIsZoomed(false);
                }}
                className="group relative rounded-3xl border border-[#C5A059]/30 bg-[#141414] overflow-hidden museum-frame-shadow cursor-pointer hover:border-[#C5A059] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Artwork Canvas Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  {!imgError[art.id] ? (
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      onError={() => setImgError((prev) => ({ ...prev, [art.id]: true }))}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `radial-gradient(circle at center, ${art.color}40 0%, #0A0A0A 100%)`,
                      }}
                    >
                      <svg className="w-full h-full absolute inset-0 opacity-30" viewBox="0 0 400 300">
                        <circle cx="200" cy="150" r="100" fill="none" stroke={art.color} strokeWidth="2" strokeDasharray="6 6" />
                        <line x1="50" y1="50" x2="350" y2="250" stroke="#C5A059" strokeWidth="1" />
                        <line x1="350" y1="50" x2="50" y2="250" stroke="#C5A059" strokeWidth="1" />
                      </svg>

                      <span className="text-6xl font-serif font-black opacity-30" style={{ color: art.color }}>
                        {art.eraNumeral}
                      </span>
                    </div>
                  )}

                  {/* Era Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full museum-plaque text-[#C5A059] text-xs font-bold shadow-lg">
                    EXHIBIT 0{index + 1}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <div className="text-[#C5A059] text-xs font-bold tracking-wider uppercase mb-2">
                    {art.eraName} • {art.year}
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#C5A059] transition-colors">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 font-serif line-clamp-2">
                    {art.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#A30018] group-hover:text-white transition-colors">
                    <span>انقر لتفكيك اللوحة والتحليل الأكاديمي ←</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Tracing Art Inspector Modal */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            >
              <div className="relative w-full max-w-6xl rounded-[36px] border border-[#C5A059]/40 bg-[#141414] overflow-hidden shadow-2xl my-auto">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-6 left-6 z-50 p-3 rounded-full bg-[#222] border border-[#444] text-white hover:bg-[#A30018] hover:border-[#A30018] transition shadow-xl"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Interactive Tracing Canvas (7 cols) */}
                  <div className="lg:col-span-7 bg-black relative flex flex-col justify-between">
                    {/* Top Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#1A1A1A] border-b border-[#C5A059]/20 z-20">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm font-black border"
                          style={{ color: selectedArtwork.color, borderColor: `${selectedArtwork.color}60` }}
                        >
                          {selectedArtwork.eraNumeral}
                        </span>
                        <span className="text-xs font-bold text-neutral-300">{selectedArtwork.eraName}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveLayerMode(activeLayerMode === "original" ? "sketch" : "original")}
                          className={`p-2 rounded-full border transition flex items-center gap-1 text-xs font-bold ${
                            activeLayerMode === "sketch" ? "bg-[#A30018] text-white border-[#A30018]" : "bg-[#222] text-neutral-300 border-[#444]"
                          }`}
                          title="تفكيك السكتش"
                        >
                          <Layers className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setShowGridOverlay(!showGridOverlay)}
                          className={`p-2 rounded-full border transition flex items-center gap-1 text-xs font-bold ${
                            showGridOverlay ? "bg-[#C5A059] text-black border-[#C5A059]" : "bg-[#222] text-neutral-300 border-[#444]"
                          }`}
                          title="النسبة الذهبية والمنظور"
                        >
                          <Grid className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setIsZoomed(!isZoomed)}
                          className={`p-2 rounded-full border transition flex items-center gap-1 text-xs font-bold ${
                            isZoomed ? "bg-white text-black border-white" : "bg-[#222] text-neutral-300 border-[#444]"
                          }`}
                          title="التكبير المجهري"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Canvas Area */}
                    <div
                      ref={sliderRef}
                      onMouseMove={handleSliderMove}
                      onTouchMove={handleSliderMove}
                      className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden cursor-crosshair select-none bg-black"
                    >
                      <motion.div
                        animate={{ scale: isZoomed ? 1.35 : 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        {!imgError[selectedArtwork.id] ? (
                          <Image
                            src={selectedArtwork.image}
                            alt={selectedArtwork.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            onError={() => setImgError((prev) => ({ ...prev, [selectedArtwork.id]: true }))}
                            className={`object-cover transition-all duration-500 ${
                              activeLayerMode === "sketch" ? "filter grayscale contrast-200 invert" : ""
                            }`}
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center relative overflow-hidden"
                            style={{
                              background: `radial-gradient(circle at center, ${selectedArtwork.color}40 0%, #0A0A0A 100%)`,
                            }}
                          >
                            <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 600 400">
                              <circle cx="300" cy="200" r="140" fill="none" stroke={selectedArtwork.color} strokeWidth="2" strokeDasharray="6 6" />
                              <line x1="0" y1="0" x2="600" y2="400" stroke="#C5A059" strokeWidth="1" />
                              <line x1="600" y1="0" x2="0" y2="400" stroke="#C5A059" strokeWidth="1" />
                            </svg>
                          </div>
                        )}

                        {/* Getty-Style Comparison Layer Slider */}
                        <div
                          className="absolute top-0 bottom-0 right-0 overflow-hidden border-l-2 border-[#C5A059] shadow-2xl"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div
                            className="absolute inset-0 w-full h-full filter invert contrast-150 grayscale"
                            style={{
                              background: `radial-gradient(circle at center, ${selectedArtwork.color}40 0%, #000 100%)`,
                            }}
                          >
                            <svg className="w-full h-full absolute inset-0 opacity-60" viewBox="0 0 600 400">
                              <line x1="0" y1="0" x2="600" y2="400" stroke="#C5A059" strokeWidth="1" />
                              <line x1="600" y1="0" x2="0" y2="400" stroke="#C5A059" strokeWidth="1" />
                              <circle cx="300" cy="200" r="120" fill="none" stroke="#A30018" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C5A059] border-2 border-white shadow-2xl flex items-center justify-center cursor-ew-resize z-30"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <RefreshCw className="w-3.5 h-3.5 text-black animate-spin" />
                        </div>

                        {/* Composition Grid */}
                        {showGridOverlay && (
                          <div className="absolute inset-0 pointer-events-none border border-[#C5A059]/40 z-20">
                            <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                              {[...Array(9)].map((_, i) => (
                                <div key={i} className="border border-[#C5A059]/20" />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hotspot Pins */}
                        {selectedArtwork.hotspots?.map((spot, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 group"
                          >
                            <span className="relative flex h-7 w-7 items-center justify-center">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                              <span className="relative inline-flex rounded-full h-6 w-6 bg-[#141414] border-2 border-[#C5A059] text-white text-[10px] font-bold items-center justify-center shadow-xl">
                                {spot.icon}
                              </span>
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Academic Museum Plaque Panel (5 cols) */}
                  <div className="lg:col-span-5 p-6 md:p-8 bg-[#141414] flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#C5A059]/20 max-h-[85vh] overflow-y-auto">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full museum-plaque text-[#C5A059] text-xs font-bold uppercase mb-4">
                        {selectedArtwork.eraName}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                        {selectedArtwork.title}
                      </h2>

                      <div className="mt-4 p-4 rounded-2xl bg-[#1A1A1A] border border-[#C5A059]/20 space-y-2 text-xs md:text-sm text-neutral-300">
                        <div className="flex justify-between border-b border-neutral-800 pb-2">
                          <span className="text-neutral-500 font-bold">الفنان / الحضارة:</span>
                          <span className="font-bold text-white">{selectedArtwork.artistOrCivilization}</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-800 pb-2">
                          <span className="text-neutral-500 font-bold">تاريخ الإنجاز:</span>
                          <span className="font-bold text-[#C5A059]">{selectedArtwork.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500 font-bold">الخامة والتكنيك:</span>
                          <span className="font-bold text-white">{selectedArtwork.medium}</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#A30018] mb-2">الوصف الفني والجمالي</h4>
                        <p className="text-sm text-neutral-300 leading-7 font-serif">
                          {selectedArtwork.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2">التحليل التفكيكي والأكاديمي</h4>
                        <p className="text-sm text-neutral-300 leading-7 font-serif p-4 rounded-2xl bg-[#1A1A1A] border border-neutral-800">
                          {selectedArtwork.analysis}
                        </p>
                      </div>

                      {/* Hotspot Info Card */}
                      {activeHotspot !== null && selectedArtwork.hotspots?.[activeHotspot] && (
                        <div className="mt-6 p-4 rounded-2xl bg-[#A30018]/10 border border-[#A30018]/40 animate-fadeIn">
                          <div className="flex items-center gap-2 text-[#A30018] font-bold text-xs mb-1">
                            <Info className="w-4 h-4" />
                            <span>ملاحظة التحليل: {selectedArtwork.hotspots[activeHotspot].title}</span>
                          </div>
                          <p className="text-xs text-neutral-200 font-serif">
                            {selectedArtwork.hotspots[activeHotspot].note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
