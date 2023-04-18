import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <p className="total">TOTAL</p>
      <p className="price">0,00 €</p>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  background: ${theme.colors.background_dark};

  p {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.primary};
  }

  .total {
    font-weight: ${theme.font.weights.regular};
  }

  .price {
    font-weight: ${theme.font.weights.bold};
  }
`;
