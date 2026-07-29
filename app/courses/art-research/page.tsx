"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArtResearchCourse() {
  return (
    <main className="bg-[#F5F2EB] min-h-screen">

      {/* Hero */}

      <section className="container pt-40 pb-24">

        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-[#A30018] mb-10"
        >
          <ArrowLeft size={18} />
          العودة إلى الدورات
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[#A30018] tracking-[6px] text-sm uppercase">
              Research
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              منهجية البحث العلمي
              <br />
              في الفنون التشكيلية
            </h1>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              دورة أكاديمية متخصصة لتعليم كتابة البحوث العلمية في مجال
              الفنون التشكيلية وفق الأسس الجامعية الحديثة، ابتداءً من
              اختيار موضوع البحث وحتى إعداد البحث أو الرسالة بصورة
              احترافية قابلة للمناقشة والنشر.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">

              <div>
                <h3 className="text-3xl font-black text-[#A30018]">
                  12
                </h3>

                <p className="mt-2 text-neutral-500">
                  درساً
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#A30018]">
                  10+
                </h3>

                <p className="mt-2 text-neutral-500">
                  ساعات
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#A30018]">
                  متوسط
                </h3>

                <p className="mt-2 text-neutral-500">
                  المستوى
                </p>
              </div>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[40px]">

            <Image
              src="/courses/research.webp"
              alt="منهجية البحث العلمي"
              width={900}
              height={1200}
              priority
              className="aspect-[4/5] w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* المحتوى */}

      <section className="container pb-32">

        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">
              ماذا ستتعلم؟
            </h2>

            <ul className="mt-10 space-y-6 text-lg leading-9 text-neutral-700">

              <li>• اختيار مشكلة البحث وصياغتها بطريقة أكاديمية.</li>

              <li>• صياغة عنوان بحث علمي احترافي.</li>

              <li>• كتابة المقدمة وأهمية البحث وأهدافه.</li>

              <li>• إعداد الإطار النظري والدراسات السابقة.</li>

              <li>• منهجية البحث و جمع البيانات.</li>

              <li>• التنضيد وفق الاساليب الأكاديمية.</li>

              <li>• كتابة النتائج والاستنتاجات.</li>

              <li>• تجنب الأخطاء الشائعة .</li>

            </ul>

          </div>

          <aside className="bg-white rounded-[32px] p-10 shadow-lg h-fit">

            <h3 className="text-3xl font-black">
              معلومات الدورة
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between">
                <span>المدة</span>
                <strong>10 ساعات</strong>
              </div>

              <div className="flex justify-between">
                <span>الدروس</span>
                <strong>+30 درساً</strong>
              </div>

              <div className="flex justify-between">
                <span>المستوى</span>
                <strong>الشامل</strong>
              </div>

              <div className="flex justify-between">
                <span>الشهادة</span>
                <strong>متوفرة</strong>
              </div>

            </div>

            <button
              className="
                mt-10
                w-full
                rounded-full
                bg-[#A30018]
                py-4
                text-white
                font-semibold
                transition
                hover:opacity-90
              "
            >
              التسجيل في الدورة
            </button>

          </aside>

        </div>

      </section>

    </main>
  );
}