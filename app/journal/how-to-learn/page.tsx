import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../components/ui/Reveal";

export default function HowToLearnArticle() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen pt-44 pb-36">
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
              <span className="text-sm text-neutral-500">12 يوليو 2026</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              هل لتاريخ الفن أن يكذب؟
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xl text-neutral-500 font-medium">
              قراءة نقدية في كيفية تشكيل السرديات البصرية وتأثير التاريخ المكتوب على فهمنا المعاصر للإبداع.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative aspect-[16/9] mt-12 rounded-[36px] overflow-hidden shadow-2xl">
              <Image
                src="/journal/post11.webp"
                alt="هل لتاريخ الفن أن يكذب؟"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-16 bg-white rounded-[36px] p-8 md:p-16 shadow-lg space-y-8 text-lg leading-10 text-neutral-700">
            <p>
              عندما نتصفح كتب تاريخ الفن، ننسى غالبًا أن ما نقرأه ليس تسجيلًا حاديًا ومطلقًا للواقع المادي، بل هو نصٌ كتبه مؤرخون يملكون انحيازاتهم ومفاهيم عصرهم ومواقعهم الجغرافية. السؤال ليس فقط هل التاريخ يروي الحقيقة، بل من الذي يقرر ما هو الفن الحقيقي ومن يترك خارج الهامش؟
            </p>

            <h2 className="text-3xl font-bold text-black mt-12">
              السرديات المركزية والهامش
            </h2>

            <p>
              لعقود طويلة، صيغ تاريخ الفن عبر مركزية غربية جعلت من النهضة الأوروبية والمدارس الانطباعية والمستقبلية المعيار الوحيد لتقييم الجمال. أدى ذلك إلى تهميش المدارس الشرقية والعربية التي قدمت فلسفات بصريّة معقدة في التجريد والزخرفة قبل المدارس الحديثة بقرون.
            </p>

            <blockquote className="border-r-4 border-[#A30018] pr-6 my-10 italic text-xl font-serif text-black leading-9">
              &ldquo;الفن لا يولد في الفراغ، والتاريخ الذي يغفل السياق الاجتماعي والروحي لا يروي سوى نصف الحقيقة.&rdquo;
            </blockquote>

            <h2 className="text-3xl font-bold text-black mt-12">
              كيف نعيد قراءة التاريخ بعين نقاد اليوم؟
            </h2>

            <p>
              إن إعادة بناء الوعي البصري تتطلب منا ألا نتلقى السرديات الجاهزة كمسلّمات. الفن التشكيلي المعاصر يحتاج إلى تفكيك الأدوات، والبحث في الأصول والأسباب التي جعلت عملاً ما يُصنف كأيقونة خالدة بينما طوى النسيان أعمالاً لا تقل عمقاً وأصالة.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
