import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="animated-gradient min-h-screen overflow-hidden text-white">

      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <Footer />

      <BackToTop />

    </div>
  );
}