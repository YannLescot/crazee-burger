import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { calculateTotalPrice, formatPrice } from "../../../../../utils/maths";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);

  const totalPrice = formatPrice(calculateTotalPrice(basket, menu));

  return (
    <BasketHeaderStyled>
      <p>Total</p>
      <p className="totalPrice">{totalPrice}</p>
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
