import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";

export default function DesignCoursePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="pt-44 pb-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[#A30018] tracking-[6px] uppercase text-sm font-semibold">
                  مسار التصميم
                </p>

                <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[1.05]">
                  التصميم الجرافيكي الهيكلي
                </h1>

                <p className="mt-10 text-xl leading-10 text-neutral-600 max-w-2xl">
                  دورة احترافية في فهم الهيكل البصري، الشبكات التكوينية (Grids)، اختيار الخطوط والألوان، وبناء الهويات البصرية القوية والملصقات التجارية.
                </p>

                <div className="mt-12 flex flex-wrap gap-10">
                  <div>
                    <span className="text-neutral-500 text-sm">المستوى</span>
                    <h3 className="mt-2 text-2xl font-bold">جميع المستويات</h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">الدروس</span>
                    <h3 className="mt-2 text-2xl font-bold">18 درس</h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">المدة</span>
                    <h3 className="mt-2 text-2xl font-bold">12 ساعة</h3>
                  </div>
                </div>

                <div className="mt-16 flex items-center gap-8">
                  <h2 className="text-5xl font-black text-[#A30018]">59$</h2>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdx88xZ3ODj_1NwOox-7M0bZvWpFMVLiulmKmmZpsXOuvB9CQ/viewform?usp=dialog"
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
                  src="/courses/designon.webp"
                  alt="التصميم الجرافيكي الهيكلي"
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
              التصميم الجرافيكي ليس مجرد تجميع للصور والخطوط، بل هو علم صياغة الرسائل البصرية التي تجذب العين وتقنع المشاهد. تأخذك هذه الدورة في رحلة تطبيقية من قواعد التوازن البصري والتايبوجرافي، وحتى إخراج هويات بصرية متكاملة للشركات والعلامات التجارية.
            </p>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-28">
          <div className="container max-w-5xl">
            <h2 className="text-5xl font-black">محتوى الدورة</h2>

            <div className="mt-16 space-y-6">
              {[
                "أسس التفكير البصري وفلسفة التصميم",
                "نظام الشبكات (Grid Systems) والتوزين البصري",
                "فن اختيار الخطوط وتنسيق النصوص (Typography)",
                "سيكولوجية الألوان وبناء التباين الجذاب",
                "تصميم البوسترات والملصقات الإعلانية",
                "بناء دليل الهوية البصرية (Brand Guidelines)",
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