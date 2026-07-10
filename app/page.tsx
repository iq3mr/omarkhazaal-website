export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6">
          دفترنا
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          أكاديمية عمر خزعل
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-9">
          منصة عربية تهدف إلى تعليم الفن، التصميم، وصناعة المحتوى
          بطريقة أكاديمية حديثة وسهلة.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-black text-white hover:opacity-90">
            ابدأ القراءة
          </button>

          <button className="px-8 py-4 rounded-full border border-black">
            من أنا
          </button>
        </div>

      </section>
    </main>
  );
}