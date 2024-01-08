import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";
import { NavLink } from "react-router-dom";

export const RegisterStyled = styled.div`
  max-width: 375px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 25px 25px 0px 0px;
  background: var(--secondary-background);

  @media ${devices.tablet} {
    max-width: 628px;
    padding: 48px 64px;
    gap: 32px;
    border-radius: 30px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${devices.tablet} {
    gap: 18px;
  }
`;

export const TitleStyled = styled.h1`
  font-family: "FixelDisplay";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(32 / 30);
  letter-spacing: -0.6px;
  margin-bottom: 16px;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: calc(48 / 40);
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const PStyled = styled.p`
  color: var(--secondary-black);
  font-family: "FixelDisplay";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 16);

  @media ${devices.tablet} {
    font-size: 20px;
    line-height: calc(30 / 20);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 18px;
  color: var(--main-black);
  background-color: inherit;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`;

export const InputPasswordWrp = styled.div`
  max-width: 375px;
  position: relative;
  @media ${devices.tablet} {
    max-width: 628px;
  }
`;

export const IconWrp = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
`;

export const RegisterButtonStyled = styled.button`
  display: inline-flex;
  padding: 16px 18px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;
  background-color: var(--main-green);
  outline: none;
  color: var(--main-white);
  font-family: "Fixel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(24 / 16);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: var(--green-hover);
  }

  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(28 / 18);
  }
`;

export const StyledLink = styled(NavLink)`
  color: rgba(18, 20, 23, 0.5);
  font-family: "Fixel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(24 / 16);
  text-decoration: underline;
  margin: 0 auto;

  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(28 / 18);
  }
`;
