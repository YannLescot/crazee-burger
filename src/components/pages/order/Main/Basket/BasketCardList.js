import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import BasketCard from "../../../../reusable/BasketCard";
import { formatPrice } from "../../../../../utils/maths";
import { getImageSource } from "../../../../../utils/falsy";
import { findObjectById } from "../../../../../utils/array";

export default function BasketCardList() {
  const {
    basket,
    menu,
    handleRemoveFromBasket,
    isAdmin,
    verifyIfCardIsSelected,
    selectProductToEdit,
  } = useContext(OrderContext);

  return (
    <BasketCardListStyled>
      {basket.map((product) => {
        const productInfo = findObjectById(product.id, menu);
        return (
          <BasketCard
            key={product.id}
            imageSource={getImageSource(productInfo.imageSource)}
            title={productInfo.title}
            price={formatPrice(productInfo.price)}
            quantity={product.quantity}
            onDelete={() => handleRemoveFromBasket(product.id)}
            isHoverable={isAdmin}
            isSelected={verifyIfCardIsSelected(product.id)}
            onClick={isAdmin ? () => selectProductToEdit(product.id) : null}
          />
        );
      })}
    </BasketCardListStyled>
  );
}

const BasketCardListStyled = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
