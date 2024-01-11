import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const MenuBody = styled.div`
  width: 185px;
  height: 100vh;
  position: absolute;
  background-color: var(--main-green);
  color: var(--main-white);
  padding: 20px 32px 0 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    width: 300px;
  }
`;

export const ImgWrp = styled.div`
  width: 205px;
  height: 318px;
  background-color: inherit;
  margin-left: -32px;
  overflow: hidden;

  @media ${devices.tablet} {
    width: 498px;
    height: 435px;
    margin-left: -112px;
  }
`;

export const ImgStyled = styled.img`
  width: 363px;
  height: 290px;
  object-fit: cover;

  @media ${devices.tablet} {
    width: 498px;
    height: 435px;
  }
`;

export const UserBarIconWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
