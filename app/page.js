"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import CursorAnimation from "@/components/CursorAnimation/CursorAnimation";
import FooterSection from "@/components/FooterSection/FooterSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import WorkSection from "@/components/WorkSection/WorkSection";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let locoScroll;
    if (typeof window !== "undefined") {
      locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      return () => {
        // Clean up to avoid memory leaks
        if (locoScroll) locoScroll.destroy();
      };
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount
  // const locoScroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  // });

  return (
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
  );
}
