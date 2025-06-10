"use client"
import styled, { keyframes } from "styled-components"

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 149, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(0, 149, 255, 0.5); }
`

const buttonPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #000 0%, #0a0a23 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 50% 50%, rgba(0, 149, 255, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #0095ff, #00d4ff);
    border-radius: 2px;
  }
`

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 3rem;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid rgba(0, 149, 255, 0.5);
  animation: ${glow} 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #0095ff, #00d4ff, #0095ff);
    border-radius: 20px;
    z-index: -1;
    animation: ${glow} 2s ease-in-out infinite;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
`

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const ActionButton = styled.button`
  background: linear-gradient(45deg, #0095ff, #00d4ff);
  border: 2px solid transparent;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 180px;

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
    box-shadow: 0 10px 25px rgba(0, 149, 255, 0.3);
    animation: ${buttonPulse} 0.6s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`

const SocialButton = styled.button`
  background: rgba(26, 26, 46, 0.8);
  border: 2px solid rgba(0, 149, 255, 0.5);
  padding: 1rem;
  border-radius: 50%;
  color: #00d4ff;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #00d4ff;
    background: rgba(0, 149, 255, 0.1);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 149, 255, 0.2);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

export default function VideoSection() {
  return (
    <SectionContainer id="video">
      <ContentWrapper>
        <SectionTitle>게임 트레일러</SectionTitle>

        <VideoContainer>
          <VideoWrapper>
            <VideoIframe
              src="https://www.youtube.com/embed/1gJGIYJYfCY"
              title="Blue Archive Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        </VideoContainer>

        <ButtonContainer>
          <ActionButton>공식 사이트 방문</ActionButton>
          <ActionButton>앱 다운로드</ActionButton>
        </ButtonContainer>

        <SocialContainer>
          <SocialButton title="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </SocialButton>
          <SocialButton title="X (Twitter)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialButton>
        </SocialContainer>
      </ContentWrapper>
    </SectionContainer>
  )
}
