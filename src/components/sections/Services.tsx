import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Database, Building2, Code, Settings, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust and scalable backend systems using Java and Spring Boot",
      features: [
        "RESTful API Development",
        "Microservices Architecture", 
        "Spring Boot Applications",
        "Security Implementation",
        "Performance Optimization",
        "Code Review & Refactoring"
      ],
      technologies: ["Java", "Spring Boot", "MySql","MongoDb", "Microservices Specialist", "Maven"],
      color: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Efficient database design, optimization, and integration services",
      features: [
        "Database Design & Modeling",
        "Query Optimization",
        "Data Migration",
        "Performance Tuning",
        "Backup & Recovery",
        "NoSQL Integration"
      ],
      technologies: ["MySQL", "MongoDB", "JPA/Hibernate"],
      color: "from-green-500 to-teal-600",
      popular: false
    },
    {
      icon: Building2,
      title: "Structural Analysis Support",
      description: "Professional structural engineering analysis and design consultation",
      features: [
        "STAAD Pro Analysis",
        "Structural Design Review",
        "Seismic Analysis",
        "Load Calculations",
        "AutoCAD Drafting",
        "3D Modeling Support"
      ],
      technologies: ["STAAD Pro", "AutoCAD", "Revit", "3DS Max"],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Code Review & Consultation",
      description: "Expert code review and architectural consultation for Java applications"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of third-party services and legacy systems"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Application performance tuning and scalability improvements"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="accent-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development and consulting services tailored to your specific needs
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`shadow-medium hover:shadow-large transition-smooth animate-fadeInUp relative ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="tech-gradient text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-glow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* <Button 
                      className={`w-full mt-6 bg-gradient-to-r ${service.color} hover:opacity-90 transition-smooth`}
                    >
                      Get Started
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-bold text-center mb-8">
              Additional <span className="accent-gradient">Services</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-6 shadow-medium hover:shadow-large transition-smooth hover:scale-105"
                >
                  <CardContent className="p-0 text-center">
                    <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div className="mt-16 animate-fadeInUp">
            <Card className="tech-gradient shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Development Process</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <h4 className="text-white font-semibold mb-2">Requirements Analysis</h4>
                    <p className="text-white/80 text-sm">Understanding your specific needs and project goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <h4 className="text-white font-semibold mb-2">Architecture Design</h4>
                    <p className="text-white/80 text-sm">Creating scalable and maintainable system architecture</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <h4 className="text-white font-semibold mb-2">Development & Testing</h4>
                    <p className="text-white/80 text-sm">Agile development with comprehensive testing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                    <h4 className="text-white font-semibold mb-2">Deployment & Support</h4>
                    <p className="text-white/80 text-sm">Seamless deployment with ongoing maintenance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fadeInUp">
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Let's discuss how I can help bring your ideas to life with robust backend solutions 
                  and professional consulting services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:zeeshaanm10114@gmail.com">
  <Button
    size="lg"
    variant="secondary"
    className="hover:scale-105 transition-bounce"
  >
    Schedule Consultation
  </Button>
</a>
                  {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-500 transition-bounce hover:scale-105">
                    View Portfolio
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;