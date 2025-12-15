"use client";

import { useState, useEffect } from "react";
import { LanguageContext } from "@/contexts/language-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { LanguagesSection } from "@/components/sections/languages-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { ContactSection } from "@/components/sections/contact-section";

type PortfolioPageProps = {
  profileSummary: string;
};

export default function PortfolioPage({ profileSummary }: PortfolioPageProps) {
  const [language, setLanguage] = useState<"en" | "fr" | "es">("en");

  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection profileSummary={profileSummary} />
          <ExperienceSection />
          <EducationSection />
          <LanguagesSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
