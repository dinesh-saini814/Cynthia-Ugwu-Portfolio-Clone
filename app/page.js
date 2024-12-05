"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import CursorAnimation from "@/components/CursorAnimation/CursorAnimation";
import FooterSection from "@/components/FooterSection/FooterSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import WorkSection from "@/components/WorkSection/WorkSection";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  return (
    <main
      data-scroll-container
      className="bg-background text-white no-scrollbar cursor-default"
    >
      <CursorAnimation />
      <LandingPage />
      <WorkSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
