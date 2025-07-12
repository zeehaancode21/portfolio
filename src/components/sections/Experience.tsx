import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Backend Developer",
      company: "Virtuele",
      period: "July 2022 – June 2025",
      location: "On-Site",
      type: "Full-time",
      description: "Leading backend development initiatives and driving scalable solutions for enterprise applications.",
      responsibilities: [
        "Designed and maintained scalable web applications using Java & Spring Boot",
        "Led core feature implementations to ensure performance and reliability",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Managed databases with MySQL & MongoDB, focusing on optimization and security",
        "Implemented RESTful APIs serving 10,000+ daily active users",
        "Optimized application performance resulting in 40% faster response times"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Microservices"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Engineering Intern",
      company: "Builders Association of Mysore",
      period: "2018",
      location: "Mysore, India",
      type: "Internship",
      description: "Gained hands-on experience in civil engineering projects and structural analysis.",
      responsibilities: [
        "Assisted in structural analysis and design projects",
        "Collaborated with senior engineers on building design",
        "Learned project management and client communication",
        "Gained experience with AutoCAD and structural design software"
      ],
      technologies: ["AutoCAD", "Structural Analysis", "Project Management", "Client Relations"],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="accent-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional growth and key contributions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-auto md:right-[-25px] w-4 h-4 rounded-full bg-gradient-primary shadow-glow transform md:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white absolute top-1 left-1"></div>
                </div>

                <Card className="ml-16 md:ml-0 shadow-medium hover:shadow-large transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-bold">{exp.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-semibold text-primary">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="text-center mt-16 animate-fadeInUp">
            <Card className="max-w-md mx-auto p-6 tech-gradient shadow-glow">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Currently Available</h3>
                <p className="text-white/80">
                  Open to new opportunities and exciting challenges in backend development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;