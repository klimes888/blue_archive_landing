"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ParticleBackground from "./particle-background";

// assets
import Back from "@/assets/back_logo.png";

import MoveCharacter from "./move-character";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <HeroContainer id="section1" ref={ref}>
      <ParticleBackground />
      <BackgroundOverlay />
      <HexGrid className="hex-grid" />

      <GradientBottom />
      <MoveCharacter ref={ref} />
      <Container>
        <PulseButton href="#section2">둘러보기</PulseButton>
      </Container>
    </HeroContainer>
  );
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  width: 100%;
  perspective: 30em;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a2e 50%, #000 100%);
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(0, 149, 255, 0.15) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const HexGrid = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.2;
`;

const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 2em;
  left: 0;
  right: 0;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  margin: 0 auto;
  @media (max-width: 430px) {
    display: flex;
  }
`;

const PulseButton = styled.a`
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  color: white;
  padding: 0.5rem 1.85rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;

  &:active {
    transform: translateY(0);
  }
`;

const GradientBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8rem;
  background: linear-gradient(to top, #000, transparent);
`;
