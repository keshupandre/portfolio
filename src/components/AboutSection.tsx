import { Code2, Database, Server, Zap } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Server,
      title: "Scalable Systems",
      description: "Building distributed architectures handling millions of requests with 99.9% uptime",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Reduced P99 latency by 93% through MongoDB optimization and Redis caching",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Expert in aggregation pipelines, indexing strategies, and efficient data flows",
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Strong ownership, comprehensive testing, and reliable production deployments",
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
                currently working at Physics Wallah (PW Skills LMS), where I build scalable distributed systems 
                that power educational technology for millions of students.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a B.Tech from <span className="text-primary">IIT BHU</span> (CGPA: 9.06), I specialize in 
                high-performance Node.js microservices, low-latency API design, and event-driven architectures. 
                My work involves MongoDB aggregation optimization, Redis caching with pipelines, and 
                infrastructure debugging at scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm recognized with the <span className="text-primary">Best Employee Award (Oct 2024)</span> for 
                exceptional ownership in backend reliability. I'm also a certified MongoDB Associate Developer 
                and have solved 450+ DSA problems on Coding Ninjas.
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
                  className="glass-card p-6 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
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
