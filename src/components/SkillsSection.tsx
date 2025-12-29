const skillCategories = [
  {
    title: "Languages",
    color: "from-primary to-accent",
    skills: ["JavaScript", "TypeScript", "Java", "Go (Golang)", "C++", "Python", "SQL"],
  },
  {
    title: "Backend & System Design",
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "Microservices", "REST APIs", "System Design", "DSA", "OOP", "DBMS"],
  },
  {
    title: "Databases",
    color: "from-orange-500 to-amber-500",
    skills: ["MongoDB", "Aggregation Pipelines", "Indexing", "Redis", "Redis Pipelines", "Query Optimization"],
  },
  {
    title: "DevOps & Cloud",
    color: "from-purple-500 to-pink-500",
    skills: ["Docker", "Jenkins", "ArgoCD", "AWS (Basics)", "CI/CD", "Linux", "Git"],
  },
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: ["React", "HTML", "CSS", "Bootstrap", "Firebase", "Sass"],
  },
  {
    title: "Concepts",
    color: "from-rose-500 to-red-500",
    skills: ["Event-Driven Architecture", "Caching Strategies", "Bull Queues", "Infrastructure Debugging"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4">// TECH STACK</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building robust, scalable backend systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 hover-lift group animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="font-mono font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary/80 text-muted-foreground rounded-lg 
                        border border-border hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
