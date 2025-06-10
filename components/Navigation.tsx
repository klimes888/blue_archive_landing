"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"

const NavContainer = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${(props) => (props.$isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent")};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(10px)" : "none")};
  border-bottom: ${(props) => (props.$isScrolled ? "1px solid rgba(0, 149, 255, 0.3)" : "none")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0095ff;
  text-shadow: 0 0 10px rgba(0, 149, 255, 0.5);
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0095ff, #00d4ff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const StartButton = styled.button`
  background: linear-gradient(45deg, #0095ff, #00d4ff);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 149, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 149, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavContainer $isScrolled={isScrolled}>
      <NavContent>
        <Logo>BLUE ARCHIVE</Logo>
        <NavLinks>
          <NavLink href="#home">홈</NavLink>
          <NavLink href="#characters">캐릭터</NavLink>
          <NavLink href="#gallery">갤러리</NavLink>
          <NavLink href="#news">뉴스</NavLink>
          <StartButton>게임 시작</StartButton>
        </NavLinks>
      </NavContent>
    </NavContainer>
  )
}
