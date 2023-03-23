import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import OrderNavbar from "./OrderNavbar";

export default function OrderBody() {
  return (
    <OrderBodyStyled>
      <OrderNavbar />
    </OrderBodyStyled>
  );
}

const OrderBodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.extraRound};
  width: 1400px;
  height: 95vh;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
