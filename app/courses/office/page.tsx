import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OfficeCourse() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="container pt-44 pb-24">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[#A30018] mb-10 font-bold hover:underline"
          >
            <ArrowLeft size={18} />
            العودة إلى الدورات
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#A30018] tracking-[6px] text-sm uppercase font-semibold">
                Office
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
                برامج أوفيس الأساسية
              </h1>

              <p className="mt-10 text-xl leading-10 text-neutral-600">
                دورة عملية تبدأ من الصفر لتعليم استخدام برامج Microsoft Office
                الأساسية، مع تطبيقات واقعية تساعد الطالب والموظف والباحث على
                إنجاز أعماله بكفاءة واحترافية.
              </p>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-black text-[#A30018]">18</h3>
                  <p className="mt-2 text-neutral-500 font-medium">درساً</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#A30018]">12+</h3>
                  <p className="mt-2 text-neutral-500 font-medium">ساعات</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#A30018]">مبتدئ</h3>
                  <p className="mt-2 text-neutral-500 font-medium">المستوى</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/courses/office.webp"
                alt="برامج أوفيس الأساسية"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* المحتوى */}
        <section className="container pb-32">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black">ماذا ستتعلم؟</h2>

              <ul className="mt-10 space-y-6 text-lg leading-9 text-neutral-700">
                <li>• التعرف على بيئة Microsoft Office.</li>
                <li>• إنشاء وتنسيق المستندات باستخدام Word.</li>
                <li>• إعداد التقارير والأبحاث بطريقة احترافية.</li>
                <li>• إنشاء الجداول والحسابات باستخدام Excel.</li>
                <li>• استخدام الدوال الأساسية وتخصيص الخلايا.</li>
                <li>• تصميم عروض تقديمية احترافية باستخدام PowerPoint.</li>
                <li>• تنظيم الملفات و ادارة العمل.</li>
                <li>• أفضل الممارسات لزيادة الإنتاجية في العمل والدراسة.</li>
              </ul>
            </div>

            <aside className="bg-white rounded-[32px] p-10 shadow-lg h-fit">
              <h3 className="text-3xl font-black">معلومات الدورة</h3>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between">
                  <span>المدة</span>
                  <strong>12 ساعة</strong>
                </div>

                <div className="flex justify-between">
                  <span>الدروس</span>
                  <strong>+18 درساً</strong>
                </div>

                <div className="flex justify-between">
                  <span>المستوى</span>
                  <strong>المبتدئ إلى المتوسط</strong>
                </div>

                <div className="flex justify-between">
                  <span>الشهادة</span>
                  <strong>متوفرة</strong>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdx88xZ3ODj_1NwOox-7M0bZvWpFMVLiulmKmmZpsXOuvB9CQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  block
                  w-full
                  text-center
                  rounded-full
                  bg-[#A30018]
                  py-4
                  text-white
                  font-semibold
                  transition
                  hover:opacity-90
                  hover:scale-[1.02]
                "
              >
                التسجيل في الدورة
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}