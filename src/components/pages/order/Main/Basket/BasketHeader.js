import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);

  const totalPrice = formatPrice(
    basket.reduce((acc, product) => {
      const productInfo = menu.find((item) => item.id === product.id);
      //Make it so the price isnt taken in account when its not a number
      isNaN(productInfo.price);
      return acc + productInfo.price * product.quantity;
    }, 0)
  );

  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className="totalPrice">
        {formatPrice(
          basket.reduce((acc, product) => {
            const productInfo = menu.find((item) => item.id === product.id);
            return acc + productInfo.price * product.quantity;
          }, 0)
        )}
      </span>
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
