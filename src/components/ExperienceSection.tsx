import { Briefcase, MapPin, Award } from "lucide-react";

const experiences = [
  {
    company: "Physics Wallah | PW Skills (LMS)",
    role: "Software Development Engineer I (Backend)",
    duration: "May 2024 - Present",
    location: "Noida, India",
    achievements: [
      "Accelerated API performance by restructuring complex MongoDB aggregation pipelines and leveraging Redis + Redis Pipelines, reducing User LMS P99 latency by ~93% (3s → 210ms) and Homepage P99 latency by ~70% (1s → 280ms)",
      "Engineered a SaaS abstraction layer over existing microservices to enable standalone institutional deployments (YCMOU), integrating LMS, Teacher, and Community portals with core Auth and Media services",
      "Consolidated distinct 'PW Skills Course' and 'Live Batch' models into a single unified schema, enabling bidirectional capability reuse and eliminating redundant code paths",
      "Revamped the Test/Quiz evaluation engine by transitioning from legacy cron jobs to an event-driven architecture using Redis Bull queues, ensuring precise timer handling and 100% data integrity",
      "Resolved critical P0 production incidents, including OOM crashes and Redis cluster failures, by diagnosing VPC peering gaps and implementing cross-pod stability checks",
      "Enhanced backend reliability by introducing comprehensive Jest-based unit testing and standardizing CI/CD pipelines",
    ],
    highlight: "Best Employee Award (Oct 2024)",
  },
  {
    company: "iHUB DivyaSampark, IIT Roorkee & Diginique TechLabs",
    role: "Software Development Intern — Java Developer",
    duration: "June 2023 - July 2023",
    location: "India",
    achievements: [
      "Developed a modular Bank Management System using Java and MySQL",
      "Implemented ACID-compliant transaction handling and a responsive Swing GUI for secure account operations",
      "Acquired comprehensive training in Java programming under industry experts",
    ],
  },
  {
    company: "IIT (BHU), Varanasi",
    role: "B.Tech in Mechanical Engineering",
    duration: "2020 - 2024",
    location: "Varanasi, India",
    achievements: [
      "Graduated with CGPA: 9.06",
      "Built multiple full-stack projects including YouTube Clone and RFID Attendance System",
      "Active participant in coding competitions - Coding Ninjas Expert (450+ problems)",
      "Secured 5-Star rating in Problem Solving at HackerRank",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-4">// EXPERIENCE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where I've <span className="text-gradient">Worked</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:w-1/2 animate-fade-up opacity-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right text-left" : "md:pl-12 md:ml-auto text-left"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background
                    ${index % 2 === 0 ? "left-0 md:left-auto md:-right-2" : "left-0 md:-left-2"} -translate-x-1.5 md:translate-x-0`}
                />

                {/* Card */}
                <div className="glass-card p-6 ml-8 md:ml-0 hover-lift">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Briefcase size={16} className="text-primary" />
                      <span className="font-mono text-sm text-primary">{exp.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.role}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    {exp.highlight && (
                      <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        <Award size={14} />
                        <span>{exp.highlight}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`text-sm text-muted-foreground flex items-start gap-2 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
