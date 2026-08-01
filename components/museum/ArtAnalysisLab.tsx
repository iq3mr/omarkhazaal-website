"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Sparkles,
  Palette,
  Compass,
  Layers,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Printer,
  X,
  Plus,
  Zap,
  Activity,
  Scan,
} from "lucide-react";

// Types for AI Analysis Data (Decoupled Data Layer ready for SAM 2 / Florence-2 / CLIP / OpenCV)
export interface ColorSwatch {
  hex: string;
  name: string;
  percentage: number;
}

export interface ExtractedObject {
  name: string;
  confidence: number;
  box?: [number, number, number, number];
}

export interface ComparisonArt {
  title: string;
  artist: string;
  era: string;
  similarity: number;
  image: string;
}

export interface AnalysisReport {
  id: string;
  imageName: string;
  imageSrc: string;
  timestamp: string;

  // 1-4 Overview
  description: string;
  mediumType: string;
  artStyle: string;
  artMovement: string;

  // 5-13 Technical Analysis
  composition: string;
  perspective: string;
  lighting: string;
  shadows: string;
  massDistribution: string;
  visualBalance: string;
  rhythm: string;
  focalPoint: string;
  linesAndDirections: string;

  // 14-15 Color & Objects
  colorPalette: ColorSwatch[];
  extractedObjects: ExtractedObject[];

  // 16-18 Evaluation & Feedback
  executionQualityScore: number; // /100
  executionQualityDetails: string;
  technicalDefects: string[];
  improvementSuggestions: string[];

  // 19 Comparison
  similarArtworks: ComparisonArt[];
}

// Mock Data Generator simulating AI Analysis Output
export function generateMockAnalysisReport(file: File | { name: string; src: string }): AnalysisReport {
  const isCustom = "src" in file;
  const name = isCustom ? file.name : (file as File).name;
  const src = isCustom ? file.src : URL.createObjectURL(file as File);

  return {
    id: `report-${Date.now()}`,
    imageName: name,
    imageSrc: src,
    timestamp: new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" }),

    description: "عمل فني تعبيري يظهر حساً عالياً بالكتلة والتكوين، مع موازنة دقيقة بين المساحات المضاءة والظلال العمومية لخلق هيبة بصرية أكاديمية.",
    mediumType: "تصوير زيتي على قماش (Oil Painting)",
    artStyle: "تعبيري أكاديمي معاصِر (Academic Expressionism)",
    artMovement: "مدرسة عصر النهضة المحدثة (Neo-Renaissance)",

    composition: "تكوين هرمي متوازن مع اعتماد النسبة الذهبية لتوجيه عين الزائر من القاعدة إلى الذروة الرأسية.",
    perspective: "منظور خطي بنقطة تلاشٍ واحدة مركزية، يمنح عمقاً إيهامياً كبيراً داخل الفضاء الفني.",
    lighting: "إضاءة موجّهة بدرجة تباين قوية (Chiaroscuro) تبدأ من الجانب العلوي الأيمن وتسقط بسلاسة على مركز الكتلة.",
    shadows: "ظلال ذات حواف ناعمة ممتدة تعزز التجسيم ثلاثي الأبعاد دون التضحية بتفاصيل المساحات المعتمة.",
    massDistribution: "توزيع ثقلي متزن؛ الكتلة الرئيسية تشغل الثلث الأوسط الأيمن متوازنة مع فراغ بصري نشط في الجانب الأيسر.",
    visualBalance: "توازن محوري غير متناظر (Asymmetrical Balance) يحافظ على الاستقرار البصري بمرونة عالية.",
    rhythm: "إيقاع حركي انسيابي متكرر عبر الانحناءات الخطية في خطوط التظليل والملامس الجدارية.",
    focalPoint: "نقطة التركيز الرئيسية تقع في الربع العلوي الأيمن بنسبة التماسك الضوئي الأعلى.",
    linesAndDirections: "خطوط قطرية مائلة تدفع بالعين نحو العمق البصري مع خطوط أفقية تثبت قاعدة العمل.",

    colorPalette: [
      { hex: "#A30018", name: "قرمزي أكاديمي", percentage: 35 },
      { hex: "#C5A059", name: "ذهبي متحفي", percentage: 25 },
      { hex: "#1A1A1A", name: "أسود فحم", percentage: 20 },
      { hex: "#FAF8F3", name: "عاجي كلاسيكي", percentage: 12 },
      { hex: "#4A5568", name: "رمادي ظلي", percentage: 8 },
    ],

    extractedObjects: [
      { name: "شخصية رئيسية", confidence: 0.98 },
      { name: "كتلة معمارية", confidence: 0.92 },
      { name: "مساحة ضوئية مركزية", confidence: 0.89 },
      { name: "عناصر تظليل عميقة", confidence: 0.85 },
    ],

    executionQualityScore: 92,
    executionQualityDetails: "تنفيذ تقني رفيع المستوى يظهر تمكناً كبيراً من التحكم في الفرشاة ودمج الطبقات التأسيسية.",

    technicalDefects: [
      "تباين طفيف في درجة إشباع اللون في الزاوية السفلى اليسرى.",
      "حاجة لزيادة تفكيك النوافذ الضوئية في المساحات الانتقالية.",
    ],

    improvementSuggestions: [
      "تعميق الظلال التحتية لإبراز البروز التجسيمي بشكل أوضح.",
      "إضافة لمسات ضوئية دقيقة (Highlights) في نقطة الارتكاز البصري.",
      "تنعيم تدرجات الخلفية لزيادة التركيز على العنصر الرئيسي.",
    ],

    similarArtworks: [
      {
        title: "دراسة التكوين والضوء",
        artist: "ليوناردو دا فينشي",
        era: "عصر النهضة",
        similarity: 94,
        image: "/museum/renaissance.webp",
      },
      {
        title: "التباين الضوئي في العتمة",
        artist: "كارافاجيو",
        era: "الباروك",
        similarity: 88,
        image: "/museum/greece.webp",
      },
    ],
  };
}

