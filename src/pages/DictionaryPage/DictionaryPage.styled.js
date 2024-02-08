import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

export const PageWrp = styled.div`
padding: 32px 16px;
`

export const DashboardWrp = styled.div`
@media ${devices.desktop} {
    width: 1240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


`

export const StatisticBtnWrp = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 8px;
justify-content: center;

@media ${devices.tablet} {
    align-items: center;
    flex-direction: row;
    gap: 16px;
    margin-top: 28px;
}

`