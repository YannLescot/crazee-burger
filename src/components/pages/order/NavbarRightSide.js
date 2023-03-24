import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

export default function NavbarRightSide() {
  const { username } = useParams();

  return (
    <NavbarRightSideStyled>
      {/*<div className="adminbutton"> Admin Button</div>*/}
      <UserProfile username={username} />
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
