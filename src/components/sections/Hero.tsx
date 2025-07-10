import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Database, Coffee, MessageCircleDashed } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-400/20 animate-gradient-shift"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-2xl animate-pulse-glow"></div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 bg-modern-grid opacity-30"></div>
      </div>
      
      {/* Glassmorphism particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="modern-particles"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Modern Profile Section */}
          <div className="mb-16 animate-float-in">
            <div className="relative inline-block group">
              {/* Glassmorphism profile container */}
              <div className="relative w-72 h-72 mx-auto">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 animate-spin-slow shadow-2xl">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-xl border border-white/10"></div>
                </div>
                
                {/* Profile content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-cyan-500/90 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Mohammed Zeeshan" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                </div>
                
                {/* Floating status badges */}
                <div className="absolute -top-4 -right-4 bg-green-500/90 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 shadow-lg animate-bounce-gentle">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    Available for Work
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                  Mohammed Zeeshan
                </div>
              </div>
            </div>
          </div>

          {/* Modern Typography */}
          <div className="mb-12 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  I craft
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-text">
                    modern
                  </span>
                  <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-cyan-400 animate-sparkle" />
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
                  backend solutions
                </span>
              </h1>
            </div>
            
            <div className="space-y-3">
              <div className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                Senior Java Backend Developer
              </div>
              <div className="text-lg text-blue-300 font-medium">
                Building scalable systems with passion & precision
              </div>
            </div>
          </div>

          {/* Modern Feature Cards */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up">
            <div className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
              <Code2 className="w-8 h-8 text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-2">Clean Code</div>
              <div className="text-white/70 text-sm">Java & Spring Boot expertise</div>
            </div>
            
            <div className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
              <Database className="w-8 h-8 text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-2">Data Mastery</div>
              <div className="text-white/70 text-sm">MySQL & MongoDB optimization</div>
            </div>
            
            <div className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
              <Coffee className="w-8 h-8 text-cyan-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-2">Always Learning</div>
              <div className="text-white/70 text-sm">3+ years of innovation</div>
            </div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-bounce-in">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
              onClick={scrollToAbout}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Explore My Journey</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            onClick={scrollToContact}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Mail className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Let's Connect</span>
            </Button>
          </div>

          {/* Modern Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up">
            {[
              { icon: Github, href: "https://github.com/zeehaancode21", color: "hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-zeeshaan-424741239", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:zeeshaanm10114@gmail.com", color: "hover:text-cyan-400" },
              { icon: MessageCircleDashed, href: "https://wa.me/919379151845", color: "hover:text-cyan-400" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className={`group p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.color}`}
              >
                <social.icon className="w-6 h-6 text-white/70 group-hover:scale-110 transition-all" />
              </a>
            ))}
          </div>

          {/* Modern Scroll Indicator */}
          <div className="animate-bounce-gentle">
            <button
              onClick={scrollToAbout}
              className="group p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ArrowDown className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <div className="mt-4 text-white/50 text-sm font-medium tracking-wider">SCROLL TO EXPLORE</div>
          </div>
        </div>
      </div>

      {/* Modern Tech Stack */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
        <div className="text-center mb-6">
          <div className="text-sm text-white/60 font-medium tracking-wider uppercase">Tech Arsenal</div>
        </div>
        <div className="flex space-x-4">
          {[
            { name: "Java", color: "from-orange-500 to-red-600", letter: "J" },
            { name: "Spring", color: "from-green-500 to-emerald-600", letter: "S" },
            { name: "MySQL", color: "from-blue-500 to-blue-600", letter: "M" },
            { name: "MongoDB", color: "from-green-400 to-green-500", letter: "M" },
            { name: "React", color: "from-cyan-400 to-blue-500", letter: "R" },
            { name: "Docker", color: "from-blue-600 to-indigo-600", letter: "D" }
          ].map((tech, index) => (
            <div key={index} className="group text-center">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-xl border border-white/10 group-hover:shadow-2xl`}>
                <span className="text-xl font-bold text-white group-hover:scale-110 transition-transform">
                  {tech.letter}
                </span>
              </div>
              <div className="text-xs text-white/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;