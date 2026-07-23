import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";

export default function DigitalPaintingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1]">

        {/* Hero */}

        <section className="pt-44 pb-28">

          <div className="container">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              <div>

                <p className="text-[#A30018] tracking-[6px] uppercase text-sm">
                  الدورة الاحترافية
                </p>

                <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[1.05]">
                  الرسم الرقمي
                </h1>

                <p className="mt-10 text-xl leading-10 text-neutral-600 max-w-2xl">
                  دورة متكاملة لتعلم الرسم الرقمي تبدأ من المبادئ الأساسية
                  وحتى إنتاج أعمال احترافية باستخدام منهج عملي وتطبيقات
                  فعلي ومشاريع واقعية.
                </p>

                <div className="mt-12 flex flex-wrap gap-10">

                  <div>
                    <span className="text-neutral-500 text-sm">
                      المستوى
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      مبتدئ - متقدم
                    </h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">
                      الدروس
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      16 درس
                    </h3>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-sm">
                      المدة
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      8 ساعات
                    </h3>
                  </div>

                </div>

                <div className="mt-16 flex items-center gap-8">

                  <h2 className="text-5xl font-black text-[#A30018]">
                    49$
                  </h2>

                  <button
                    className="
                      rounded-full
                      bg-[#A30018]
                      text-white
                      px-10
                      py-4
                      hover:scale-105
                      transition
                    "
                  >
                    اشترك الآن
                  </button>

                </div>

              </div>

              <div>

                <Image
                  src="/courses/digitalc.jpg"
                  alt="الرسم الرقمي"
                  width={1600}
                  height={2000}
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

            <h2 className="text-5xl font-black">
              عن الدورة
            </h2>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              صُممت هذه الدورة لتكون مرجعاً عملياً لكل من يرغب
              في تعلم الرسم الرقمي بطريقة صحيحة،
              يقدمها الفنان التشكيلي (حيدر النقاشي) بتمارين متدرجة،
              مع التركيز على بناء المهارة وليس حفظ الخطوات فقط.
            </p>

          </div>

        </section>

        {/* Curriculum */}

        <section className="py-28">

          <div className="container max-w-5xl">

            <h2 className="text-5xl font-black">
              محتوى الدورة
            </h2>

            <div className="mt-16 space-y-6">

              {[
                "مقدمة في الرسم الرقمي",
                "الأدوات والفرش",
                "المنظور",
                "الضوء والظل",
                "نظرية اللون",
                "الرسم النهائي",
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
                  "
                >

                  <h3 className="text-2xl font-bold">
                    {lesson}
                  </h3>

                  <span className="text-neutral-400">
                    Module
                  </span>

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