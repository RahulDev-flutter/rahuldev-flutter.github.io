import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { scrollToSection } from './utils/scrollUtils';

function App() {
  const activeSection = useActiveSection();
  useTheme();

  return (
    <div className="relative bg-bg text-fg overflow-x-hidden min-h-screen">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 dot-bg opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] rounded-full bg-accent/[0.04] blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-accent/[0.03] blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
