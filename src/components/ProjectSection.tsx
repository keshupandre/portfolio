import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "YCMOU Institutional SaaS Layer",
    description: "Engineered a SaaS abstraction layer to enable standalone institutional deployments, integrating LMS, Teacher, and Community portals with core Auth and Media services. Handled stage-to-prod migration and Go repo migration.",
    techStack: ["Node.js", "GoLang", "Microservices", "AWS", "System Design"],
    problem: "Enabled scalable institutional deployments with feature parity",
    github: "#", // Proprietary
    featured: true,
  },
  {
    title: "Course-Batch Migration & Optimization",
    description: "Provided backend optimizations for smoother course–batch migration, upgrading Mongoose versions across platforms (Job Portal, Experience Portal, Hall of Fame), and ensuring data consistency.",
    techStack: ["Node.js", "Mongoose", "Scripting", "Data Migration"],
    problem: "Ensured scalability and system flow during massive data migrations",
    github: "#", // Proprietary
    featured: true,
  },
  {
    title: "Test & Quiz Enhancement PRD",
    description: "Revamped the Test/Quiz evaluation engine by transitioning from legacy cron jobs to an event-driven architecture using Redis Bull queues, ensuring precise timer handling and 100% data integrity.",
    techStack: ["Node.js", "Redis Bull", "Event-Driven", "Microservices"],
    problem: "Ensured precise timer handling and 100% data integrity for thousands of concurrent users",
    github: "#", // Proprietary
    featured: true,
  },
  {
    title: "Course Access Revocation PRD",
    description: "Implemented robust backend logic for course access revocation, ensuring secure and consistent access control across the LMS platform based on various business rules.",
    techStack: ["Node.js", "Auth", "Access Control", "System Design"],
    problem: "Ensured secure and consistent course access control and revocation",
    github: "#", // Proprietary
    featured: true,
  },
  {
    title: "IOI Admin Portal & Search Optimization",
    description: "Added comprehensive search functionality to the IOI Admin portal, optimized MongoDB search queries, and implemented a robust logging system using Winston and Elastic APM for better monitoring.",
    techStack: ["Node.js", "MongoDB", "Elastic APM", "Winston", "Optimization"],
    problem: "Improved API latency and system observability",
    github: "#", // Proprietary
    featured: true,
  },
];

const otherProjects = [
  {
    title: "YouTube Clone",
    description: "Architected a video streaming platform featuring real-time data rendering, utilizing RapidAPI to fetch and display live video feeds with minimal latency.",
    techStack: ["React", "Sass", "RapidAPI", "Firebase", "Google OAuth"],
    problem: "Implemented secure identity management and real-time video streaming",
    github: "https://github.com/keshupandre",
    demo: "#",
    featured: false,
  },
  {
    title: "RFID-Based Attendance System",
    description: "Integrated Arduino hardware with Firebase Realtime Database to capture and sync attendance logs instantly, eliminating manual record-keeping errors.",
    techStack: ["JavaScript", "Firebase", "Arduino", "Bootstrap", "OAuth"],
    problem: "Built secure role-based dashboard for administrators with real-time sync",
    github: "https://github.com/keshupandre",
    featured: false,
  },
  {
    title: "Bank Management System",
    description: "Developed a modular Bank Management System using Java and MySQL, implementing ACID-compliant transaction handling and a responsive Swing GUI.",
    techStack: ["Java", "MySQL", "Swing", "AWT"],
    problem: "Secure account operations with full ACID compliance",
    github: "https://github.com/keshupandre",
    featured: false,
  },
  {
    title: "TextEase - Text Manipulation",
    description: "Dynamic React application using React Router that helps to manipulate text with features for estimating reading time, removing spaces, and transforming cases.",
    techStack: ["React", "React Router", "Bootstrap", "CSS"],
    problem: "Streamlined text manipulation with intuitive UI",
    github: "https://github.com/keshupandre",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4">// PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated selection of professional contributions and personal explorations, demonstrating expertise across various domains.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Professional Highlights</h3>
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.title} 
                className="glass-card p-8 hover-lift group animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Folder className="text-primary" size={24} />
                  </div>
                  {/* No GitHub/Demo links for professional/proprietary work usually, but keeping structure if needed */}
                  <div className="flex gap-3">
                    {/* Placeholder for proprietary work - usually private */}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-primary mb-4">
                  ⚡ {project.problem}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-8 text-center">Personal Projects</h3>
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={project.title} 
                className="glass-card p-6 hover-lift group animate-fade-up opacity-0"
                style={{ animationDelay: `${(featuredProjects.length + index) * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/keshupandre" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
