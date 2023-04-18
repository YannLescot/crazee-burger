import React from "react";
import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <div className="total">TOTAL</div>
        <div className="price">PRICE</div>
      </div>
      <div className="body">BODY</div>
      <div className="footer">FOOTER</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 9% 1fr 9%;
  background: pink;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    background: red;

    .total {
      background: yellow;
    }

    .price {
      background: orange;
    }
  }

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
