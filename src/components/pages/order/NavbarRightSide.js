import React from "react";
import styled from "styled-components";
import UserPanel from "./UserPanel";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled>
      <UserPanel />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div``;
