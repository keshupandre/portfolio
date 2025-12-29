import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navbar />
      <main>
				<HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
