import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function MarketingCoursePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-[#F8F6F1]">
        <div className="text-center">
          <h1 className="text-5xl font-black">قريبًا</h1>

          <p className="mt-6 text-neutral-600">
            يجري إعداد هذه الدورة.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}