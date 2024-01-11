import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const ListWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: flex-start;
  justify-content: center;

  @media ${devices.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ELStyled = styled.a`
  color: var(--main-white);
  font-family: "Fixel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: color 0.4s;

  @media ${devices.desktop} {
    width: 110px;
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    color: var(--main-black);
  }

  &:hover {
    color: var(--green-hover);
  }

  &.active {
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--main-black);
    border-radius: 15px;
    background: var(--main-white);

    @media ${devices.desktop} {
      border-radius: 15px;
      background-color: var(--main-green);
      color: var(--main-white);
    }
  }
`;
