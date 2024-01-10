import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

export const PageStyled = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
    gap: 98px;
    padding: 140px 38px 0 38px;
  }

  @media ${devices.desktop} {
    flex-direction: row-reverse;
    gap: 80px;
  }
`;                              

export const HeroWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const ImgWrp = styled.div`
  width: 247px;
  height: 191px;

  @media ${devices.tablet} {
    display: none;
  }

  @media ${devices.desktop} {
    display: block;
    width: 498px;
    height: 435px;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
`;

export const ListStyled = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    gap: 12px;
  }

  & li:not(:first-child) {
    list-style-type: disc;
  }
`;

export const ElementStyled = styled.li`
  color: var(--secondary-black);
  text-align: center;
  font-family: "Fixel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
