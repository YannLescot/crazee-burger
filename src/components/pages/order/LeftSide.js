import React from "react";
import styled from "styled-components";
import Logo from "../../reusable/Logo";

export default function LeftSide() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <LeftSideStyled>
      <button onClick={handleClick}>
        <Logo scale="0.85" />
      </button>
    </LeftSideStyled>
  );
}

const LeftSideStyled = styled.div`
  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
