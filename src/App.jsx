import About from "./components/About";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Section order is intentionally recruiter-focused: impact first, credentials next. */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
