import React, { forwardRef, MouseEvent, useRef, useState } from "react";
import styled from "styled-components";

import Image from "next/image";

interface Props {
  layoutInfo: Record<string, number> | null;
}

const MoveCharacter = ({ layoutInfo }: Props) => {
  return (
    <MoveImageWrap $layoutInfo={layoutInfo}>
      <Image src="" alt="" />
    </MoveImageWrap>
  );
};

const MoveImageWrap = styled.div<{ $layoutInfo: Props["layoutInfo"] }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: ${({ $layoutInfo }) =>
    `rotateX(${$layoutInfo?.rotateX || 0}deg) rotateY(${
      $layoutInfo?.rotateY || 0
    }deg) translateX(-50%)`};
  transform-origin: center center;
  height: 80vh;
  width: 80%;
  object-fit: contain;
  background-color: blue;
  transition: transform 0.3s ease-in-out;
  z-index: 0;
`;

export default MoveCharacter;
