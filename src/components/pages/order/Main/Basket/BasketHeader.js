import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { calculateTotalPrice, formatPrice } from "../../../../../utils/maths";
import { isEmpty } from "../../../../../utils/array";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);

  const totalPrice = isEmpty(basket)
    ? formatPrice(calculateTotalPrice(basket, menu))
    : formatPrice(0);

  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className="totalPrice">{totalPrice}</span>
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

  span {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.primary};
  }

  .totalPrice {
    font-weight: ${theme.font.weights.bold};
  }
`;
