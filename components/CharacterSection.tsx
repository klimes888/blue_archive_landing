"use client"
import styled, { keyframes } from "styled-components"
import Image from "next/image"

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`

const cardHover = keyframes`
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-10px) scale(1.02); }
`

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #000 0%, #0a0a23 50%, #000 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 40%, rgba(0, 149, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
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

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const CharacterCard = styled.div`
  background: linear-gradient(145deg, rgba(26, 26, 46, 0.8), rgba(10, 10, 35, 0.9));
  border: 2px solid rgba(0, 149, 255, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 149, 255, 0.1), transparent);
    animation: ${shimmer} 3s infinite;
  }

  &:hover {
    border-color: rgba(0, 212, 255, 0.6);
    box-shadow: 0 10px 30px rgba(0, 149, 255, 0.2);
    animation: ${cardHover} 0.3s ease forwards;
  }

  &:hover::before {
    animation-duration: 1s;
  }
`

const CharacterImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(0, 149, 255, 0.1), rgba(0, 212, 255, 0.1));
`

const CharacterInfo = styled.div`
  text-align: center;
`

const CharacterName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #00d4ff;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
`

const CharacterRole = styled.div`
  display: inline-block;
  background: linear-gradient(45deg, #0095ff, #00d4ff);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const CharacterQuote = styled.p`
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  font-size: 0.9rem;
`

const characters = [
  {
    name: "시로코",
    role: "대책위원회",
    quote: "어서 와, 선생님. 오늘도 잘 부탁해.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    name: "호시노",
    role: "대책위원회",
    quote: "대책위원회의 회장이에요. 잘 부탁드립니다.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    name: "세리카",
    role: "대책위원회",
    quote: "돈이 필요해요. 선생님, 도와주세요.",
    image: "/placeholder.svg?height=200&width=280",
  },
  {
    name: "노노미",
    role: "대책위원회",
    quote: "모두를 위해 힘내겠습니다!",
    image: "/placeholder.svg?height=200&width=280",
  },
]

export default function CharacterSection() {
  return (
    <SectionContainer id="characters">
      <ContentWrapper>
        <SectionTitle>아비도스 학생들</SectionTitle>
        <CharacterGrid>
          {characters.map((character, index) => (
            <CharacterCard key={index}>
              <CharacterImage>
                <Image
                  src={character.image || "/placeholder.svg"}
                  alt={character.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CharacterImage>
              <CharacterInfo>
                <CharacterName>{character.name}</CharacterName>
                <CharacterRole>{character.role}</CharacterRole>
                <CharacterQuote>"{character.quote}"</CharacterQuote>
              </CharacterInfo>
            </CharacterCard>
          ))}
        </CharacterGrid>
      </ContentWrapper>
    </SectionContainer>
  )
}
