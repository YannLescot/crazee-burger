import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { calculateTotalPrice, formatPrice } from "../../../../../utils/maths";
import { isEmpty } from "../../../../../utils/array";
import CasinoText from "../../../../reusable/CasinoText";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);

  const totalPrice = isEmpty(basket)
    ? formatPrice(0)
    : formatPrice(calculateTotalPrice(basket, menu));

  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <CasinoText
        className="totalPrice"
        count={totalPrice}
        alignment={"right"}
      />
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

  .totalPrice,
  span {
    font-weight: ${theme.font.weights.regular};
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.primary};
    text-align: right;
  }
`;
