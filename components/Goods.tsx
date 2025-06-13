import styled, { css, keyframes } from "styled-components";
import Image, { StaticImageData } from "next/image";
import Masonry from "react-masonry-css";
import SectionTitle from "@/components/ui/title";

import Fir from "@/assets/Fi/1.jpg";
import Sec from "@/assets/Fi/2.jpg";
import T from "@/assets/Fi/3.jpg";
import Fo from "@/assets/Fi/4.jpg";
import Fiv from "@/assets/Fi/5.jpeg";
import Si from "@/assets/Fi/6.jpg";
import Sev from "@/assets/Fi/7.webp";
import Ei from "@/assets/Fi/8.png";
import Ni from "@/assets/Fi/9.jpg";
import Te from "@/assets/Fi/10.jpg";
import El from "@/assets/Fi/11.jpg";
import Tw from "@/assets/Fi/12.png";
import { useEffect, useState } from "react";
import { ImageDialog } from "./gallery_dialog";
import { useIsMobile } from "@/hooks/use-mobile";

// const images = [Fir, Sec, T, Fo, Fiv, Si, Sev, Ei, Ni, Te, El, Tw];
const images = [
  { img: Fir, title: "키사키 피규어" },
  { img: Sec, title: "" },
  { img: T, title: "코하루 피규어" },
  { img: Fo, title: "" },
  { img: Fiv, title: "발키리 야상 의상" },
  { img: Si, title: "" },
  { img: Sev, title: "" },
  { img: Ei, title: "" },
  { img: Ni, title: "" },
  { img: Te, title: "인형" },
  { img: El, title: "" },
  { img: Tw, title: "" },
];

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -1rem; /* gutter */
  width: auto;

  .my-masonry-grid_column {
    padding-left: 1rem; /* gutter */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 1rem;
  }
`;

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 3,
  500: 2,
};

export default function Goods() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [list, setList] = useState(images);
  const [selectImg, setSelectImg] = useState<{
    img: StaticImageData;
    title: string;
  } | null>(null);

  const isMobile = useIsMobile();
  useEffect(() => {
    const result = isMobile && isCollapse ? list.slice(0, 6) : images;
    setList(result);
  }, [isMobile, isCollapse]);

  return (
    <Layout id="section4">
      <SectionTitle
        text={
          <span
            style={{
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "0.5rem",
            }}
          >
            컬렉션 섹션
          </span>
        }
      />
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {list.map((src, i) => (
          <ImageLayout
            key={i}
            $hid={!!src.title}
            onClick={() => {
              setSelectImg(src);
              setPopupOpen(true);
            }}
          >
            <ImageInfo>
              <ImageTitle>{src.title}</ImageTitle>
            </ImageInfo>
            <ItemImage src={src.img} alt="item" />
          </ImageLayout>
        ))}
      </StyledMasonry>
      <ButtonWrap $isColl={isCollapse}>
        {isCollapse && <GradientWrap />}
        <Dummy $isColl={isCollapse}>
          <Button
            onClick={() => {
              setIsCollapse(!isCollapse);
            }}
          >
            {isCollapse ? "펼쳐보기" : "접기"}
          </Button>
        </Dummy>
      </ButtonWrap>
      <ImageDialog
        src={selectImg}
        open={popupOpen}
        openChange={(flag) => setPopupOpen(!flag)}
      />
    </Layout>
  );
}

const cardHover = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

const Layout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 3em;
`;

const ImageLayout = styled.div<{ $hid: boolean }>`
  display: flex;
  width: 100%;
  border-radius: 0.5em;
  overflow: hidden;
  /* background: linear-gradient(
    145deg,
    rgba(26, 26, 46, 0.8),
    rgba(10, 10, 35, 0.9)
  ); */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    display: ${({ $hid }) => ($hid ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 50%
    ); */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    border-color: rgba(0, 212, 255, 0.6);
    box-shadow: 0 10px 30px rgba(0, 149, 255, 0.2);
  }

  &:hover::before {
    animation-duration: 1s;
  }
`;

const ItemImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.25s ease;

  &:hover {
    animation: ${cardHover} 0.3s ease forwards;
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: white;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${ImageLayout}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ButtonWrap = styled.div<{ $isColl: boolean }>`
  position: absolute;
  bottom: ${({ $isColl }) => ($isColl ? "0" : "-3em")};
  left: 0;
  right: 0;
  display: none;
  flex-direction: column;
  width: 100%;
  height: ${({ $isColl }) => ($isColl ? "10em" : "auto")};
  z-index: 9;
  @media (max-width: 430px) {
    display: flex;
  }
`;

const GradientWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Dummy = styled.div<{ $isColl: boolean }>`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  background-color: ${({ $isColl }) => ($isColl ? "#000" : "transparent")};
`;

const Button = styled.button`
  position: relative;
  background: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)) padding-box,
    linear-gradient(45deg, #3b82f6, #06b6d4) border-box;
  border: 2px solid transparent;
  padding: 0.4em 1em;
  border-radius: 0.45em;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    border-radius: inherit;
    z-index: -1;
  }
`;

const ImageTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;
