"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    title: "الرسم الأكاديمي والمنظور",
    category: "Drawing",
    description:
      "تعلم أسس الرسم الأكاديمي والمنظور والتشريح والظل والنور بطريقة منهجية.",
    image: "/courses/drawingom.webp",
    href: "/courses/drawing",
    tag: "EXHIBIT 01",
  },
  {
    title: "الرسم الرقمي الاحترافي",
    category: "Digital Art",
    description:
      "احتراف الرسم الرقمي باستخدام أحدث البرامج وأفضل أساليب العمل.",
    image: "/courses/digitalc.webp",
    href: "/courses/digital-painting",
    tag: "EXHIBIT 02",
  },
  {
    title: "التصميم الجرافيكي الهيكلي",
    category: "Design",
    description:
      "تعلم تصميم الهوية البصرية والملصقات والمنشورات بطريقة احترافية.",
    image: "/courses/designon.webp",
    href: "/courses/design",
    tag: "EXHIBIT 03",
  },
  {
    title: "صناعة المحتوى والتسويق",
    category: "Content & Marketing",
    description:
      "كيف تبني محتوى احترافياً يجذب الجمهور ويصنع هوية شخصية وحملات نمو ناجحة.",
    image: "/courses/contento.webp",
    href: "/courses/marketing",
    tag: "EXHIBIT 04",
  },
  {
    title: "الذكاء الاصطناعي للمبدعين",
    category: "AI",
    description:
      "استخدام أدوات الذكاء الاصطناعي في التصميم وصناعة المحتوى وتطوير الأفكار.",
    image: "/courses/ai.webp",
    href: "/courses/ai",
    tag: "EXHIBIT 05",
  },
  {
    title: "منهجية البحث العلمي",
    category: "Research",
    description:
      "تعلم كتابة وإعداد البحوث والرسائل العلمية في الفنون التشكيلية وفق الأسس الجامعية.",
    image: "/courses/research.webp",
    href: "/courses/art-research",
    tag: "EXHIBIT 06",
  },
  {
    title: "برامج أوفيس الأساسية",
    category: "Office",
    description:
      "دورة عملية لتعليم استخدام برامج Microsoft Office (Word, Excel, PowerPoint) بكفاءة واحترافية.",
    image: "/courses/office.webp",
    href: "/courses/office",
    tag: "EXHIBIT 07",
  },
];

export default function Courses() {
  return (
    <section className="py-32 md:py-40 bg-white relative" id="courses">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="text-[#A30018] tracking-[8px] uppercase text-xs md:text-sm font-bold"
        >
          ACADEMIC PATHWAYS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-4xl md:text-7xl font-black text-[#121212]"
        >
          المسارات والدورات الأكاديمية
        </motion.h2>

        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-9 md:leading-10 text-neutral-700 font-serif">
          مجموعة من المسارات المصممة لبناء مهارات الفنان وصانع المحتوى والباحث، بالاعتماد على منهجية أكاديمية وتطبيقية رفيعة.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                border
                border-[#C5A059]/30
                museum-frame-shadow
                transition-all
                duration-300
                hover:border-[#A30018]
                flex
                flex-col
                justify-between
              "
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    loading="lazy"
                    sizes="
                      (max-width:768px) 100vw,
                      (max-width:1200px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Museum Tag Overlay */}
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full museum-plaque text-[#C5A059] text-[11px] font-bold tracking-widest shadow-md">
                    {course.tag}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-[#A30018] text-xs font-bold tracking-widest uppercase bg-[#A30018]/10 px-3 py-1 rounded-full">
                    {course.category}
                  </span>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#121212] group-hover:text-[#A30018] transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600 font-serif text-base md:text-lg">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={course.href}
                  className="
                    w-full
                    text-center
                    block
                    rounded-full
                    border
                    border-[#C5A059]/40
                    px-6
                    py-3.5
                    text-[#121212]
                    font-bold
                    transition-all
                    duration-300
                    hover:bg-[#A30018]
                    hover:border-[#A30018]
                    hover:text-white
                    shadow-sm
                  "
                >
                  استكشف تفاصيل الدورة ←
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}