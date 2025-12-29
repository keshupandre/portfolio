import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Keshu Pandre</span>
            <span className="terminal-cursor" />
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up animation-delay-200 font-mono">
            Backend Software Engineer
          </p>

          {/* Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minima dolore laudantium voluptates asperiores inventore excepturi pariatur veritatis obcaecati ut ipsa ab quaerat laboriosam consectetur maiores, provident eaque totam repellat omnis distinctio error quisquam ea at quia. Eos, cum placeat!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg">
              <Download size={18} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10 animate-fade-up animation-delay-500">
            <a 
              href="https://github.com/keshupandre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/keshupandre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
