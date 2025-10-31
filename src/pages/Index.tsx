import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Web3Achievements from '@/components/Web3Achievements';
import OngoingProjects from '@/components/OngoingProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <FloatingCTA />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <OngoingProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
