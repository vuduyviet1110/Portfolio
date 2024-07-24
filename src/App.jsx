import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technologies";
import Footer from "./components/Footer";
import Language from "./components/Languages";
import { motion } from "framer-motion";
export default function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const technologyRef = useRef(null);
  const scrollTo = (section) => {
    let ref;
    switch (section) {
      case "contact":
        ref = contactRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "technology":
        ref = technologyRef;
        break;
      default:
        ref = contactRef;
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <motion.div className="relative min-h-screen w-full bg-slate-900 overflow-y-scroll">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div className="md:px-32 px-10">
            <NavBar scrollTo={scrollTo} />
            <Hero />
            <About ref={aboutRef} />
            <Technology ref={technologyRef} />
            <Language />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
}
