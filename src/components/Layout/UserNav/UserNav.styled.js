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
  width: 110px;
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  color: var(--main-black);
  font-family: "Fixel Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: color 0.4s;

  &:hover {
    color: var(--green-hover);
  }

  &.active {
    border-radius: 15px;
    background-color: var(--main-green);
    color: var(--main-white);
  }
`;
