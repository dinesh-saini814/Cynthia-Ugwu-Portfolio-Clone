"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import CursorAnimation from "@/components/CursorAnimation/CursorAnimation";
import FooterSection from "@/components/FooterSection/FooterSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import WorkSection from "@/components/WorkSection/WorkSection";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  // @typescript-eslint/no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <main
        id="data-scroll-container"
        data-scroll-container
        className="bg-background text-white no-scrollbar cursor-default"
      >
        <CursorAnimation />
        <LandingPage />
        <WorkSection />
        <AboutSection />
        <FooterSection />
      </main>
    </ReactLenis>
  );
}
