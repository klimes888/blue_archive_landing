"use client"

import { forwardRef } from "react"
import styled from "styled-components"

const SectionContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  background: #000;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 149, 255, 0.05) 0%, rgba(0, 0, 0, 0.9) 100%);
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`

const SectionTitle = styled.h2`
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 149, 255, 0.7), 0 0 20px rgba(0, 149, 255, 0.5);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 2px;
    background: #3b82f6;
  }
`

const VideoContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto 3rem;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 2px solid #3b82f6;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const ActionButton = styled.button`
  background: linear-gradient(45deg, #1d4ed8, #0891b2);
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1e40af, #0e7490);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

const SocialButton = styled.button`
  background: transparent;
  border: 2px solid rgba(59, 130, 246, 0.5);
  color: #60a5fa;
  padding: 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #60a5fa;
    background: rgba(30, 58, 138, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ChevronIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const YoutubeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const VideoSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer ref={ref}>
      <BackgroundOverlay />
      <Container>
        <SectionTitle>
          <span style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>게임 트레일러</span>
        </SectionTitle>

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
          <ActionButton>
            공식 사이트 방문 <ExternalLinkIcon />
          </ActionButton>
          <ActionButton>
            앱 다운로드 <ChevronIcon />
          </ActionButton>
        </ButtonContainer>

        <SocialButtonContainer>
          <SocialButton>
            <YoutubeIcon />
          </SocialButton>
          <SocialButton>
            <TwitterIcon />
          </SocialButton>
        </SocialButtonContainer>
      </Container>
    </SectionContainer>
  )
})

VideoSection.displayName = "VideoSection"

export default VideoSection
