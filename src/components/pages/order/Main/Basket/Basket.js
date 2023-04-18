import React from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";

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
  grid-template-rows: 9% 1fr 9%;
`;
