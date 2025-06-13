"use client";
import type React from "react";
import { useRef } from "react";
import NavBar from "@/components/nav-bar";
import HeroSection from "@/components/hero-section";
import CharacterSection from "@/components/character-section";
import Footer from "@/components/footer";
import GlobalStyles from "@/components/global-styles";
import TrailerVideo from "@/components/TrailerVideo";
import Goods from "@/components/Goods";
import Gallery from "@/components/Gallery";

export default function LandingPage() {
  const charactersRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <HeroSection />
      <CharacterSection ref={charactersRef} />
      <Gallery />
      <Goods />
      <TrailerVideo />
      <Footer />
    </>
  );
}
