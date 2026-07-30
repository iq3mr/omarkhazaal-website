import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../components/ui/Reveal";

export default function ArtistVsDesignerArticle() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pt-44 pb-36">
        <article className="container max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <Link
                href="/journal"
                className="text-sm font-bold text-[#A30018] hover:underline"
              >
                ← العودة للدفتر
              </Link>
              <span className="text-neutral-300">•</span>
              <span className="text-sm text-neutral-500">2 يوليو 2026</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              كيف يكون النقد الحقيقي لفن الرسم؟
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xl text-neutral-500 font-medium">
              قواعد وأدوات التفكيك البصري للوحة وكيف تبني عينًا ناقدة تقيّم العمل الفني بأصول أكاديمية.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative aspect-[16/9] mt-12 rounded-[36px] overflow-hidden shadow-2xl">
              <Image
                src="/journal/post13.webp"
                alt="كيف يكون النقد الحقيقي لفن الرسم؟"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-16 bg-white rounded-[36px] p-8 md:p-16 shadow-lg space-y-8 text-lg leading-10 text-neutral-700">
            <p>
              النقد الفني ليس مجرد إبداء إعجاب أو عدم رغبة شخصية، بل هو عملية تحليل وتفكيك واعية لعناصر اللوحة التشكيلية من حيث البناء، المنظور، علاقات الألوان، والتعبير الوجداني الفلسفي للعمل.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12">
              العناصر الأساسية للتحليل البصري
            </h2>

            <p>
              يبدأ الناقد بدراسة التكوين العام (Composition)، كيف تُوزع الأشكال والكتل داخل الإطار، علاقة الضوء بالظل، وكيف تقود الألوان عين المشاهد للوصول إلى مركز السيادة باللوحة.
            </p>

            <blockquote className="border-r-4 border-[#A30018] pr-6 my-10 italic text-xl font-serif text-black leading-9">
              &ldquo;النقد البنّاء لا يقتل الشغف، بل يضيء للفنان الزوايا المعتمة التي لا يراها أثناء لحظة الإنفعال بالرسم.&rdquo;
            </blockquote>

            <h2 className="text-3xl font-bold text-black mt-12">
              تطوير الذائقة البصرية
            </h2>

            <p>
              تتطور عين الفنان والناقد بالمشاهدة المستمرة والمقارنة بين المدارس الفنية المختلفة وقراءة التجارب بعمق دون إصدار أحكام سريعة ومبسطة.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
