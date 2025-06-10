"use client"

import { useState } from "react"
import Image from "next/image"
import styled, { css, keyframes } from "styled-components"

const cardHover = keyframes`
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-5px) scale(1.02); }
`

const CardContainer = styled.div<{ $isHovered: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: rgba(30, 58, 138, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  height: 25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.$isHovered &&
    css`
    border-color: rgba(59, 130, 246, 0.7);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    animation: ${cardHover} 0.3s ease forwards;
  `}
`

const GradientOverlay = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 58, 138, 0.8) 0%, transparent 50%, transparent 100%);
  z-index: 10;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isHovered ? 1 : 0.7)};
`

const RoleTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 20;
`

const RoleBadge = styled.div`
  display: inline-block;
  background: rgba(59, 130, 246, 0.8);
  backdrop-filter: blur(4px);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`

const CharacterImage = styled(Image)<{ $isHovered: boolean }>`
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.$isHovered ? "scale(1.05)" : "scale(1)")};
`

const ContentArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 20;
`

const CharacterName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(59, 130, 246, 0.5);
`

const CharacterQuote = styled.p`
  color: #bfdbfe;
  font-style: italic;
`

const BorderGlow = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  z-index: 30;
  pointer-events: none;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isHovered &&
    css`
    border-color: rgba(59, 130, 246, 0.7);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  `}
`

interface Character {
  name: string
  image: string
  quote: string
  role: string
}

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <CardContainer
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GradientOverlay $isHovered={isHovered} />

      <RoleTag>
        <RoleBadge>{character.role}</RoleBadge>
      </RoleTag>

      <CharacterImage src={character.image || "/placeholder.svg"} alt={character.name} fill $isHovered={isHovered} />

      <ContentArea>
        <CharacterName>{character.name}</CharacterName>
        <CharacterQuote>"{character.quote}"</CharacterQuote>
      </ContentArea>

      <BorderGlow $isHovered={isHovered} />
    </CardContainer>
  )
}
