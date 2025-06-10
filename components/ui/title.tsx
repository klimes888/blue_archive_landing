import React, { ReactNode } from "react";
import styled from "styled-components";

const Title = ({ w, text }: { w?: string; text: ReactNode }) => {
  return <SectionTitle $w={w}>{text}</SectionTitle>;
};
const SectionTitle = styled.h2<{ $w?: string }>`
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 0 0 0.5em rgba(0, 149, 255, 0.9),
    0 0 1.25em rgba(0, 149, 255, 0.5);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $w }) => $w || "3rem"};
    height: 2px;
    background: #3b82f6;
  }
`;

// #endregion

export default Title;
