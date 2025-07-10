import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Building, BarChart3, Target } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Analysis And Behaviour of Dampers, Shear Walls And Bare Frame on Structural Building",
    category: "Structural Engineering Analysis",
    description: "Comprehensive structural analysis project focusing on seismic performance evaluation and optimization of building systems using advanced modeling techniques.",
    longDescription: "This project involved detailed structural analysis of a SuperSlender structure model using STAAD Pro software. The research evaluated the seismic performance of different structural systems and confirmed the efficiency of shear walls in earthquake resistance. The project contributed valuable design insights for load optimization and structural integrity.",
    technologies: ["STAAD Pro", "Structural Analysis", "Seismic Engineering", "3D Modeling", "AutoCAD"],
    achievements: [
      "Performed comprehensive structural analysis of SuperSlender structure model",
      "Evaluated seismic performance and earthquake resistance capabilities", 
      "Confirmed efficiency of shear walls through detailed analysis",
      "Contributed design insights for load optimization strategies",
      "Developed recommendations for improved structural integrity"
    ],
    metrics: [
      { label: "Analysis Duration", value: "6 Months" },
      { label: "Structure Height", value: "SuperSlender" },
      { label: "Seismic Zones", value: "Multiple" },
      { label: "Load Cases", value: "15+" }
    ],
    skills: [
      "Structural Engineering",
      "Seismic Analysis", 
      "STAAD Pro",
      "Load Calculations",
      "Building Codes",
      "Research & Analysis"
    ]
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="accent-gradient">Project</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing technical expertise through comprehensive structural analysis and research
            </p>
          </div>

          {/* Main Project Card */}
          <div className="animate-fadeInUp">
            <Card className="shadow-large hover:shadow-xl transition-smooth overflow-hidden">
              {/* Project Header */}
              <div className="tech-gradient p-8 text-white">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-3xl font-bold mb-4 leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col space-y-3">
                    <Button variant="secondary" className="hover:scale-105 transition-bounce">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tech-dark transition-bounce hover:scale-105">
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </Button>
                  </div> */}
                </div>
              </div>

              <CardContent className="p-8">
                {/* Project Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Building className="w-6 h-6 text-primary mr-3" />
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="w-6 h-6 text-primary mr-3" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="w-6 h-6 text-primary mr-3" />
                      Skills Demonstrated
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Projects Section
          <div className="mt-16 text-center animate-fadeInUp">
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-4">More Projects Coming Soon</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  I'm currently working on several exciting backend development projects that showcase 
                  modern Java technologies and architectural patterns. Stay tuned for updates!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Microservices Architecture
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Spring Boot Applications
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Database Optimization
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    API Development
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;