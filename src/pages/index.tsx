import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navbar />
      <main>
				<HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default Index;
