import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasketMessage from "./EmptyBasketMessage";
import BasketCards from "./BasketCards";
import { isEmpty } from "../../../../../utils/array";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);
  const [isBasketEmpty, setIsBasketEmpty] = useState(isEmpty(basket));

  useEffect(() => {
    if (isEmpty(basket)) {
      const timeout = setTimeout(() => {
        setIsBasketEmpty(true);
      }, 450);

      return () => clearTimeout(timeout);
    } else {
      setIsBasketEmpty(false);
    }
  }, [basket]);

  return (
    <BasketBodyStyled>
      {isBasketEmpty ? <EmptyBasketMessage /> : <BasketCards />}
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
