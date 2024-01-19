import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const FilterWrp = styled.div`
  width: 343px;
  display: flex;
  gap: 8px;
  flex-direction: column;


  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const InputWrp = styled.div`
  width: 343px;
  position: relative;

  @media ${devices.tablet} {
    width: 274px;
  }
`;
export const InputStyled = styled.input`
  width: 343px;
  padding: 12px 24px;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  @media ${devices.tablet} {
    width: 274px;
  }
`;
export const IconWrp = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
  width: 20px;
  height: 20px;
`;

export const SelectWrp = styled.div`
  width: 343px;
  padding: 12px 20px;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  @media ${devices.tablet} {
    width: 164px;
    padding: 10px 10px;
  }
`;

export const SelectStyled = styled.select`
  width: 300px;
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

`

export const RadioBtnLabel = styled.label`
display: flex;
gap: 8px;
align-items: center;
`

export const RadioInputStyled = styled.input`
display: none;
`
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
}
`
