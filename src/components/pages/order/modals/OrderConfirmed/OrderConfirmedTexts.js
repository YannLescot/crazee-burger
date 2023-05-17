import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const OrderConfirmedTexts = () => {
  return (
    <OrderConfirmedTextsStyled>
      <h1>Chaud devant !</h1>
      <p>Votre commande est partie en cuisine ! 🍜</p>
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
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.HUGE};
    font-weight: ${theme.font.weights.bold};
    font-family: ${theme.font.families.stylish};
    margin: 0px;
    padding: 0px;
  }

  p {
    font-size: ${theme.font.sizes.P4};
    letter-spacing: 0.3px;
    font-family: ${theme.font.families.stylish};
    font-weight: ${theme.font.weights.regular};
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px;
  }
`;
