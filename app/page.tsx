"use client";

import CurrentTime from "@/components/current-time";
import Sidebar from "@/components/sidebar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/background-effects"; // ← new;

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundEffects /> {/* ← new */}
      {/* Current Time - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <CurrentTime />
      </div>
      {/* Sidebar Navigation - Right Side */}
      <Sidebar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
