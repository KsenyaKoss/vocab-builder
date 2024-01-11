import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";


export const HeaderWrp = styled.div`
max-width: 1240px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px 16px;
margin: 0 auto;

`

export const LogoWrp = styled.div`
display: flex;
gap: 16px;
align-items: center;

`
export const ImgWrp = styled.div`
width: 36px;
height: 36px;

@media ${devices.tablet}{
    width: 40px;
    height: 40px;
}
`

export const LogoTitle = styled.p`
color: var(--main-black);
font-family: 'Fixel Display';
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: calc(24/18); 
`

export const BurgerWrp = styled.div`
  @media ${devices.desktop} {
    display: none;
  }
  & svg {
    width: 32px;

    @media ${devices.tablet} {
      width: 40px;
    }
  }
`;
