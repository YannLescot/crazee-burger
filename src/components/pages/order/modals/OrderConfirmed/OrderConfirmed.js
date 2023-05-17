import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../../../theme";
import SmokingBowl from "./SmokingBowl";
import OrderConfirmedTexts from "./OrderConfirmedTexts";

const OrderConfirmed = () => {
  return (
    <OrderConfirmedStyled>
      <div className="orderConfirmedPanel">
        <OrderConfirmedTexts />
        <SmokingBowl />
      </div>
    </OrderConfirmedStyled>
  );
};

export default OrderConfirmed;

const slideInOut = keyframes`
  0% {
    transform: translateX(-120%);
  }
  8% {
    transform: translateX(0%);
  }
  92% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(180%);
  }
`;

const OrderConfirmedStyled = styled.div`
  position: absolute;
  top: 2.5vh;
  left: 10vw;
  bottom: 0;
  right: 0;
  width: 80vw;
  height: 95vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 4;

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
    background-color: ${theme.colors.primary};
    width: 65%;
    height: 65%;
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
