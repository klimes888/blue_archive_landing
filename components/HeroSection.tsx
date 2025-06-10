"use client"
import styled, { keyframes } from "styled-components"
import Image from "next/image"

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 149, 255, 0.5); }
  50% { box-shadow: 0 0 30px rgba(0, 149, 255, 0.8); }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a2e 50%, #000 100%);
  position: relative;
  overflow: hidden;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 149, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
    text-align: center;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  z-index: 3;

  @media (max-width: 768px) {
    order: 2;
  }
`

const MainHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 149, 255, 0.3);
  line-height: 1.2;
`

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto 2rem;
  }
`

const StartButton = styled.button`
  background: linear-gradient(45deg, #0095ff, #00d4ff);
  border: 2px solid transparent;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${glow} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    animation: ${pulse} 0.6s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 400px;
    order: 1;
  }
`

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 200px;
    height: 200px;
    border: 2px solid rgba(0, 149, 255, 0.3);
    border-radius: 50%;
    animation: ${float} 4s ease-in-out infinite reverse;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 10%;
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, rgba(0, 149, 255, 0.2), rgba(0, 212, 255, 0.2));
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: ${float} 3s ease-in-out infinite;
  }
`

export default function HeroSection() {
  return (
    <HeroContainer id="home">
      <BackgroundElements />
      <ContentWrapper>
        <TextContent>
          <MainHeading>
            어서 와, 선생님.
            <br />
            오늘도 잘 부탁해.
          </MainHeading>
          <SubHeading>
            키보토스의 학원들이 당신을 기다립니다. 미스터리한 사건들과 특별한 학생들과 함께하는 여정을 시작하세요.
          </SubHeading>
          <StartButton>Start Mission</StartButton>
        </TextContent>
        <ImageContainer>
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Shiroko from Blue Archive"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </ImageContainer>
      </ContentWrapper>
    </HeroContainer>
  )
}
