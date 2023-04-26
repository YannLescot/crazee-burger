import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketCardList from "./BasketCardList";
import { isEmpty } from "../../../../../utils/array";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {isEmpty(basket) ? <EmptyBasket /> : <BasketCardList />}
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
