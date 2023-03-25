import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { refreshPage } from "../../../utils/window";
import Logo from "../../reusable/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  padding: 0 20px;

  .logo-order-page {
    cursor: pointer;
  }
`;
