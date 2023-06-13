import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderConfirmedTexts from "./OrderConfirmedTexts";
import { slideInOut } from "./slideAnimation";

const OrderConfirmed = () => {
  return (
    <OrderConfirmedStyled>
      <div className="orderConfirmedPanel">
        <OrderConfirmedTexts />
        <img src="/images/orderOK.png" alt="orderOK" />
      </div>
    </OrderConfirmedStyled>
  );
};

export default OrderConfirmed;

const OrderConfirmedStyled = styled.div`
  position: absolute;
  top: 2.5vh;
  left: 10vw;
  bottom: 0;
  right: 0;
  width: 80vw;
  height: 95vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 6;

  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  opacity: 1;
  pointer-events: none;
  transition: all 0.3s ease-out;
  overflow: hidden;

  .orderConfirmedPanel {
    background-color: ${theme.colors.white};
    width: 65%;
    height: 55%;
    border-radius: ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-rows: 1fr 3fr;
    align-items: center;
    justify-items: center;
    padding: 30px;
    box-sizing: border-box;

    animation: ${slideInOut} 5s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
