import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Heart } from "lucide-react";

const About = () => {
  const interests = [
    "Technology Trends",
    "Creative Problem Solving", 
    "Structural Analysis",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="accent-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between civil engineering precision and software development innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8 animate-slideInLeft">
              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <User className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">Professional Background</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Mohammed Zeeshan, a Java Backend Developer with expertise in designing, 
                    developing, and maintaining scalable web applications using Java and Spring Boot. 
                    With a foundation in civil engineering and a passion for structural analysis, 
                    I bring unique problem-solving skills to the world of software development. 
                    I thrive in collaborative environments, keep up with evolving technology, 
                    and aim to create solutions that have real-world impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">Professional Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To contribute to innovative products and services that positively impact users, 
                    while continuously expanding my technical skills and creativity. I believe in 
                    the power of well-architected backend systems to drive meaningful change.
                  </p>
                </CardContent>
              </Card>
            </div>

           {/* Right Column - Stats & Interests */}
           <div className="space-y-8 animate-slideInRight">
  {/* Stats */}
  <div className="grid grid-cols-2 gap-6">
    <Card className="p-6 text-center tech-gradient shadow-glow transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-white mb-2">3+</div>
        <div className="text-white/80">Years Experience</div>
      </CardContent>
    </Card>

    <Card className="p-6 text-center bg-gradient-to-br from-tech-accent to-tech-blue shadow-glow transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-white mb-2">Languages</div>
        <div className="text-white/80">Java, JavaScript, CSS, HTML</div>
      </CardContent>
    </Card>

    <Card className="p-6 text-center bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-white mb-2">Databases</div>
        <div className="text-white/80">MySQL, MongoDB</div>
      </CardContent>
    </Card>

    <Card className="p-6 text-center bg-gradient-to-br from-orange-500 to-red-500 shadow-glow transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-white mb-2">Flexible Support</div>
        <div className="text-white/80">On-Time Delivery & Quality Code</div>
      </CardContent>
    </Card>
  </div>

  {/* Interests */}
  <Card className="p-6 shadow-medium hover:shadow-large transform transition-transform duration-300 hover:scale-105">
    <CardContent className="p-0">
      <div className="flex items-center mb-4">
        <Heart className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-2xl font-semibold">Interests & Passions</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
          >
            {interest}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>

  {/* Quote */}
  <Card className="p-6 bg-muted shadow-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <CardContent className="p-0">
      <blockquote className="text-lg italic text-muted-foreground">
        "The best way to predict the future is to push it to production. I build systems that handle today’s bugs and scale gracefully for tomorrow’s chaos."
      </blockquote>
      <cite className="block mt-4 text-sm font-semibold text-primary">
        - Mohammed Zeeshan
      </cite>
    </CardContent>
  </Card>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;