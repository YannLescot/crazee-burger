import React from "react";
import styled from "styled-components";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <div className="total">TOTAL</div>
      <div className="price">PRICE</div>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
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
`;
