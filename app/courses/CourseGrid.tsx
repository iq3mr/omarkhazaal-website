"use client";

import Image from "next/image";
import Card from "../../components/ui/Card";
import Section from "../../components/ui/Section";
import SectionTitle from "../../components/ui/SectionTitle";

const courses = [
  {
    title: "الرسم الرقمي",
    description:
      "تعلم الرسم الرقمي من الصفر حتى الاحتراف باستخدام منهج أكاديمي ومشاريع عملية.",
    image: "/courses/digital-painting.jpg",
    level: "مبتدئ → متقدم",
    lessons: "42 درس",
    href: "/courses/digital-painting",
  },
  {
    title: "أساسيات الرسم",
    description:
      "افهم المنظور، الضوء، الظل، التشريح، والتكوين بطريقة سهلة وعملية.",
    image: "/courses/drawing-basics.jpg",
    level: "مبتدئ",
    lessons: "30 درس",
    href: "/courses/drawing-basics",
  },
  {
    title: "نظرية اللون",
    description:
      "تعلم اختيار الألوان، بناء اللوحات، وتحقيق الانسجام البصري.",
    image: "/courses/color-theory.jpg",
    level: "متوسط",
    lessons: "18 درس",
    href: "/courses/color-theory",
  },
];

export default function CourseGrid() {
  return (
    <Section className="pt-10" id="courses">

      <SectionTitle
        eyebrow="الدورات"
        title="ابدأ رحلتك التعليمية"
        description="اختر المسار المناسب لك، وتعلم خطوة بخطوة من خلال محتوى عملي ومنظم."
      />

      <div className="grid lg:grid-cols-3 gap-10 mt-20">

        {courses.map((course, index) => (

          <Card
            key={course.title}
            href={course.href}
            delay={index * 0.1}
          >

            <Image
              src={course.image}
              alt={course.title}
              width={700}
              height={900}
              className="
aspect-[4/5]
w-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
            />

            <div className="p-8">

              <div className="flex items-center justify-between text-sm text-neutral-500">

                <span>{course.level}</span>

                <span>{course.lessons}</span>

              </div>

              <h3 className="mt-5 text-3xl font-bold leading-snug">
                {course.title}
              </h3>

              <p className="mt-5 leading-9 text-neutral-600">
                {course.description}
              </p>

              <div className="mt-8 text-[#A30018] font-semibold">
                عرض الدورة →
              </div>

            </div>

          </Card>

        ))}

      </div>

    </Section>
  );
}