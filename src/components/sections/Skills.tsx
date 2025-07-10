import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Award, Users, Brain, Clock } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Core Java", level: 90, category: "Programming" },
    { name: "Spring Boot", level: 85, category: "Framework" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "REST APIs", level: 88, category: "Integration" },
    { name: "HTML/CSS", level: 70, category: "Frontend" },
    { name: "JavaScript", level: 65, category: "Frontend" },
    { name: "Microservices", level: 82, category: "Architecture" }
  ];

  const softSkills = [
    { name: "Creative Thinking", icon: Brain },
    { name: "Teamwork", icon: Users },
    { name: "Problem Solving", icon: Code },
    { name: "Time Management", icon: Clock },
    { name: "Conflict Resolution", icon: Users },
    { name: "Project Management", icon: Database }
  ];

  const certifications = [
    {
      title: "Software Developer Certification",
      issuer: "Jspider",
      year: "2022",
      description: "Certified in comprehensive training for Java development, as well as foundational web technologies including JavaScript, HTML, and CSS.",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AutoCAD & 3D Modeling",
      issuer: "Autodesk",
      year: "2020",
      description: "Advanced CAD design and 3D modeling techniques",
      color: "from-green-500 to-teal-600"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-gradient-to-r from-green-500 to-green-400";
    if (level >= 75) return "bg-gradient-to-r from-blue-500 to-blue-400";
    if (level >= 65) return "bg-gradient-to-r from-yellow-500 to-yellow-400";
    return "bg-gradient-to-r from-gray-500 to-gray-400";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="accent-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise combined with strong soft skills for comprehensive development solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slideInLeft">
              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Code className="w-8 h-8 text-primary mr-3" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {technicalSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold">{skill.name}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {skill.category}
                            </Badge>
                          </div>
                          <span className="text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills */}
            <div className="animate-slideInRight">
              <Card className="shadow-medium hover:shadow-large transition-smooth mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="w-8 h-8 text-primary mr-3" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-4 rounded-lg bg-muted hover:bg-primary/10 transition-smooth group cursor-default"
                      >
                        <skill.icon className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack Overview */}
              <Card className="tech-gradient shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Primary Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-orange-300">J</span>
                      </div>
                      <div className="text-white font-medium">Java</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-green-300">S</span>
                      </div>
                      <div className="text-white font-medium">Spring Boot</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-300">M</span>
                      </div>
                      <div className="text-white font-medium">MySQL</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-green-400">M</span>
                      </div>
                      <div className="text-white font-medium">MongoDB</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fadeInUp">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Professional <span className="accent-gradient">Certifications</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-medium hover:shadow-large transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                        <p className="text-muted-foreground mb-2">{cert.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-semibold text-primary">{cert.issuer}</span>
                          <span className="mx-2">•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-glow`}>
                        <Award className="w-8 h-8" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center animate-fadeInUp">
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-4">Continuous Growth</h3>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  I believe in continuous learning and staying updated with the latest technologies 
                  and industry best practices to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;