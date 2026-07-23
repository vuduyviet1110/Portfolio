import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technologies";
import Footer from "./components/Footer";
import Language from "./components/Languages";
import Experience from "./components/Experience";
import { motion } from "framer-motion";

export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const technologyRef = useRef(null);

  const scrollTo = (section) => {
    let ref;
    switch (section) {
      case "about":
        ref = aboutRef;
        break;
      case "experience":
        ref = experienceRef;
        break;
      case "technology":
        ref = technologyRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = contactRef;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 z-0 dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.15),transparent_50%)] bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar scrollTo={scrollTo} />
        <Hero />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Technology ref={technologyRef} />
        <Language />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}
