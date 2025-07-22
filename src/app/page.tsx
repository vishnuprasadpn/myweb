import HeroSection from "@/components/HeroSection";
import SkillsCloudSection from "@/components/SkillsCloudSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <HeroSection />
      <SkillsCloudSection />
      <ExperienceTimeline />
      <ExpertiseSection />
      <ProjectsSection />
    </main>
  );
}
