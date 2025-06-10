"use client";

import { useIntersectionObserver } from "@/hooks/use-intersectionObserver";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export default function TrailerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRotate, setIsRotate] = useState(false);

  useIntersectionObserver(videoRef, 0.4, {
    isEnter: () => {
      const el = document.getElementById("section5");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  });

  useIntersectionObserver(videoRef, 0.8, {
    isEnter: () => {
      videoRef?.current?.play();
    },
    elseFunc: () => {
      videoRef?.current?.pause();
    },
  });

  const handlerEvent = (flag: boolean) => {
    const body = document.body;
    const html = document.documentElement;
    videoRef?.current?.play();
    if (flag) {
      // 가로 모드: 스크롤 막고 비디오 풀스크린
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      setIsRotate(true);
    } else {
      // 세로 모드: 원복
      body.style.overflow = "";
      html.style.overflow = "";
      setIsRotate(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      handlerEvent(isLandscape);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 실행

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout id="section5" $isRotate={isRotate}>
      <Button
        $isRotate={!isRotate}
        onClick={() => {
          setIsRotate(!isRotate);
          handlerEvent(!isRotate);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="1 4 1 10 7 10"></polyline>
          <path d="M3.51 15a9 9 0 1 0 .49-5.5L1 10"></path>
        </svg>
      </Button>
      <BackgroundLayout $isRotate={isRotate} />
      <video ref={videoRef} controls={false} autoPlay loop muted playsInline>
        <source src="/bluearch_pv6.mp4" type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </Layout>
  );
}

const Layout = styled.section<{ $isRotate: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ${({ $isRotate }) =>
    $isRotate &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      background: black;

      video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
      }
    `}
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
  top: ${({ $isRotate }) => ($isRotate ? "32%" : "2em")};
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
`;
