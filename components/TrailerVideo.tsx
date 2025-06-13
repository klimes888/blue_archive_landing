"use client";

import { useIntersectionObserver } from "@/hooks/use-intersectionObserver";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Fullscreen } from "lucide-react";
export default function TrailerVideo() {
  const [isFocusIn, setIsFocusIn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRotate, setIsRotate] = useState(false);

  const refSection5 = () => {
    const el = document.getElementById("section5");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useIntersectionObserver(videoRef, 0.6, {
    isEnter: () => {
      refSection5();
      setIsFocusIn(true);
      videoRef?.current?.play();
    },
    elseFunc: () => {
      videoRef?.current?.pause();
      setIsFocusIn(false);
    },
  });

  const handlerEvent = (flag: boolean) => {
    console.log("flag", flag);
    if (flag) {
      setIsRotate(true);
    } else {
      setIsRotate(false);
    }
  };

  const fullWidthScreen = async () => {
    if (videoRef.current) {
      await videoRef.current.requestFullscreen();
      if (screen.orientation) {
        await screen.orientation?.lock("landscape");
      }
    }
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (!isMobile || !isFocusIn) return;

    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight;

      refSection5();
      handlerEvent(isLandscape);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기에만 실행 (isFocusIn이 true일 때)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFocusIn]);

  return (
    <Layout id="section5" $isRotate={isRotate}>
      <Button
        $isRotate={!isRotate}
        onClick={async () => {
          await fullWidthScreen();
        }}
      >
        <Fullscreen size={16} color="rgba(255, 255, 255, 0.8)" />
      </Button>
      <BackgroundLayout $isRotate={isRotate} />
      <VideoWrap
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bluearch_pv6.mp4" type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </VideoWrap>
    </Layout>
  );
}

const Layout = styled.section<{ $isRotate: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 150vh;
  z-index: 1;
  ${({ $isRotate }) =>
    $isRotate &&
    css`
      /* position: fixed;
      top: 0;
      left: 0; */
      z-index: 9999;

      video {
        object-fit: cover;
      }
    `}

  @media (max-width: 430px) {
    height: 70vh;
  }
`;

const VideoWrap = styled.video`
  width: 100vw;
  height: 100%;
`;

const BackgroundLayout = styled.div<{ $isRotate: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`;

const Button = styled.div<{ $isRotate: boolean }>`
  position: absolute;
  top: 26%;
  right: 1em;
  border-radius: 0.5em;
  border: 0.15em solid rgba(255, 255, 255, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  &:active {
    border: 0.2em solid rgba(255, 255, 255, 0.5);
  }
  z-index: 99;

  @media (max-width: 850px) {
    top: 22%;
  }

  @media (max-width: 430px) {
    top: 28%;
  }
`;
