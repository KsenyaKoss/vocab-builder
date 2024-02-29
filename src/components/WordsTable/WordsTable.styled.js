import styled from "styled-components";
import { devices } from "../../constants/breakpoints";

export const TableWrp = styled.tbody`
   margin-top: 32px;


  @media ${devices.tablet} {
    max-width: 704px;
    margin-top: 28px;
  }

  @media ${devices.desktop} {
    max-width: 1440px;
  }
`;

export const HeaderTableStyled = styled.tr`
  display: flex;
`;

export const CellStyled = styled.td`
  padding: 16px 14px;
  border: 1px solid #dbdbdb;
  flex-grow: 1;
  color: var(--main-black);
  font-family: "FixelDisplay";
  font-weight: 500;
  font-size: 16px;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--secondary-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 116px;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }

  @media ${devices.tablet} {
    width: 160px;
  }

  @media ${devices.desktop} {
    padding: 22px;
   width: 252px;
    font-size: 20px;
  }
`;


export const RowsWrpStyled = styled.tr`
display: flex;

`

// export const CellStyled = styled.div`
// padding: 16px 10px 16px 14px;
// border: 1px solid #dbdbdb;

// &:first-child{
//   border-left: none;
// }

// &:last-child{
//   border-right: none;
// }


// @media ${devices.desktop} {
//     padding: 22px;
//     max-width: 280px;
//     flex-grow: 1;
//   }


// `

