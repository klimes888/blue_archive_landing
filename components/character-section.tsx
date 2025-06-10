"use client"

import { forwardRef } from "react"
import styled from "styled-components"
import CharacterCard from "./character-card"

const SectionContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(to bottom, #000 0%, rgba(30, 58, 138, 0.3) 50%, #000 100%);
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
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

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`

const characters = [
  {
    name: "시로코",
    image: "/placeholder.svg?height=400&width=280",
    quote: "어서 와, 선생님. 오늘도 잘 부탁해.",
    role: "대책위원회",
  },
  {
    name: "호시노",
    image: "/placeholder.svg?height=400&width=280",
    quote: "대책위원회의 회장이에요. 잘 부탁드립니다.",
    role: "대책위원회",
  },
  {
    name: "세리카",
    image: "/placeholder.svg?height=400&width=280",
    quote: "돈이 필요해요. 선생님, 도와주세요.",
    role: "대책위원회",
  },
  {
    name: "노노미",
    image: "/placeholder.svg?height=400&width=280",
    quote: "모두를 위해 힘내겠습니다!",
    role: "대책위원회",
  },
]

const CharacterSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer ref={ref}>
      <Container>
        <SectionTitle>
          <span style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>아비도스 학생들</span>
        </SectionTitle>

        <CharacterGrid>
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </CharacterGrid>
      </Container>
    </SectionContainer>
  )
})

CharacterSection.displayName = "CharacterSection"

export default CharacterSection
