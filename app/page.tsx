import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Manifesto from "../components/sections/Manifesto";
import Courses from "../components/sections/Courses";
import Books from "../components/sections/Books";
import Notebook from "../components/sections/Notebook";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Background from "../components/background/Background";
import FeaturedCourse from "../components/sections/FeaturedCourse";
import FeaturedBook from "../components/sections/FeaturedBook";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <Hero />

      <Manifesto />

      <FeaturedCourse />

      <FeaturedBook />

      <Courses />

      <Books />

      <Notebook />

      <About />

      <Contact />

      <ContactCTA />

      <Footer />
    </>
  );
}