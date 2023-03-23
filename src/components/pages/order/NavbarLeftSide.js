import React from "react";
import styled from "styled-components";
import Logo from "../../reusable/Logo";
import { refreshPage } from "../../../utils/window";

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  button {
    background: none;
    border: none;

    cursor: pointer;
  }

  .logo-order-page {
    cursor: pointer;
  }
`;
