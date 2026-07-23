"use client";

import Section from "../../components/ui/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";

const values = [
  {
    title: "منهج أكاديمي",
    description:
      "محتوى مبني على أسس التربية الفنية والتعليم الأكاديمي، وليس مجرد شروحات متفرقة.",
  },
  {
    title: "تطبيق عملي",
    description:
      "كل درس يقود إلى مشروع حقيقي يساعدك على بناء مهاراتك خطوة بخطوة.",
  },
  {
    title: "بناء أسلوبك",
    description:
      "الهدف ليس تقليد الآخرين، بل مساعدتك على تطوير هويتك الفنية الخاصة.",
  },
];

export default function AcademyValues() {
  return (
    <Section>

      <SectionTitle
        eyebrow="فلسفة الأكاديمية"
        title="تعليم يبني الفنان... لا مجرد المتلقي."
        description="كل دورة صُممت لتجمع بين المعرفة، والممارسة، والتفكير النقدي، حتى تصبح قادرًا على إنتاج أعمالك بثقة."
      />

      <div className="grid md:grid-cols-3 gap-8 mt-20">

        {values.map((value, index) => (
          <Card key={value.title} delay={index * 0.1}>
            <div className="p-10">

              <div className="w-16 h-16 rounded-2xl bg-[#A30018]/10 flex items-center justify-center text-[#A30018] text-2xl font-bold">
                0{index + 1}
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {value.title}
              </h3>

              <p className="mt-6 leading-9 text-neutral-600">
                {value.description}
              </p>

            </div>
          </Card>
        ))}

      </div>

    </Section>
  );
}