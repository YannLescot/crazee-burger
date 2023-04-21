import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className="price">0,00 €</span>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  background: ${theme.colors.background_dark};
  letter-spacing: 2px;

  p {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.primary};
  }

  .price {
    font-weight: ${theme.font.weights.bold};
  }
`;
