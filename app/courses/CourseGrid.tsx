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
    image: "/courses/digitalc.webp",
    level: "مبتدئ → متقدم",
    lessons: "16 درس",
    href: "/courses/digital-painting",
  },
  {
    title: "الرسم الأكاديمي والمنظور",
    description:
      "افهم المنظور، الضوء والظل، التشريح والتكوين بطريقة منهجية عملية.",
    image: "/courses/drawingom.webp",
    level: "مبتدئ → متوسط",
    lessons: "14 درس",
    href: "/courses/drawing",
  },
  {
    title: "التصميم الجرافيكي",
    description:
      "تعلم الهيكل البصري، الشبكات التكوينية، بناء الهويات البصرية والبوسترات.",
    image: "/courses/designon.webp",
    level: "جميع المستويات",
    lessons: "18 درس",
    href: "/courses/design",
  },
  {
    title: "صناعة المحتوى والتسويق",
    description:
      "استراتيجيات الهوية الشخصية، إنشاء مقاطع الفيديو، وإدارة الحملات الإعلانية.",
    image: "/courses/contento.webp",
    level: "مبتدئ → متقدم",
    lessons: "12 درس",
    href: "/courses/marketing",
  },
  {
    title: "الذكاء الاصطناعي للمبدعين",
    description:
      "استخدام أدوات الذكاء الاصطناعي التوليدي في إنتاج الأفكار والمفهوم البصري.",
    image: "/courses/ai.webp",
    level: "جميع المستويات",
    lessons: "10 دروس",
    href: "/courses/ai",
  },
  {
    title: "منهجية البحث العلمي",
    description:
      "دورة متخصصة لتعليم كتابة وإعداد البحوث العلمية والرسائل الأكاديمية في الفنون التشكيلية.",
    image: "/courses/research.webp",
    level: "متوسط",
    lessons: "12 درس",
    href: "/courses/art-research",
  },
  {
    title: "برامج أوفيس الأساسية",
    description:
      "تعلم استخدام برامج Microsoft Office (Word, Excel, PowerPoint) لتسهيل العمل والدراسة.",
    image: "/courses/office.webp",
    level: "مبتدئ",
    lessons: "18 درس",
    href: "/courses/office",
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