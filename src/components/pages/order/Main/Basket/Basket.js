import React from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader className="header" />
      <div className="body">BODY</div>
      <div className="footer">FOOTER</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 9% 1fr 9%;
  background: pink;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: blue;
  }
`;
