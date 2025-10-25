"use client";

import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import DarkModeToggle from "@/components/DarkModeToggle";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { HeroHighlightComponent } from "@/components/HeroHighlightComponent";
import ProjectsSection from "@/components/ProjectsSection";

import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  const date = new Date();
  return (
    <div>
      <HeroHighlightComponent />
      <SkillsSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <footer className="text-center py-6 text-sm text-neutral-600 dark:text-neutral-400 dark:bg-black bg-white">
        © {date.getFullYear()} Benmansour Mohamed Yacine. All rights reserved.
      </footer>
      <FloatingDockDemo />
    </div>
  );
}
