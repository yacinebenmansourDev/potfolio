import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HeroHighlightComponent } from "@/components/HeroHighlightComponent";
import ProjectsSection from "@/components/ProjectsSection";

import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div>
      <HeroHighlightComponent />
      <SkillsSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
