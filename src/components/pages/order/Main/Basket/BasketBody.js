import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";
import { checkArrayEmptiness } from "../../../../../utils/array";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);
  const isBasketEmpty = checkArrayEmptiness(basket);

  return (
    <BasketBodyStyled>
      {isBasketEmpty ? <EmptyBasket /> : <BasketCards />}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 2;
`;
