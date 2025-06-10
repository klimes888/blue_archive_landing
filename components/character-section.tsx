"use client";

import { forwardRef } from "react";
import styled from "styled-components";
import CharacterCard from "./character-card";
import SectionTitle from "@/components/ui/title";

// assets
import SHIROKO from "@/assets/SD/shiroko.png";
import AYANE from "@/assets/SD/ayane.png";
import HOSHINO from "@/assets/SD/hoshino.png";
import NONOMI from "@/assets/SD/nonomi.png";
import SERIKA from "@/assets/SD/serika.png";

const characters = [
  {
    name: "호시노",
    image: HOSHINO,
    quote: "낮잠 중 방해금지",
    role: "대책위원회 - 부장",
  },
  {
    name: "시로코",
    image: SHIROKO,
    quote: "사이클링 파티 모집 중⋯ (1/5)",
    role: "대책위원회",
  },
  {
    name: "세리카",
    image: SERIKA,
    quote: "대책위원회 쿠로미 세리카입니다",
    role: "대책위원회",
  },
  {
    name: "노노미",
    image: NONOMI,
    quote: "우리 아이들 모~두 귀여우니까",
    role: "대책위원회",
  },
  {
    name: "아야네",
    image: AYANE,
    quote: "상식이 존중받는 동아리, 대책위원회입니다",
    role: "대책위원회",
  },
];

const CharacterSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer ref={ref} id="section2">
      <Container>
        <SectionTitle
          w="6rem"
          text={
            <span
              style={{
                borderBottom: "2px solid #3b82f6",
                paddingBottom: "0.5rem",
              }}
            >
              아비도스 고등학교
            </span>
          }
        />

        <CharacterGrid>
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </CharacterGrid>
      </Container>
    </SectionContainer>
  );
});

CharacterSection.displayName = "CharacterSection";

export default CharacterSection;

const SectionContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  margin-bottom: 2em;
  background: linear-gradient(
    to bottom,
    #000 0%,
    rgba(30, 58, 138, 0.3) 50%,
    #000 100%
  );
`;

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
