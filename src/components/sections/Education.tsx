import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.E. Civil Engineering",
      institution: "Maharaja Institute of Technology",
      location: "Mysore, India",
      year: "2021",
      percentage: "60.06%",
      description: "Specialized in structural engineering and gained strong analytical and problem-solving skills that translate well to software architecture.",
      highlights: [
        "Strong foundation in mathematical modeling",
        "Project management and team collaboration",
        "Analytical thinking and problem-solving",
        "Understanding of structural systems and optimization"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      degree: "Pre-University Course (PU)",
      institution: "Sampoorna Techno PU College",
      location: "Channapatna, India",
      year: "2015",
      percentage: "73.13%",
      description: "Focused on science and mathematics, building the foundation for engineering studies.",
      highlights: [
        "Strong mathematics and physics background",
        "Developed logical thinking skills",
        "Excellence in analytical subjects"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Balu Public School",
      location: "Karnataka, India",
      year: "2013",
      percentage: "83.68%",
      description: "Achieved excellent academic performance with a strong foundation in core subjects.",
      highlights: [
        "Consistent academic excellence",
        "Strong foundation in core subjects",
        "Leadership and extracurricular activities"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const getGradeColor = (percentage: string) => {
    const score = parseFloat(percentage);
    if (score >= 80) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 60) return "text-orange-600";
    return "text-gray-600";
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Educational <span className="accent-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building strong foundations through continuous learning and academic excellence
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="shadow-medium hover:shadow-large transition-smooth animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 flex items-center">
                        <GraduationCap className="w-8 h-8 text-primary mr-3" />
                        {edu.degree}
                      </CardTitle>
                      
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-semibold text-primary">{edu.institution}</span>
                          <span className="mx-2">•</span>
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <div className="text-center">
                        <div className={`text-3xl font-bold ${getGradeColor(edu.percentage)}`}>
                          {edu.percentage}
                        </div>
                        <div className="text-sm text-muted-foreground">Score</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-glow`}>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{edu.year}</div>
                          <div className="text-sm opacity-80">Graduated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Learning */}
          <div className="mt-16 animate-fadeInUp">
            <Card className="p-8 tech-gradient shadow-glow">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Continuous Learning</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Beyond formal education, I believe in continuous learning through online courses, 
                  certifications, and hands-on projects to stay current with technology trends.
                </p>
                {/* <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Online Courses
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Technical Certifications
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Self-Directed Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Industry Research
                  </Badge>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;