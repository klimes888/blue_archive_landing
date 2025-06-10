import React, { forwardRef, MouseEvent, useEffect, useRef } from "react";
import styled from "styled-components";
import Shiroko from "@/assets/shiroko.webp";
import LogoBack from "@/assets/back_logo.png";

import Image from "next/image";

const MoveCharacter = forwardRef((_, ref: any) => {
  const charaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateLayout = (
      x: number,
      y: number,
      width: number,
      height: number
    ) => {
      if (!charaRef.current) return;
      const rotateY = (x / width - 0.5) * 15;
      const rotateX = (y / height - 0.5) * -15;
      charaRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const getClientXY = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches.length > 0) {
        return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
      }
      return {
        clientX: (e as MouseEvent).clientX,
        clientY: (e as MouseEvent).clientY,
      };
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      // 모바일 터치 이벤트에서 스크롤 방지
      if ("touches" in e) {
        e.preventDefault();
      }
      if (!charaRef.current || !ref.current) return;

      const rect = charaRef.current.getBoundingClientRect();
      const { clientX, clientY } = getClientXY(e);

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() =>
        updateLayout(x, y, rect.width, rect.height)
      );
    };

    const handleReset = () => {
      if (!charaRef.current) return;
      charaRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    const el = ref.current;
    if (el) {
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("touchmove", handleMove, { passive: false });
      el.addEventListener("mouseleave", handleReset);
      el.addEventListener("touchend", handleReset);
      el.addEventListener("touchcancel", handleReset);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("touchmove", handleMove);
        el.removeEventListener("mouseleave", handleReset);
        el.removeEventListener("touchend", handleReset);
        el.removeEventListener("touchcancel", handleReset);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <MoveImageWrap>
      <MoveImageWrapInner ref={charaRef}>
        {/* {cardList?.map(({ title, desc, pos }) => (
          <ShadowBox pos={pos}>
            <ShadowBoxInner>
              <CardTitle>{title}</CardTitle>
              <CardDesc>{desc}</CardDesc>
            </ShadowBoxInner>
          </ShadowBox>
        ))} */}
        <LogoImageWrap>
          <LogoImage
            src={LogoBack}
            alt="LogoBack"
            width={960}
            height={460}
            priority
            unoptimized
          />
        </LogoImageWrap>
        <ShirokoImageDiv>
          <ShirokoImage
            src={Shiroko}
            alt="Shiroko"
            width={400}
            height={800}
            priority
            unoptimized
          />
        </ShirokoImageDiv>
      </MoveImageWrapInner>
    </MoveImageWrap>
  );
});

const MoveImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  z-index: 0;
`;

const MoveImageWrapInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(0deg) rotateX(0deg);
`;

const ShirokoImageDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate3d(-50%, -50%, 1em);
  transform-style: preserve-3d;
  width: 22%;
  object-fit: contain;
  z-index: 0;

  @media (max-width: 430px) {
    width: 50%;
  }
`;

const ShirokoImage = styled(Image)`
  width: 100%;
`;

const LogoImageWrap = styled.div`
  position: absolute;
  bottom: 35%;
  left: 50%;
  display: flex;
  transform: translate3d(-50%, 50%, 10em);
  transform-style: preserve-3d;
  width: 35%;
  z-index: 10;
  filter: drop-shadow(0px 0px 0.5em rgba(255, 255, 255, 0.3));
  @media (max-width: 430px) {
    bottom: 42%;
    width: 60%;
  }
`;

const LogoImage = styled(Image)`
  width: 100%;
  object-fit: contain;
`;

const CardTitle = styled.h2`
  font-size: 1em;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
`;
const CardDesc = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.25em;
  font-size: 0.8em;
`;

export default MoveCharacter;
