import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/ui/Reveal";

const posts = [
  {
    slug: "how-to-learn",
    title: "هل لتاريخ الفن أن يكذب؟",
    excerpt:
      "قراءة نقدية في إعادة كتابة التاريخ الفني وكيف تشكلت السرديات الكبرى حول المدارس الفنية، وتأثير الرؤية البصرية الشمولية على فهم الإبداع.",
    date: "12 يوليو 2026",
    category: "أبحاث وفلسفة",
    image: "/journal/post11.webp",
  },
  {
    slug: "why-people-fail",
    title: "ما حقيقة الأسعار المرتفعة للوحات؟",
    excerpt:
      "تحليل اقتصادي وثقافي لسوق الفن العالمي: ما الذي يجعل لوحة تساوي ملايين الدولارات؟ وكيف تتقاطع قيمتها الجمالية مع المضاربة والسوق.",
    date: "8 يوليو 2026",
    category: "اقتصاد الفن",
    image: "/journal/post12.webp",
  },
  {
    slug: "artist-vs-designer",
    title: "كيف يكون النقد الحقيقي لفن الرسم؟",
    excerpt:
      "بين المجاملة والنقد الأكاديمي الرصين: أدوات وقواعد التفكيك البصري للوحة وكيف يبني الفنان عينًا ناقدة تقيم العمل بعيداً عن الانطباع السطحي.",
    date: "2 يوليو 2026",
    category: "نقد وثقافة بصرية",
    image: "/journal/post13.webp",
  },
];

export default function JournalPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen">
        {/* Header */}
        <section className="pt-44 pb-20">
          <div className="container text-center max-w-4xl">
            <Reveal>
              <p className="text-[#A30018] tracking-[8px] uppercase text-sm font-semibold">
                Journal & Essays
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight">
                دفترنا
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-xl leading-10 text-neutral-600">
                مقالات، دراسات، وتأملات في الفن والتعليم والثقافة البصرية، تُكتب لترافق رحلتك الإبداعية وتفتح لك آفاقاً جديدة.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-36">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.1}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group bg-white rounded-[32px] overflow-hidden shadow-md block hover:shadow-2xl transition duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-bold text-[#A30018] tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {post.date}
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:text-[#A30018] transition">
                        {post.title}
                      </h2>

                      <p className="mt-4 text-base leading-8 text-neutral-600 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-8 text-[#A30018] font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        <span>اقرأ المقال الكامل</span>
                        <span>←</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
