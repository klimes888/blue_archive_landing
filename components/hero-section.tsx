"use client";
import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ParticleBackground from "./particle-background";

// assets
import Back from "@/assets/back_logo.png";
import MoveCharacter from "./move-character";
import { useRef } from "react";

const ChevronIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

interface HeroSectionProps {
  onStartMission: () => void;
}

export default function HeroSection({ onStartMission }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [layoutInfo, setLayoutInfo] = useState<Record<string, number> | null>(
    null
  );

  const handleAnime = (e: MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    // get layout size
    const { width, height, left, top } = element.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = (x / width - 0.5) * 35;
    const rotateX = (y / height - 0.5) * -35;

    setLayoutInfo({ rotateY, rotateX });
  };

  const handleAnimeLeave = () => {
    setLayoutInfo({ rotateY: 0, rotateX: 0 });
  };

  return (
    <HeroContainer
      id="hero-section"
      onMouseMove={handleAnime}
      onMouseLeave={handleAnimeLeave}
    >
      <ParticleBackground />
      <BackgroundOverlay />
      <HexGrid className="hex-grid" />

      <Container>
        {/* <GlowText>어서 와, 선생님. 오늘도 잘 부탁해.</GlowText> */}
        <GlowText>Text, Text. TextTextText.</GlowText>

        <SubText>
          subTextsubTextsubText subText subText subTextvsubText subText subText
          subText subText
        </SubText>
        {/* <SubText>
          푸른 하늘 아래, 키보토스의 학원들이 당신을 기다립니다. 미스터리한
          사건들과 특별한 학생들과 함께하는 여정을 시작하세요.
        </SubText> */}

        {/* <PulseButton onClick={onStartMission}>
          Start Mission <ChevronIcon />
        </PulseButton> */}
      </Container>

      <GradientBottom />
      <MoveCharacter layoutInfo={layoutInfo} />
      {/* <ShirokoImage
        src="/placeholder.svg?height=1000&width=800"
        alt="Shiroko"
        width={800}
        height={1000}
        priority
        unoptimized
      /> */}
      {/* <BackLogo
        src={Back}
        alt="bluearchive_logo"
        width={1200}
        height={600}
        priority
        unoptimized
      /> */}
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GlowText = styled.div`
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  text-shadow: 0 0 10px rgba(0, 149, 255, 0.7), 0 0 20px rgba(0, 149, 255, 0.5);
  background: linear-gradient(45deg, #fff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

const SubText = styled.p`
  margin-bottom: 2rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #bfdbfe;
  max-width: 32rem;
  line-height: 1.6;
`;

const PulseButton = styled.button`
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  color: white;
  padding: 0.85rem 2rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #2563eb, #0891b2);
    transform: translateY(-2px);
  }

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

const ShirokoImage = styled(Image)`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 90vh;
  width: auto;
  object-fit: contain;
`;

/** Background */
const BackLogo = styled(Image)`
  position: absolute;
  left: 50%;
  z-index: 0;
  bottom: 5%;
  transform: translateX(-50%);
  height: auto;
  width: 70%;
  object-fit: contain;
`;
