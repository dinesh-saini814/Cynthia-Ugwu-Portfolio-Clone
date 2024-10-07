"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import CursorAnimation from "@/components/CursorAnimation/CursorAnimation";
import FooterSection from "@/components/FooterSection/FooterSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import WorkSection from "@/components/WorkSection/WorkSection";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <main className="bg-background text-white no-scrollbar">
      <CursorAnimation />
      <LandingPage />
      <WorkSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
