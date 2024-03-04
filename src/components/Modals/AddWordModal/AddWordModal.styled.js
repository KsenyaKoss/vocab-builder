import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary-background);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const ModalBodyStyled = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  max-width: 342px;
  padding: 48px 16px;
  background-color: var(--main-green);
  color: var(--main-white);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${devices.tablet} {
    max-width: 628px;
    padding: 48px 64px;
    gap: 20px;
  }
`;

export const ModalTitleStyled = styled.h1`
  font-family: "FixelDisplay";
  font-weight: 600;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: 120%;
  }
`;

export const TextStyled = styled.p`
  font-family: "SFProText";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
