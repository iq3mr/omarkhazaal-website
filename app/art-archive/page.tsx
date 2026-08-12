"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, BookOpenCheck, History, Award, Send, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArtArchivePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0A] text-[#F5F2EB] min-h-screen pt-32 pb-24 selection:bg-[#C5A059] selection:text-black">
        {/* Header Hero Plaque */}
        <section className="container max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full museum-plaque border border-[#C5A059]/40 text-[#C5A059] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
            <span>توثيق وأرشفة الأعمال الفنية</span>
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
          </motion.div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-serif font-black leading-tight text-[#F5F2EB] tracking-wide">
            وثق اعمالك الفنية
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#C5A059] font-serif max-w-3xl mx-auto leading-relaxed">
            حفظ الذاكرة البصرية، حماية الهوية الإبداعية وبناء الأرشيف الفني المرجعي
          </p>

          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-8" />
        </section>

        {/* Detailed Explanation Section */}
        <section className="container max-w-5xl mt-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-[36px] bg-[#121212] border border-[#C5A059]/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Ambient Background Aura */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#A30018]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8 text-neutral-300 font-serif leading-loose text-base sm:text-lg">
              <h2 className="text-2xl sm:text-3xl font-black text-[#F5F2EB] border-r-4 border-[#C5A059] pr-4">
                أهمية توثيق الأعمال الفنية التشكيلية
              </h2>

              <p className="text-justify">
                يُعدّ التوثيق الأكاديمي والرقمي للأعمال الفنية التشكيلية (اللوحات، المنحوتات، والأعمال الجدارية والمفاهيمية) ركناً أساسياً في ترسيخ قيمة العمل الفني وحمايته عبر الزمن. إنّ العمل الفني الذي لا يُوثّق رسمياً يظلُّ عرضة للضياع والاندثار، وتضعف فرصة نسبته لصاحبه في السجلات الثقافية والمعارض الرسمية.
              </p>

              <p className="text-justify">
                إننا نهدف من خلال هذه المبادرة إلى بناء أرشيف فني رصين يجمع نتاجات الفنانين والتشكيليين والباحثين، وتوفير قاعدة بيانات موثوقة تحفظ الحقوق الأدبية والفكرية وتُسهّل دراسة الأعمال وتأطيرها نقدياً وأكاديمياً.
              </p>
            </div>

            {/* Core Values & Archiving Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative z-10">
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#C5A059]/50 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F2EB] mb-2 font-serif">حماية الملكية الفكرية</h3>
                <p className="text-sm text-neutral-400 font-serif leading-relaxed">
                  تسجيل بيانات العمل الفني (العنوان، الأبعاد، التقنية، وسنة الإنجاز) يضمن نسبته الرسمية للفنان ويحميه من الانتحال والسرقة الفكرية.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#C5A059]/50 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                  <BookOpenCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F2EB] mb-2 font-serif">مرجع نقدي وأكاديمي</h3>
                <p className="text-sm text-neutral-400 font-serif leading-relaxed">
                  إتاحة الأعمال التشكيلية الموثقة أمام الباحثين والناقدين الفنيين لدراسة المناهج البصرية والتحولات الأسلوبية للفنانين.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#C5A059]/50 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F2EB] mb-2 font-serif">حفظ الذاكرة الوطنية</h3>
                <p className="text-sm text-neutral-400 font-serif leading-relaxed">
                  تأطير النتاج البصري التراكمي كجزء من الإرث الحضاري والثقافي، وحفظه من التلف أو النسيان عبر السجلات الرقمية الدائمة.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#C5A059]/50 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F2EB] mb-2 font-serif">شهادة توثيق واحترافية</h3>
                <p className="text-sm text-neutral-400 font-serif leading-relaxed">
                  رفع القيمة السوقية والمتحفية للأعمال الفنية عبر ربطها بسجلات الأرشيف الفني المعترف بها.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Telegram Callout Box */}
        <section className="container max-w-4xl mt-14">
          <div className="p-8 sm:p-12 rounded-3xl museum-plaque border border-[#C5A059]/50 text-center relative overflow-hidden shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-serif font-black text-[#F5F2EB] mb-4">
              جاهز لتوثيق أعمالك الفنية التشكيلية؟
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-serif max-w-2xl mx-auto mb-8 leading-relaxed">
              يمكنك الآن إرسال بيانات لوحاتك وأعمالك الفنية (صورة العمل، العنوان، الأبعاد، التقنية، وسنة الإنجاز) مباشرة (ضمن ملف بصيغة pdf) عبر بوت الأرشيف الفني على تليجرام لتوثيقها وأرشفتها رسمياً.
            </p>

            <a
              href="https://t.me/IraqiArtArchive_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-base sm:text-lg shadow-[0_10px_30px_rgba(0,136,204,0.4)] hover:scale-105 transition-all duration-300 border border-white/20 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>أرسل أعمالك الفنية عبر تليجرام</span>
            </a>

            <p className="mt-4 text-xs text-neutral-500 font-serif">
              رابط البوت المباشر: t.me/IraqiArtArchive_bot
            </p>
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A059] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>العودة للصفحة الرئيسية</span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
