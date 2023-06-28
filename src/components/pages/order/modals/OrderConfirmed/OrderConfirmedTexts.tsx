import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { ORDER_CONFIRMED_MESSAGE } from "../../../../../ts/enum";

const OrderConfirmedTexts = () => {
  return (
    <OrderConfirmedTextsStyled>
      <h1>{ORDER_CONFIRMED_MESSAGE}</h1>
    </OrderConfirmedTextsStyled>
  );
};

export default OrderConfirmedTexts;

const OrderConfirmedTextsStyled = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    line-height: 95%;
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.P6};
    font-weight: ${theme.font.weights.bold};
    font-family: ${theme.font.families.stylish};
    margin: 0px;
    padding: 0px;
  }
`;
