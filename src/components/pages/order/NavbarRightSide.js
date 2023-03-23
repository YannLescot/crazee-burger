import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import UserProfile from "./UserProfile";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled>
      {/*<div className="adminbutton"> Admin Button</div>*/}
      <UserProfile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  gap: ${theme.spacing.xl};
  padding-right: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  /*.adminbutton {
    background-color: red;
  }*/
`;
