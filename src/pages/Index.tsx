import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-tech-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold tech-gradient bg-clip-text text-transparent mb-2">
              Mohammed Zeeshan
            </div>
            <p className="text-gray-400">Java Backend Developer & Structural Engineer</p>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mohammed Zeeshan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