export default function ArtAnalysisLab() {
  const [selectedFiles, setSelectedFiles] = useState<{ id: string; file: File; preview: string }[]>([]);
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisReport, setAnalysisReport] = useState<AnalysisReport | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const addFiles = (files: File[]) => {
    const newItems = files.map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles((prev) => [...prev, ...newItems]);
    setAnalysisReport(null);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (activePreviewIndex >= updated.length) {
        setActivePreviewIndex(Math.max(0, updated.length - 1));
      }
      return updated;
    });
    setAnalysisReport(null);
  };

  const runAnalysis = () => {
    if (selectedFiles.length === 0) return;
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisReport(null);

    // Simulate AI Vision Scanning Progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          const currentItem = selectedFiles[activePreviewIndex];
          setAnalysisReport(generateMockAnalysisReport(currentItem.file));
          return 100;
        }
        return prev + 15;
      });
    }, 250);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const activeItem = selectedFiles[activePreviewIndex];

  return (
    <div className="w-full relative py-8 selection:bg-[#A30018] selection:text-white" dir="rtl">
      {/* Container Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-2xl mb-4"
        >
          <Activity className="w-4 h-4 text-[#A30018] animate-pulse" />
          <span>مختبر تحليل الأعمال الفنية الذكي</span>
          <Activity className="w-4 h-4 text-[#A30018] animate-pulse" />
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          تفكيك براهين التكوين والجماليات
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-serif">
          قم برفع أعمالك الفنية أو اللوحات للمقارنة والحصول على تقرير أكاديمي شامل يغطي 20 محوراُ فنياً وتقنياً.
        </p>
      </div>

      {/* Upload Zone & Comparison Thumbnails */}
      <div className="max-w-5xl mx-auto mb-12">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="relative rounded-[36px] border-2 border-dashed border-[#C5A059]/40 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-[#C5A059] hover:bg-white/10 group cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="w-16 h-16 rounded-full bg-[#A30018]/20 border border-[#A30018]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 text-[#C5A059]" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            سحب وإفلات الصور هنا، أو انقر للاختيار من جهازك
          </h3>
          <p className="text-sm text-neutral-400 font-serif">
            يدعم رفع أكثر من صورة لمقارنتها جنبًا إلى جنب (PNG, JPG, WEBP)
          </p>
        </div>

        {/* Selected Files Thumbnails & Selector */}
        {selectedFiles.length > 0 && (
          <div className="mt-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-[#C5A059]/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-[#C5A059]">
                الصور المختارة للمقارنة ({selectedFiles.length})
              </span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#C5A059] transition"
              >
                <Plus className="w-4 h-4" /> إضافة المزيد
              </button>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
              {selectedFiles.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActivePreviewIndex(idx)}
                  className={`relative w-28 h-28 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 flex-shrink-0 ${
                    activePreviewIndex === idx
                      ? "border-[#A30018] scale-105 shadow-xl ring-2 ring-[#A30018]/50"
                      : "border-neutral-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={item.preview} alt={item.file.name} fill className="object-cover" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(idx);
                    }}
                    className="absolute top-1 left-1 p-1 rounded-full bg-black/70 text-white hover:bg-[#A30018] transition"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Trigger Button */}
            <div className="mt-8 text-center">
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-12
                  py-4
                  rounded-full
                  bg-[#A30018]
                  text-white
                  font-bold
                  text-lg
                  shadow-[0_10px_30px_rgba(163,0,24,0.4)]
                  hover:bg-[#800013]
                  hover:scale-105
                  transition-all
                  duration-300
                  disabled:opacity-50
                "
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="w-5 h-5 animate-spin text-[#C5A059]" />
                    <span>جاري المسح والتحليل الذكي ({analysisProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-[#C5A059]" />
                    <span>ابدأ التحليل الأكاديمي الشامل</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Vision Scanning Animation */}
      {isAnalyzing && activeItem && (
        <div className="max-w-4xl mx-auto my-12 p-8 rounded-[36px] bg-black/80 border border-[#C5A059]/40 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/9] w-full max-w-xl mx-auto rounded-2xl overflow-hidden mb-6">
            <Image src={activeItem.preview} alt="Scanning" fill className="object-cover opacity-80" />
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent shadow-[0_0_15px_#C5A059]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            <div className="absolute top-4 right-4 px-4 py-1 rounded-full museum-plaque text-[#C5A059] text-xs font-bold flex items-center gap-2">
              <Scan className="w-4 h-4 animate-pulse" />
              <span>SAM 2 & Florence-2 Vision Scan</span>
            </div>
          </div>

          <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden max-w-md mx-auto">
            <div
              className="bg-gradient-to-r from-[#A30018] to-[#C5A059] h-full transition-all duration-300"
              style={{ width: `${analysisProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Comprehensive 20-Point Analysis Report Presentation */}
      <AnimatePresence>
        {analysisReport && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto space-y-10"
          >
            {/* Action Bar: Export PDF */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-lg font-bold text-white">التقرير الأكاديمي المكتمل</span>
                <span className="text-xs text-neutral-400 font-serif">({analysisReport.timestamp})</span>
              </div>

              <button
                onClick={handlePrintPdf}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121212] text-[#C5A059] border border-[#C5A059]/40 text-sm font-bold hover:bg-[#A30018] hover:text-white hover:border-[#A30018] transition-all duration-300 shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>تصدير التقرير PDF / طباعة</span>
              </button>
            </div>

            {/* Main Preview & Top 4 Overview Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Artwork Main Canvas (5 cols) */}
              <div className="lg:col-span-5 p-4 rounded-[36px] bg-white/10 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl">
                <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden bg-black">
                  <Image src={analysisReport.imageSrc} alt={analysisReport.imageName} fill className="object-cover" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full museum-plaque text-[#C5A059] text-xs font-bold">
                    ANALYZED ARTWORK
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-white/10 text-center">
                  <h4 className="text-lg font-bold text-white">{analysisReport.imageName}</h4>
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A30018]/20 border border-[#A30018]/50 text-[#A30018] text-sm font-black">
                    جودة التنفيذ الأكاديمي: {analysisReport.executionQualityScore} / 100
                  </div>
                </div>
              </div>

              {/* Overview Points 1 to 4 (7 cols) */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                  <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase mb-2">
                    <FileText className="w-4 h-4" />
                    <span>1. وصف العمل الفني</span>
                  </div>
                  <p className="text-sm text-neutral-200 font-serif leading-7">{analysisReport.description}</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                  <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase mb-2">
                    <Layers className="w-4 h-4" />
                    <span>2. نوع العمل وسائطه</span>
                  </div>
                  <p className="text-base font-bold text-white">{analysisReport.mediumType}</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                  <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase mb-2">
                    <Compass className="w-4 h-4" />
                    <span>3. تصنيف الأسلوب الفني</span>
                  </div>
                  <p className="text-base font-bold text-white">{analysisReport.artStyle}</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                  <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase mb-2">
                    <Sparkles className="w-4 h-4 text-[#A30018]" />
                    <span>4. المدرسة الفنية الأقرب</span>
                  </div>
                  <p className="text-base font-bold text-white">{analysisReport.artMovement}</p>
                </div>
              </div>
            </div>

            {/* Technical Analysis Grid (Points 5 to 13) */}
            <div className="p-8 rounded-[36px] bg-white/10 backdrop-blur-xl border border-[#C5A059]/30 shadow-2xl">
              <h3 className="text-2xl font-black text-[#C5A059] mb-6 flex items-center gap-3">
                <Compass className="w-6 h-6 text-[#A30018]" />
                <span>تحليل العناصر الهندسية والتقنية (المحاور 5 - 13)</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">5. تحليل التكوين (Composition)</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.composition}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">6. تحليل المنظور (Perspective)</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.perspective}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">7. تحليل الإضاءة (Lighting)</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.lighting}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">8. تحليل الظلال (Shadows)</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.shadows}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">9. توزيع الكتل والثقل</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.massDistribution}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">10. التوازن البصري</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.visualBalance}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">11. الإيقاع والحركة</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.rhythm}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">12. نقطة التركيز (Focal Point)</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.focalPoint}</p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="text-xs font-bold text-[#C5A059] uppercase mb-1">13. الخطوط والاتجاهات</h4>
                  <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.linesAndDirections}</p>
                </div>
              </div>
            </div>

            {/* Color Palette & Extracted Objects (Points 14 & 15) */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 14 Color Palette Extraction */}
              <div className="p-8 rounded-[36px] bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                <h3 className="text-xl font-black text-[#C5A059] mb-6 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#A30018]" />
                  <span>14. لوحة الألوان المسيطرة (Color Palette)</span>
                </h3>

                <div className="space-y-4">
                  {analysisReport.colorPalette.map((color, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-black/40 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-xl border border-white/30 shadow-md"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div>
                          <span className="text-sm font-bold text-white block">{color.name}</span>
                          <span className="text-xs text-neutral-400 font-mono">{color.hex}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#C5A059]">{color.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 15 Extracted Objects & Segmentation */}
              <div className="p-8 rounded-[36px] bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                <h3 className="text-xl font-black text-[#C5A059] mb-6 flex items-center gap-2">
                  <Scan className="w-5 h-5 text-[#A30018]" />
                  <span>15. استخراج العناصر والمكونات (SAM 2 Segmentation)</span>
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {analysisReport.extractedObjects.map((obj, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center">
                      <span className="text-sm font-bold text-white block">{obj.name}</span>
                      <span className="text-xs text-neutral-400 mt-1 block">دقة الكشف: {(obj.confidence * 100).toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Evaluation, Flaws & Improvements (Points 16 - 18) */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* 16 Evaluation Details */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <span>16. تقدير جودة التنفيذ</span>
                </h4>
                <p className="text-xs text-neutral-300 font-serif leading-6">{analysisReport.executionQualityDetails}</p>
              </div>

              {/* 17 Defect Detection */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#A30018]/40">
                <h4 className="text-sm font-bold text-[#A30018] uppercase mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>17. كشف العيوب التقنية</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300 font-serif">
                  {analysisReport.technicalDefects.map((defect, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A30018] font-bold">•</span>
                      <span>{defect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 18 Improvement Suggestions */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#C5A059]" />
                  <span>18. اقتراحات التطوير والتعديل</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300 font-serif">
                  {analysisReport.improvementSuggestions.map((sug, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#22C55E] font-bold">✓</span>
                      <span>{sug}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 19 Comparison with Famous Masterpieces */}
            <div className="p-8 rounded-[36px] bg-white/10 backdrop-blur-xl border border-[#C5A059]/30">
              <h3 className="text-xl font-black text-[#C5A059] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#A30018]" />
                <span>19. مقارنة العمل بأعمال عالمية مشابهة (CLIP Match)</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {analysisReport.similarArtworks.map((sim, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0">
                      <Image src={sim.image} alt={sim.title} fill className="object-cover" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">{sim.title}</h4>
                      <p className="text-xs text-neutral-400 font-serif mt-1">{sim.artist} • {sim.era}</p>
                      <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-[#A30018]/20 border border-[#A30018]/40 text-[#A30018] text-xs font-bold">
                        نسبة الشبه التكويني: {sim.similarity}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
