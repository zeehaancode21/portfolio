import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircleDashed  } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "zeeshaanm10114@gmail.com",
      link: "mailto:zeeshaanm10114@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9379151845",
      link: "tel:+919379151845",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kalyangiri, Mysore, India",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircleDashed, 
      title: "WhatsApp",
      handle: "+91 9379151845",
      link: "https://wa.me/919379151845",
      color: "hover:text-gray-900"
    },
    {
      icon: Github,
      title: "GitHub",
      handle: "zeehaancode21",
      link:"https://github.com/zeehaancode21",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      handle: "mohammed-zeeshaan-424741239",
      link: "https://www.linkedin.com/in/mohammed-zeeshaan-424741239",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      handle: "zeeshaanm10114@gmail.com",
      link: "mailto:zeeshaanm10114@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="accent-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Send className="w-8 h-8 text-primary mr-3" />
                    Send Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you soon.
                  </p>
                </CardHeader>
                <CardContent>
  <form 
    action="https://formspree.io/f/mgvyjbgd" 
    method="POST" 
    className="space-y-6"
  >
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="subject">Subject</Label>
      <Input
        id="subject"
        name="subject"
        placeholder="Project inquiry, consultation, etc."
        required
      />
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Tell me about your project, requirements, timeline, etc."
        rows={6}
        required
      />
    </div>
    
    <Button 
      type="submit" 
      size="lg" 
      className="w-full tech-gradient shadow-glow hover:scale-105 transition-bounce"
    >
      <Send className="w-5 h-5 mr-2" />
      Send Message
    </Button>
  </form>
</CardContent>

              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slideInRight">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-large transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mr-4`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Connect on Social</CardTitle>
                  <p className="text-muted-foreground">
                    Follow me on social media for updates and tech insights
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className={`flex items-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-smooth ${social.color} group`}
                      >
                        <social.icon className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold">{social.title}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="tech-gradient shadow-glow ">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
                  <p className="text-white/80 mb-4">
                    I typically respond to messages within 24 hours, often much sooner!
                  </p>
                  <div className="flex justify-center space-x-8 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">&lt; 24h</div>
                      <div className="text-sm opacity-80">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Response Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fadeInUp">
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Whether you need a robust backend system, database optimization, or structural analysis consultation, 
                  I'm here to help turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="hover:scale-105 transition-bounce"
                    onClick={() => document.getElementById('name')?.focus()}
                  >
                    Start a Project
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-purple-500 transition-bounce hover:scale-105"
                    onClick={() => window.open('mailto:zeeshaanm10114@gmail.com')}
                  >
                    Quick Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;