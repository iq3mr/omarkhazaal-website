import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/ui/Reveal";
import { Mail, ExternalLink, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F1] min-h-screen pt-44 pb-36">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#A30018] tracking-[8px] uppercase text-sm font-semibold">
                Get In Touch
              </p>

              <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight">
                تواصل معنا
              </h1>

              <p className="mt-8 text-xl leading-10 text-neutral-600">
                سواء كنت ترغب في الاستفسار عن الدورات، الاستشارات الفنية، أو التعاون الأكاديمي، يسعدنا التواضل معك.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 mt-20">
            {/* Contact Form */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl font-bold">أرسل رسالة مباشرة</h2>
                <form className="mt-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      placeholder="أدخل اسمك هنا"
                      className="w-full rounded-2xl border border-neutral-200 p-4 outline-none focus:border-[#A30018] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-neutral-200 p-4 outline-none focus:border-[#A30018] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      rows={5}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full rounded-2xl border border-neutral-200 p-4 outline-none focus:border-[#A30018] transition resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-full bg-[#A30018] text-white py-4 font-bold flex items-center justify-center gap-3 hover:bg-[#800013] transition"
                  >
                    <span>إرسال الرسالة</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Contact Info Cards */}
            <Reveal delay={0.2}>
              <div className="space-y-6 flex flex-col justify-center">
                <div className="bg-white rounded-[32px] p-8 shadow-md flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#A30018]/10 text-[#A30018] flex items-center justify-center shrink-0">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                      البريد الإلكتروني
                    </h3>
                    <a
                      href="mailto:omarkhazaal.iq@gmail.com"
                      className="text-xl font-bold mt-1 text-black hover:text-[#A30018] transition block"
                    >
                      omarkhazaal.iq@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-[32px] p-8 shadow-md flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#A30018]/10 text-[#A30018] flex items-center justify-center shrink-0">
                    <ExternalLink size={32} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                      إنستغرام
                    </h3>
                    <a
                      href="https://instagram.com/iq3mr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold mt-1 text-black hover:text-[#A30018] transition block"
                    >
                      @iq3mr
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-[32px] p-8 shadow-md flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#A30018]/10 text-[#A30018] flex items-center justify-center shrink-0">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                      خدمة المتدربين والطلاب
                    </h3>
                    <p className="text-xl font-bold mt-1 text-black">
                      متاحة من الأحد إلى الخميس
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
