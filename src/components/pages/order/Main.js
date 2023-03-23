import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  width: 100%;
  height: 85vh;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
