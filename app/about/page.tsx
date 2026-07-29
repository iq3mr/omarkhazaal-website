import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Reveal from "../../components/ui/Reveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen">
        {/* Hero Section */}
        <section className="pt-44 pb-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <p className="text-[#A30018] tracking-[8px] uppercase text-sm font-semibold">
                    Biography & Vision
                  </p>

                  <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight">
                    عمر خزعل
                  </h1>

                  <p className="mt-8 text-2xl font-serif text-[#A30018] leading-relaxed">
                    فنان تشكيلي، ومدرس تربية فنية، وباحث في تعليم الفنون والثقافة البصرية.
                  </p>

                  <p className="mt-8 text-xl leading-10 text-neutral-600">
                    يعمل على تطوير المنهج العربي لتعليم الفنون التشكيلية والتصميم والرسم الأكاديمي، موازناً بين الخبرة النقدية الأكاديمية والتطبيق العملي المعاصر.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                  <Image
                    src="/about/omar-2026.webp"
                    alt="عمر خزعل"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats & Philosophy */}
        <section className="py-28 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-black">
                  فلسفة التعليم والأكاديمية
                </h2>

                <p className="mt-10 text-xl leading-10 text-neutral-600">
                  نؤمن في الأكاديمية بأن الفن ليس مجرد أداة أو تقنية عابرة، بل هو لغة فكرية متكاملة وأسلوب في صياغة المعنى الرصين والجمالي. تم تصميم مناهجنا لتبني الشخصية الفنية المستقلة لكل متدرب.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                <Reveal delay={0.1}>
                  <div className="p-6 rounded-3xl bg-[#F8F6F1]">
                    <h3 className="text-5xl font-black text-[#A30018]">+10</h3>
                    <p className="mt-2 text-neutral-600 font-medium">سنوات خبرة</p>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="p-6 rounded-3xl bg-[#F8F6F1]">
                    <h3 className="text-5xl font-black text-[#A30018]">+1000</h3>
                    <p className="mt-2 text-neutral-600 font-medium">طالب ومتدرب</p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="p-6 rounded-3xl bg-[#F8F6F1]">
                    <h3 className="text-5xl font-black text-[#A30018]">+50</h3>
                    <p className="mt-2 text-neutral-600 font-medium">ورشة ودورة</p>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="p-6 rounded-3xl bg-[#F8F6F1]">
                    <h3 className="text-5xl font-black text-[#A30018]">2026</h3>
                    <p className="mt-2 text-neutral-600 font-medium">تأسيس الأكاديمية</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
