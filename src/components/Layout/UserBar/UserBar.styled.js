import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const UserBarWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media ${devices.tablet} {
    gap: 28px;
  }
`;

export const UserWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media ${devices.tablet} {
    gap: 16px;
  }
`;

export const NameStyled = styled.p`
  color: inherit;
  font-family: "Fixel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);

  @media ${devices.tablet} {
    font-size: 20px;
    line-height: normal;
    }
`;

export const AvatarWrp = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--main-green);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 48px;
    height: 48px;
  }

  & svg {
    width: 25px;
    height: 25px;

    @media ${devices.tablet} {
      width: 24px;
      height: 24px;
    }
  }
`;
