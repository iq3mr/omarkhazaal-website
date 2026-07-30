import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../components/ui/Reveal";

export default function WhyPeopleFailArticle() {
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
              <span className="text-sm text-neutral-500">8 يوليو 2026</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              ما حقيقة الأسعار المرتفعة للوحات؟
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xl text-neutral-500 font-medium">
              تحليل اقتصادي وفلسفي لظاهرة المظادات وسوق الفن العالمي.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative aspect-[16/9] mt-12 rounded-[36px] overflow-hidden shadow-2xl">
              <Image
                src="/journal/post12.webp"
                alt="ما حقيقة الأسعار المرتفعة للوحات؟"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-16 bg-white rounded-[36px] p-8 md:p-16 shadow-lg space-y-8 text-lg leading-10 text-neutral-700">
            <p>
              يتحول الخبر عندما تُباع لوحة بمليارات الأرقام إلى مادة مثيرة للدهشة والاستنكار. يتساءل الجمهور: هل صُرف كل هذا المال لمجرد ألوان على قماش؟ وما الذي يمنح العمل الفني هذه القيمة الخيالية؟
            </p>

            <h2 className="text-3xl font-bold text-black mt-12">
              القيمة الجمالية مقابل القيمة السوقية
            </h2>

            <p>
              يجب الفصل بين الجودة الفنية الصرفة للعمل القائمة على الأصالة والتأثير البصري، وبين قيمته في السوق التجارية المعاصرة التي تتحكم فيها دور المزادات العالمية والمؤسسات المالكية لرؤوس الأموال.
            </p>

            <blockquote className="border-r-4 border-[#A30018] pr-6 my-10 italic text-xl font-serif text-black leading-9">
              &ldquo;السعر لا يعكس بالضرورة قمة الإبداع الجمالي، بل يعكس أحيانًا ندرة العمل وثقل الاسم ورمزية الرمز الأكاديمي.&rdquo;
            </blockquote>

            <h2 className="text-3xl font-bold text-black mt-12">
              كيف يحافظ الفنان على استقلاليته؟
            </h2>

            <p>
              الرهان الحقيقي للفنان ليس في تتبع موجات السوق السريعة، بل في بناء مشروع فني أصيل يفرض قيمته الإنسانية والبصرية المستدامة مع مرور الزمن.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
