import styled, { css, keyframes } from "styled-components";
import Image, { StaticImageData } from "next/image";
import Masonry from "react-masonry-css";
import SectionTitle from "@/components/ui/title";

import Fir from "@/assets/Il/1.jpg";
import Sec from "@/assets/Il/2.webp";
import T from "@/assets/Il/3.png";
import Fo from "@/assets/Il/4.jpg";
import Fiv from "@/assets/Il/5.png";
import Si from "@/assets/Il/6.jpeg";

import { useEffect, useRef, useState } from "react";
import { ImageDialog } from "./gallery_dialog";

const images = [
  { img: Fir, title: "WA! 블아를 아시는구나!⭐️" },
  { img: Sec, title: "탕.탕.탕.탕.탕.탕 호시르~" },
  { img: T, title: "일본풍 갬성" },
  { img: Fo, title: "수염을 깎다. 그리고 카즈사를 줍다" },
  { img: Fiv, title: "탱킹" },
  { img: Si, title: "フトスト" },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectImg, setSelectImg] = useState<{
    img: StaticImageData;
    title: string;
  } | null>(null);

  useEffect(() => {
    // if (!ref.current) return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <Section ref={ref} id="section3">
      <Container>
        <SectionTitle
          text={
            <span
              style={{
                borderBottom: "2px solid #3b82f6",
                paddingBottom: "0.5rem",
              }}
            >
              갤러리
            </span>
          }
        />
        <CarouselContainer>
          <CarouselTrack
            transform={`translateX(-${currentIndex * (100 / itemsPerView)}%)`}
          >
            {images.map((figure, i) => (
              <CarouselItem
                key={i}
                onClick={() => {
                  setSelectImg(figure);
                  setPopupOpen(true);
                }}
              >
                <FigureCard>
                  <FigureImage src={figure.img} alt={figure.toString()} />
                  <FigureInfo>
                    <FigureName>{figure.title}</FigureName>
                  </FigureInfo>
                </FigureCard>
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>
        <CarouselControls>
          <CarouselButton onClick={handlePrev} disabled={currentIndex === 0}>
            ←
          </CarouselButton>
          <CarouselButton
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            →
          </CarouselButton>
        </CarouselControls>
      </Container>
      <ImageDialog
        src={selectImg}
        open={popupOpen}
        openChange={(flag) => setPopupOpen(!flag)}
      />
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 3em;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
`;

const CarouselTrack = styled.div<{ transform: string }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${(props) => props.transform};
`;

const CarouselItem = styled.div`
  flex: 0 0 33.333%;
  padding: 0 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    flex: 0 0 50%;
  }

  @media (max-width: 420px) {
    flex: 0 0 100%;
  }
`;

const FigureCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.2);
  }
`;

const FigureImage = styled(Image)`
  width: 100%;
  height: 20em;
  object-fit: cover;
  @media (max-width: 420px) {
    height: 16em;
  }
`;

const FigureInfo = styled.div`
  padding: 1.5rem;
`;

const FigureName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const CarouselButton = styled.button<{ isActive?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#38bdf8" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#0f172a")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: "#38bdf8";
    color: white;
  }
`;
