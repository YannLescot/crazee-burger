import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <LeftSide />
      <RightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: ${theme.colors.background_white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
