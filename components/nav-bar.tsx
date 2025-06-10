"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

import LogoImg from "@/assets/logo2.webp";

const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isScrolled
      ? css`
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          padding: 0.5rem 0;
        `
      : css`
          background: transparent;
          padding: 1rem 0;
        `}
`;

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled(Image)`
  height: 2.5rem;
  width: auto;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

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
`;

const StartButton = styled.button`
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #2563eb, #0891b2);
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: white;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(59, 130, 246, 0.3);

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }
`;

const MobileNavContent = styled.nav`
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
  }
`;

const MobileStartButton = styled.button`
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #2563eb, #0891b2);
  }
`;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Container>
        <Logo>
          <LogoImage src={LogoImg} alt="Blue Archive" width={50} height={50} />
        </Logo>

        <DesktopNav>
          <NavLink href="#section1">홈</NavLink>
          <NavLink href="#section2">학원</NavLink>
          <NavLink href="#section3">갤러리</NavLink>
          <NavLink href="#section4">컬렉션</NavLink>
          <NavLink href="#section5">하이라이트</NavLink>
          {/* <StartButton>게임 시작</StartButton> */}
        </DesktopNav>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </MobileMenuButton>
      </Container>

      <MobileNav $isOpen={isMobileMenuOpen}>
        <MobileNavContent>
          <MobileNavLink
            href="#section1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            홈
          </MobileNavLink>
          <MobileNavLink
            href="#section2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            학원
          </MobileNavLink>
          <MobileNavLink
            href="#section3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            갤러리
          </MobileNavLink>
          <MobileNavLink
            href="#section4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            컬렉션
          </MobileNavLink>
          <MobileNavLink
            href="#section5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            하이라이트
          </MobileNavLink>
        </MobileNavContent>
      </MobileNav>
    </HeaderContainer>
  );
}
