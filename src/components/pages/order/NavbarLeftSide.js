import React from "react";
import styled from "styled-components";
import Logo from "../../reusable/Logo";

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Logo
        className={"logo-order-page"}
        onClick={() => window.location.reload()}
      />
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
