import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function OrderNavbar() {
  return <OrderNavbarStyled></OrderNavbarStyled>;
}

const OrderNavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: ${theme.colors.background_white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
