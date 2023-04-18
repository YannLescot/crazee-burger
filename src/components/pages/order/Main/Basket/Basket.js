import React from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <div className="body">BODY</div>
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 9% 1fr 9%;
  background: pink;

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: blue;
  }
`;
