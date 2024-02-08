import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const ButtonWrp = styled.div`
display: flex;
gap: 16px;
align-items: center;

`

export const ButtonAddWordStyled = styled.button`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
color: var(--main-black);
font-family: "Fixel Display";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: calc(24/16);
border: none;
background-color: transparent;
outline: none;
cursor: pointer;
`

export const LinkStyled = styled(NavLink)`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
color: var(--main-black);
font-family: "Fixel Display";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: calc(24/16);
border: none;
background-color: transparent;
outline: none;
cursor: pointer;

`