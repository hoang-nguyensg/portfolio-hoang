import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. SUMMARY */}
      <Hero />
      
      {/* 2. EDUCATION */}
      <Education />
      
      {/* 3. TECHNICAL SKILLS */}
      <Skills />
      
      {/* 4. WORK EXPERIENCE */}
      <ExperiencePreview />
      
      {/* 5. PROJECT */}
      <FeaturedProjects />

      {/* Extra Highlights & Certs can sit below the main flow */}
      <Highlights />
      <Certifications />
      
      <ContactCTA />
    </>
  );
}

