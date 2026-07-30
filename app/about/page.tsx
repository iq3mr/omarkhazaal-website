import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Reveal from "../../components/ui/Reveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden">
          <div className="container overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <Reveal>
                <div className="max-w-full overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full museum-plaque text-[#C5A059] text-xs font-bold tracking-[4px] sm:tracking-[6px] uppercase mb-6">
                    BIOGRAPHY & VISION
                  </div>

                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-tight text-[#121212]">
                    عمر خزعل
                  </h1>

                  <p className="mt-6 sm:mt-8 text-xl sm:text-2xl font-serif text-[#A30018] leading-relaxed">
                    فنان تشكيلي، ومدرس تربية فنية، وباحث في تعليم الفنون والثقافة البصرية.
                  </p>

                  <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10 text-neutral-700 font-serif">
                    يعمل على تطوير المنهج العربي لتعليم الفنون التشكيلية والتصميم والرسم الأكاديمي، موازناً بين الخبرة النقدية الأكاديمية والتطبيق العملي المعاصر.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-[#C5A059]/30 p-2 bg-white">
                  <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden">
                    <Image
                      src="/about/omar-2026.webp"
                      alt="عمر خزعل"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats & Philosophy */}
        <section className="py-20 sm:py-28 bg-white border-t border-[#C5A059]/20 overflow-hidden">
          <div className="container overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#121212]">
                  فلسفة التعليم والأكاديمية
                </h2>

                <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10 text-neutral-700 font-serif">
                  نؤمن في الأكاديمية بأن الفن ليس مجرد أداة أو تقنية عابرة، بل هو لغة فكرية متكاملة وأسلوب في صياغة المعنى الرصين والجمالي. تم تصميم مناهجنا لتبني الشخصية الفنية المستقلة لكل متدرب.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20">
                <Reveal delay={0.1}>
                  <div className="p-4 sm:p-6 rounded-3xl bg-[#FAF8F3] border border-[#C5A059]/20 museum-frame-shadow">
                    <h3 className="text-3xl sm:text-5xl font-black text-[#A30018]">+10</h3>
                    <p className="mt-2 text-neutral-600 font-medium text-xs sm:text-base">سنوات خبرة</p>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="p-4 sm:p-6 rounded-3xl bg-[#FAF8F3] border border-[#C5A059]/20 museum-frame-shadow">
                    <h3 className="text-3xl sm:text-5xl font-black text-[#A30018]">+1000</h3>
                    <p className="mt-2 text-neutral-600 font-medium text-xs sm:text-base">طالب ومتدرب</p>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="p-4 sm:p-6 rounded-3xl bg-[#FAF8F3] border border-[#C5A059]/20 museum-frame-shadow">
                    <h3 className="text-3xl sm:text-5xl font-black text-[#A30018]">7</h3>
                    <p className="mt-2 text-neutral-600 font-medium text-xs sm:text-base">مسارات أكاديمية</p>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="p-4 sm:p-6 rounded-3xl bg-[#FAF8F3] border border-[#C5A059]/20 museum-frame-shadow">
                    <h3 className="text-3xl sm:text-5xl font-black text-[#A30018]">2026</h3>
                    <p className="mt-2 text-neutral-600 font-medium text-xs sm:text-base">تأسيس الأكاديمية</p>
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
