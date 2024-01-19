import styled from "styled-components";
import { devices } from "../../../constants/breakpoints";

export const StatisticsWrp = styled.div`
display: flex;
gap: 8px;
margin-top: 40px;
margin-bottom: 8px;
align-items: center;
/* justify-content: center; */
`

export const StatisticsTitle = styled.p`
color: rgba(18, 20, 23, 0.50);
font-family: "Fixel Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;

@media ${devices.tablet}{
    font-size: 16px; 
}
`

export const StatisticsNumber = styled.p`
color: var(--main-black);
font-family: "Fixel Display";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;

`