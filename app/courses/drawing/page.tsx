import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Reveal from "../../../components/ui/Reveal";

export default function DrawingCoursePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen pt-44 pb-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div>
                <p className="text-[#A30018] tracking-[6px] uppercase text-sm font-semibold">
                  الدورة الأساسية
                </p>

                <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight">
                  الرسم الأكاديمي والمنظور
                </h1>

                <p className="mt-8 text-xl leading-10 text-neutral-600">
                  تعلم قواعد الرسم الأكاديمي، بناء التشريح، المنظور الهندسي والظل والنور بطريقة منهجية صحيحة توفر عليك سنوات من المحاولة والخطأ.
                </p>

                <div className="mt-12 flex flex-wrap gap-10">
                  <div>
                    <span className="text-neutral-500 text-sm">المستوى</span>
                    <h3 className="mt-2 text-2xl font-bold">مبتدئ إلى متوسط</h3>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-sm">الدروس</span>
                    <h3 className="mt-2 text-2xl font-bold">14 درساً</h3>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-sm">المدة</span>
                    <h3 className="mt-2 text-2xl font-bold">10 ساعات</h3>
                  </div>
                </div>

                <div className="mt-16 flex items-center gap-8">
                  <h2 className="text-5xl font-black text-[#A30018]">39$</h2>
                  <a href="https://wa.me/omarkhazaal.iq" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A30018] text-white px-10 py-4 font-bold hover:scale-105 transition inline-block">
                    اشترك الآن
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl">
                <Image
                  src="/courses/drawingom.webp"
                  alt="الرسم الأكاديمي والمنظور"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}