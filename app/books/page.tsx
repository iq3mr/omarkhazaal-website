import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Reveal from "../../components/ui/Reveal";

const books = [
  {
    title: "عين التربية الفنية",
    subtitle: "منهج بصرية حديث لتدريس الفنون",
    year: "2026",
    pages: "150 صفحة",
    description:
      "مرجع أكاديمي وتطبيقي شامل لتعليم التربية الفنية، يجمع بين الأسس النظرية والتطبيق العملي. يقدم هذا الكتاب خطة منهجية مبسطة لإعادة اكتشاف الرؤية البصرية، مخصص للطلاب، المعلمين، والشغوفين بالفن.",
    image: "/books/3aynaltarbya.webp",
    features: [
      "أسس المنظور والتشريح البصري",
      "قواعد التذوق والتحليل الفني",
      "تمارين عملية متدرجة للمبتدئين والمتقدمين",
      "نماذج توضيحية من أشهر الأعمال العالمية والعربية",
    ],
  },
  {
    title: "فن الرسم العراقي",
    subtitle: "قراءة في تاريخ الحركة التشكيلية والتقنيات",
    year: "قريباً",
    pages: "220 صفحة",
    description:
      "دراسة استعراضية متعمقة لتاريخ الفن التشكيلي في العراق، تبدأ من الرادكاليين والأوائل حتى التجربة المعاصرة. يقدم الكاتب تحليلاً أسلوبياً وتقنياً لأبرز رواد الحركة التشكيلية الرائدة.",
    image: "/books/fanalrasm.webp",
    features: [
      "تحليل أساليب رواد الفن العراقي",
      "قراءة في المدارس والتجارب الحديثة",
      "وثائق وصور لأهم الأعمال التاريخية",
      "دليل شامل لفهم الرؤية البصرية التشكيلية",
    ],
  },
];

export default function BooksPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen">
        {/* Header */}
        <section className="pt-44 pb-20">
          <div className="container text-center max-w-4xl">
            <Reveal>
              <p className="text-[#A30018] tracking-[8px] uppercase text-sm font-semibold">
                Library & Publications
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight">
                المكتبة والمؤلفات
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-xl leading-10 text-neutral-600">
                مؤلفات أكاديمية تهدف إلى إثراء المكتبة العربية في مجالات الفن والتربية البصرية، تجمع بين المعرفة النظرية والخبرة التطبيقية.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Books List */}
        <section className="pb-36">
          <div className="container space-y-28">
            {books.map((book, index) => (
              <Reveal key={book.title} delay={index * 0.15}>
                <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-lg grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative aspect-[3/4] max-w-md mx-auto w-full overflow-hidden rounded-[32px] shadow-2xl">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#A30018] font-bold text-sm tracking-widest uppercase">
                        {book.year}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-neutral-500 text-sm">
                        {book.pages}
                      </span>
                    </div>

                    <h2 className="mt-4 text-4xl md:text-5xl font-black">
                      {book.title}
                    </h2>

                    <p className="mt-2 text-lg text-[#A30018] font-medium">
                      {book.subtitle}
                    </p>

                    <p className="mt-6 text-lg leading-9 text-neutral-600">
                      {book.description}
                    </p>

                    <div className="mt-8 space-y-3">
                      {book.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#A30018]" />
                          <span className="text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                      <button className="rounded-full bg-[#A30018] text-white !text-white px-8 py-4 text-base font-bold hover:bg-[#800013] transition shadow-md">
                        استعراض تفاصيل الكتاب
                      </button>
                      <button className="rounded-full border border-neutral-300 text-neutral-700 px-8 py-4 text-base font-semibold hover:border-black transition">
                        طلب النسخة الورقية
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
