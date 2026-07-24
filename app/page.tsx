import dynamic from "next/dynamic";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Background from "../components/background/Background";

const Manifesto = dynamic(
  () => import("../components/sections/Manifesto")
);

const FeaturedCourse = dynamic(
  () => import("../components/sections/FeaturedCourse")
);

const FeaturedBook = dynamic(
  () => import("../components/sections/FeaturedBook")
);

const Courses = dynamic(
  () => import("../components/sections/Courses")
);

const Books = dynamic(
  () => import("../components/sections/Books")
);

const Notebook = dynamic(
  () => import("../components/sections/Notebook")
);

const About = dynamic(
  () => import("../components/sections/About")
);

const Contact = dynamic(
  () => import("../components/sections/Contact")
);

const ContactCTA = dynamic(
  () => import("../components/sections/ContactCTA")
);

const Footer = dynamic(
  () => import("../components/layout/Footer")
);

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