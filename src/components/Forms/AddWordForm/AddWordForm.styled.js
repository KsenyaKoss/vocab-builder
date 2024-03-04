import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const FormWrpStyled = styled.div`

@media ${devices.tablet} {
  margin-top: 12px;
  }


`

export const SelectWrp = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-left: 20px;
  padding-right: 100px;
  padding-bottom: 12px;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  @media ${devices.tablet} {
    border: 1px solid rgba(252, 252, 252, 0.3);
    border-radius: 15px;
    padding: 12px 24px;
    width: 204px;
    height: 48px;
  }
`;

export const SelectStyled = styled.select`
  width: 100%;
  border: none;
  outline: none;
  color: var(--main-black);
  font-family: "Fixel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media ${devices.tablet} {
    width: 145px;
  }
`;

export const RadioBtnWrp = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 8px;
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const RadioInputStyled = styled.input`
  display: none;
`;
export const CustomRadioBtnWrpStyled = styled.div`
  width: 18px;
  height: 18px;
  color: var(--main-green);
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 18px;
    height: 18px;
    fill: var(--main-white);
  }
`;
