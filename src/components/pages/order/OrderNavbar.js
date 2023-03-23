import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from "../../reusable/Logo";
import UserPanel from "./UserPanel";

export default function OrderNavbar() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <OrderNavbarStyled>
      <button onClick={handleClick}>
        <Logo scale="0.85" />
      </button>
      <UserPanel />
    </OrderNavbarStyled>
  );
}

const OrderNavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 1400px;
  background-color: ${theme.colors.background_white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
