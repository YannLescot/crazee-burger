import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function OrderBody() {
  return <OrderBodyStyled></OrderBodyStyled>;
}

const OrderBodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.extraRound};
  width: 1400px;
  height: 95vh;
`;
