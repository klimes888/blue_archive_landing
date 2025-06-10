"use client"

import styled from "styled-components"

const FooterContainer = styled.footer`
  padding: 1.5rem 0;
  background: rgba(30, 58, 138, 0.3);
  border-top: 1px solid rgba(147, 197, 253, 0.5);
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
  color: #93c5fd;
  font-size: 0.875rem;
`

const Copyright = styled.p`
  margin-bottom: 0.5rem;
`

const Disclaimer = styled.p``

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Copyright>© 2024 Blue Archive. All rights reserved.</Copyright>
        <Disclaimer>This is a fan-made website and is not affiliated with Nexon or Yostar.</Disclaimer>
      </Container>
    </FooterContainer>
  )
}
