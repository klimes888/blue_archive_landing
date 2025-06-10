import styled, { css, keyframes } from "styled-components";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

interface Props {
  open: boolean;
  openChange: (flag: boolean) => void;
  src: {
    img: StaticImageData;
    title: string;
  } | null;
}

export const ImageDialog = ({ open, openChange, src }: Props) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // dummy layout
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  if (!open || !src) return <></>;

  return (
    <Layout
      onClick={(e) => {
        openChange(open);
      }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalImgInner>
          <ImageItem src={src?.img} alt="" />
        </ModalImgInner>
        {src?.title && <Title>{src?.title}</Title>}
      </Modal>
    </Layout>
  );
};

const openModal = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  60% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

const Layout = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-content: end; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 99;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: white;
  z-index: 999;
  animation: ${openModal} 0.5s cubic-bezier(0.22, 1.61, 0.36, 1) forwards;
`;

const ModalImgInner = styled.div`
  display: flex;
  max-width: 90vw;
  max-height: 90vh;
`;

const ImageItem = styled(Image)`
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
const Title = styled.p`
  padding: 0.25em 0.5em;
  font-size: 1em;
  font-weight: 500;
  color: #222;
`;
