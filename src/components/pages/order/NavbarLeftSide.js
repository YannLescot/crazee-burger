import React from "react";
import styled from "styled-components";
import Logo from "../../reusable/Logo";

export default function NavbarLeftSide() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <NavbarLeftSideStyled>
      <button onClick={handleClick}>
        <Logo scale="0.85" />
      </button>
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
