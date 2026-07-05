import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import Education from "./components/Education";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <BackToTop />
      <ThemeToggle />
      <Footer />
    </>
  );
}

export default App;