import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasketMessage from "./EmptyBasketMessage";
import BasketCards from "./BasketCards";
import { isEmpty } from "../../../../../utils/array";
import EmptyButton from "./EmptyButton";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketBodyStyled>
      {isBasketEmpty ? <EmptyBasketMessage /> : <BasketCards />}
      <EmptyButton />
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
