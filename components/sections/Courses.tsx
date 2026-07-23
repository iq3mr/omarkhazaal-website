"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "الرسم الأكاديمي",
    category: "Drawing",
    description:
      "تعلم أسس الرسم الأكاديمي والمنظور والتشريح والظل والنور بطريقة منهجية.",
    image: "/courses/drawingom.jpg",
  },
  {
    title: "الرسم الرقمي",
    category: "Digital Art",
    description:
      "احتراف الرسم الرقمي باستخدام أحدث البرامج وأفضل أساليب العمل.",
    image: "/courses/digitalc.jpg",
  },
  {
    title: "التصميم الجرافيكي",
    category: "Design",
    description:
      "تعلم تصميم الهوية البصرية والملصقات والمنشورات بطريقة احترافية.",
    image: "/courses/designon.jpg",
  },
  {
    title: "صناعة المحتوى",
    category: "Content",
    description:
      "كيف تبني محتوى احترافياً يجذب الجمهور ويصنع هوية شخصية قوية.",
    image: "/courses/contento.jpg",
  },
  {
    title: "التسويق الرقمي",
    category: "Marketing",
    description:
      "إعلانات Meta واستراتيجيات النمو وإدارة الحملات التسويقية.",
    image: "/courses/marketing.jpg",
  },
  {
    title: "الذكاء الاصطناعي للمبدعين",
    category: "AI",
    description:
      "استخدام أدوات الذكاء الاصطناعي في التصميم وصناعة المحتوى.",
    image: "/courses/ai.jpg",
  },
];

export default function Courses() {
  return (
    <section className="py-36 bg-[#F5F2EB]">
      <div className="container">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A30018] tracking-[6px] uppercase text-sm"
        >
          Courses
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl md:text-7xl font-black"
        >
          الدورات
        </motion.h2>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-600">
          مجموعة من الدورات المصممة لتطوير مهارات الفنان وصانع المحتوى،
          بالاعتماد على خبرة أكاديمية وعملية.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">

                <span className="text-[#A30018] text-sm tracking-widest uppercase">
                  {course.category}
                </span>

                <h3 className="mt-3 text-3xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600">
                  {course.description}
                </p>

                <button
                  className="
                    mt-8
                    rounded-full
                    border
                    border-[#A30018]
                    px-6
                    py-3
                    text-[#A30018]
                    transition
                    hover:bg-[#A30018]
                    hover:text-white
                  "
                >
                  استكشف الدورة
                </button>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}