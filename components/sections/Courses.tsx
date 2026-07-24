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
    <section className="py-28 md:py-36 bg-[#F5F2EB]">
      <div className="container">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="text-[#A30018] tracking-[6px] uppercase text-sm"
        >
          Courses
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-5 text-5xl md:text-7xl font-black"
        >
          الدورات
        </motion.h2>

        <p className="mt-8 max-w-3xl text-lg md:text-xl leading-9 md:leading-10 text-neutral-600">
          مجموعة من الدورات المصممة لتطوير مهارات الفنان وصانع المحتوى،
          بالاعتماد على خبرة أكاديمية وعملية.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

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
                delay: index * 0.04,
              }}
              whileHover={{ y: -4 }}
              className="
                group
                overflow-hidden
                rounded-[30px]
                bg-white
                shadow-md
                transition-shadow
                hover:shadow-xl
              "
            >

              <div className="relative aspect-[4/3] overflow-hidden">

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
                    duration-500
                    group-hover:scale-[1.03]
                  "
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
                    transition-colors
                    duration-300
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