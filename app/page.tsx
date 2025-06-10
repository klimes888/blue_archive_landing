"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import NavBar from "@/components/nav-bar";
import HeroSection from "@/components/hero-section";
import CharacterSection from "@/components/character-section";
import VideoSection from "@/components/video-section";
import Footer from "@/components/footer";
import GlobalStyles from "@/components/global-styles";

export default function LandingPage() {
  const videoRef = useRef<HTMLDivElement>(null);
  const charactersRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById("hero-section");

      if (heroSection) {
        // Parallax effect for hero section
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <HeroSection onStartMission={() => scrollToSection(charactersRef)} />
      {/* <CharacterSection ref={charactersRef} /> */}
      {/* <VideoSection ref={videoRef} /> */}
      <Footer />
    </>
  );
}
