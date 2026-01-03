import { Code2, Database, Server, Zap } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Server,
      title: "System Stability",
      description: "Delivered high reliability and minimal downtime, handling complex runtime issues like pod restarts and memory leaks.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Deep expertise in MongoDB query optimization, indexing, and reducing system latency for high-traffic APIs.",
    },
    {
      icon: Database,
      title: "Infrastructure Support",
      description: "Managed AWS resources, stage-to-prod migrations, and cross-pod infra support for consistent service uptime.",
    },
    {
      icon: Code2,
      title: "Technical Ownership",
      description: "Led feature parities (GoLang migration), incident investigations, and system design improvements for maintainability.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4">// ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Turning Complex Problems into
              <br />
              <span className="text-gradient">Elegant Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-foreground font-medium">Keshu Pandre</span>, a Backend Software Engineer 
                at Physics Wallah, known for delivering consistent, high-quality outcomes across backend, infrastructure, 
                and system domains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="font-medium text-foreground">Node.js, TypeScript, and MongoDB</span>, with growing expertise in <span className="font-medium text-foreground">GoLang</span> and <span className="font-medium text-foreground">AWS</span>. 
                My work centers on building scalable microservices, optimizing heavy database queries, and ensuring 
                system stability through proactive monitoring (Elastic APM, Winston). I have successfully led initiatives 
                like the <span className="font-boldmedium text-foreground">YCMOU Go repo migration</span> and <span className="font-medium text-foreground">course-batch migration</span>, handling critical stage-to-prod 
                deployments and ensuring data consistency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I actively contribute to peer reviews, mentor teammates during complex debugging sessions, 
                and foster a culture of shared ownership. I'm recognized with the <span className="text-primary">Best Employee Award (Oct 2024)</span> for exceptional ownership in backend reliability. 
                I also proficiently resolve cross-pod infrastructure issues and maintain disciplined delivery processes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">9.06</p>
                  <p className="text-sm text-muted-foreground">CGPA @ IIT BHU</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">93%</p>
                  <p className="text-sm text-muted-foreground">Latency Reduced</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary font-mono">450+</p>
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                </div>
              </div>
            </div>

            {/* Right: Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 hover-lift animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
