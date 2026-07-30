"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Award, Sparkles, Move, BookOpen, GraduationCap } from "lucide-react";
import Sticker from "./Sticker";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white text-neutral-900">
      {/* Subtle background radial ambient glow in Red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Clean subtle dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Container */}
      <div className="container relative z-10 text-center flex flex-col items-center max-w-5xl px-4">
        
        {/* Plaque / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>حيث الفن التشكيلي والبحث الأكاديمي</span>
        </motion.div>

        {/* Drag Hint Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium border border-neutral-200 shadow-2xs cursor-default"
        >
          <Move className="w-3.5 h-3.5 text-red-600 animate-bounce" />
          <span>يمكنك تحريك وسحب عناصر الصفحة بالماوس أو اللمس</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.08] tracking-tight text-neutral-950 max-w-4xl"
        >
          أكاديمية <span className="text-red-600 inline-block">عمر خزعل</span>
        </motion.h1>

        {/* Red accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent my-7"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-neutral-600 font-serif px-2"
        >
          تعليم منهجي وتدريب عملي لجميع المستويات
          <br />
          في <span className="text-red-600 font-bold underline decoration-red-200 decoration-2 underline-offset-4">الفنون المرئية</span>، وصناعة المحتوى الإبداعي
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 z-20 relative"
        >
          <Link
            href="#courses"
            className="
              px-9
              py-4
              rounded-full
              bg-red-600
              text-white
              font-bold
              text-base
              sm:text-lg
              shadow-[0_10px_25px_rgba(220,38,38,0.3)]
              hover:bg-red-700
              hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)]
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
            "
          >
            استكشف الدورات
          </Link>

          <Link
            href="/about"
            className="
              px-9
              py-4
              rounded-full
              bg-white
              text-neutral-900
              font-bold
              text-base
              sm:text-lg
              border-2
              border-neutral-900
              hover:bg-neutral-900
              hover:text-white
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
              shadow-xs
            "
          >
            عن الفنان
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-10 mt-16 p-5 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-xs max-w-3xl w-full z-10"
        >
          <div>
            <h3 className="text-2xl sm:text-4xl font-black text-red-600">+650</h3>
            <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">طالب ومتدرب</p>
          </div>

          <div className="border-x border-neutral-200 px-2 sm:px-4">
            <h3 className="text-2xl sm:text-4xl font-black text-neutral-900">7</h3>
            <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">مسارات أكاديمية</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-4xl font-black text-red-600">+10</h3>
            <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">سنوات خبرة فنية</p>
          </div>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* INTERACTIVE DRAGGABLE STICKERS Surrounding the Content   */}
      {/* Mobile & Desktop Mouse / Touch Drag Supported           */}
      {/* ======================================================== */}

      {/* 1. THE EYE EMBLEM STICKER (MAIN INTERACTIVE PIECE) */}
      <Sticker
        initialRotate={-12}
        initialX="-38vw"
        initialY="-180px"
        badge="عين الأكاديمية 👁️"
        badgeColor="bg-red-600"
        className="top-1/2 left-1/2 hidden md:block"
      >
        <div className="relative p-4 rounded-3xl bg-white border-2 border-neutral-900 shadow-2xl hover:border-red-600 transition-colors group">
          <Image
            src="/eye.webp"
            alt="شعار عين عمر خزعل"
            width={180}
            height={180}
            priority
            className="w-32 lg:w-44 h-auto drop-shadow-md group-hover:scale-105 transition-transform"
          />
          <div className="mt-2 text-center text-[11px] font-bold text-neutral-700 bg-neutral-100 py-1 px-2 rounded-lg">
            اسحبني بالماوس أو اللمس!
          </div>
        </div>
      </Sticker>

      {/* Mobile-friendly Eye Sticker */}
      <Sticker
        initialRotate={-8}
        initialX="0px"
        initialY="-260px"
        badge="اسحب العين 👁️"
        badgeColor="bg-red-600"
        className="top-1/2 left-1/2 md:hidden -translate-x-1/2"
      >
        <div className="p-3 rounded-2xl bg-white border-2 border-neutral-900 shadow-xl">
          <Image
            src="/eye.webp"
            alt="شعار عين عمر خزعل"
            width={120}
            height={120}
            priority
            className="w-24 h-auto drop-shadow-sm"
          />
        </div>
      </Sticker>

      {/* 2. ART PALETTE STICKER */}
      <Sticker
        initialRotate={14}
        initialX="36vw"
        initialY="-190px"
        badge="ورش عمل"
        badgeColor="bg-neutral-900"
        className="top-1/2 left-1/2 hidden md:block"
      >
        <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 shadow-xl flex items-center gap-3 hover:border-red-500 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
            <Palette className="w-6 h-6" />
          </div>
          <div className="text-right">
            <h4 className="text-sm font-black text-neutral-900">الرسم والبالتة</h4>
            <p className="text-[11px] text-neutral-500 font-medium">تقنيات الألوان الزيتية</p>
          </div>
        </div>
      </Sticker>

      {/* 3. ACADEMY CERTIFICATE / MEDAL STICKER */}
      <Sticker
        initialRotate={-10}
        initialX="38vw"
        initialY="60px"
        badge="شهادة معتمدة"
        badgeColor="bg-red-600"
        className="top-1/2 left-1/2 hidden lg:block"
      >
        <div className="p-4 rounded-3xl bg-neutral-900 text-white border-2 border-neutral-900 shadow-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-right">
            <h4 className="text-xs font-bold">اعتماد أكاديمي</h4>
            <p className="text-[10px] text-neutral-300">مقررات احترافية</p>
          </div>
        </div>
      </Sticker>

      {/* 4. FINE ART MANIFESTO QUOTE STICKER */}
      <Sticker
        initialRotate={8}
        initialX="-40vw"
        initialY="80px"
        badge="رؤية فنية"
        badgeColor="bg-neutral-800"
        className="top-1/2 left-1/2 hidden lg:block"
      >
        <div className="p-4 max-w-[210px] rounded-2xl bg-red-600 text-white shadow-xl text-right">
          <div className="flex items-center gap-1.5 mb-1 text-red-100">
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] font-bold">فلسفة الأكاديمية</span>
          </div>
          <p className="text-xs font-bold leading-snug">
            "الفن ليس مادة تُدرّس... بل تجربة تُعاش."
          </p>
        </div>
      </Sticker>

      {/* 5. COURSES & BOOKS FLOATING BADGE STICKER */}
      <Sticker
        initialRotate={-6}
        initialX="-28vw"
        initialY="240px"
        className="top-1/2 left-1/2 hidden md:block"
      >
        <div className="p-3.5 rounded-2xl bg-white border border-neutral-300 shadow-lg flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-neutral-900">مناهج & كتب مخصصة</p>
            <span className="text-[10px] text-red-600 font-bold">تطوير مستمر</span>
          </div>
        </div>
      </Sticker>

      {/* 6. GRADUATION CAP STICKER */}
      <Sticker
        initialRotate={12}
        initialX="28vw"
        initialY="230px"
        className="top-1/2 left-1/2 hidden md:block"
      >
        <div className="p-3.5 rounded-2xl bg-white border border-neutral-300 shadow-lg flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-neutral-900">+650 خريج</p>
            <span className="text-[10px] text-neutral-500 font-bold">من جميع الدول</span>
          </div>
        </div>
      </Sticker>

    </section>
  );
}