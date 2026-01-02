import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "keshupandre@gmail.com",
      href: "mailto:keshupandre@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6267220093",
      href: "tel:+916267220093",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/keshupandre",
      href: "https://github.com/keshupandre",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/keshupandre",
      href: "https://linkedin.com/in/keshupandre",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Balaghat, Madhya Pradesh, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4">// GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and system design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              {contactLinks.map((contact) => (
                <div key={contact.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick CTA */}
              <div className="pt-6">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="mailto:keshupandre@gmail.com">
                    <Mail size={18} />
                    Send an Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground 
                      placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground 
                      placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground 
                      placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
