import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CourseHero from "./CourseHero";
import AcademyValues from "./AcademyValues";
import CourseGrid from "./CourseGrid";

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main>
  <CourseHero />
  <AcademyValues />
  <CourseGrid />
</main>

      <Footer />
    </>
  );
}