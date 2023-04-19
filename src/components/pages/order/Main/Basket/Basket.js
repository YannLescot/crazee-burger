import React from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  height: 100%;
  max-height: calc(95vh - 10vh);
  position: relative;

  //Create a shadow that goes over my basket
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.light};
  }
`;
