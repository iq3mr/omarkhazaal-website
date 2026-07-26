import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";

export default function DrawingCoursePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1]">
        {/* Hero */}
        <section className="pt-44 pb-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[#A30018] tracking-[6px] uppercase text-sm font-semibold">
                  الدورة الأساسية
                </p>

                <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[1.05]">
                  الرسم الأكاديمي والمنظور
                </h1>

                <p className="mt-10 text-xl leading-10 text-neutral-600 max-w-2xl">
                  تعلم قواعد الرسم الأكاديمي، بناء المنظور الهندسي، التشريح الفني، والتحكم في الضوء والظل بطريقة منهجية توفر عليك سنوات من التخبط والأخطاء.
                </p>

                <div className="mt-12 flex flex-wrap gap-10">
                  <div>
                    <span className="text-neutral-500 text-sm">المستوى</span>
                    <h3 className="mt-2 text-2xl font-bold">مبتدئ - متوسط</h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">الدروس</span>
                    <h3 className="mt-2 text-2xl font-bold">14 درس</h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">المدة</span>
                    <h3 className="mt-2 text-2xl font-bold">10 ساعات</h3>
                  </div>
                </div>

                <div className="mt-16 flex items-center gap-8">
                  <h2 className="text-5xl font-black text-[#A30018]">39$</h2>

                  <a
                    href="https://wa.me/omarkhazaal.iq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-full
                      bg-[#A30018]
                      text-white
                      px-10
                      py-4
                      hover:scale-105
                      transition
                      inline-block
                      font-bold
                    "
                  >
                    اشترك الآن
                  </a>
                </div>
              </div>

              <div>
                <Image
                  src="/courses/drawingom.webp"
                  alt="الرسم الأكاديمي والمنظور"
                  width={1600}
                  height={2000}
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="
                    w-full
                    rounded-[36px]
                    object-cover
                    shadow-2xl
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-28 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-5xl font-black">عن الدورة</h2>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              تضع هذه الدورة الحجر الأساس لكل فنان وشغوف بالرسم. ستتعلم من خلالها كيفية مراقبة الأشكال وتفكيك المنظور الهندسي بنقطة ونقطتي تلاشٍ، وتدريب العين على قياس النسب ببرهان أكاديمي، بالإضافة إلى كيفية بناء الحجم والتأثير الضوئي بدقة على مختلف الأسطح.
            </p>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-28">
          <div className="container max-w-5xl">
            <h2 className="text-5xl font-black">محتوى الدورة</h2>

            <div className="mt-16 space-y-6">
              {[
                "مبادئ الإمساك بالقلم والخطوط الأولية",
                "قواعد المنظور بنقطة ونقطتي تلاشٍ",
                "دراسة الضوء والظل وتدرج القيمة التظليلية",
                "نسب وتكنيك رسم الأشكال الهندسية والمركبة",
                "أساسيات تشريح الوجه والعناصر الطبيعية",
                "مشروع التخرج: رسم لوحة أكاديمية متكاملة",
              ].map((lesson) => (
                <div
                  key={lesson}
                  className="
                    rounded-3xl
                    border
                    border-neutral-200
                    p-8
                    flex
                    justify-between
                    items-center
                    bg-white
                    shadow-sm
                  "
                >
                  <h3 className="text-2xl font-bold">{lesson}</h3>

                  <span className="text-neutral-400 font-medium">Module</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}