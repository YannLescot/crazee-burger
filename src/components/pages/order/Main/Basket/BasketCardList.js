import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import BasketCard from "../../../../reusable/BasketCard";
import { formatPrice } from "../../../../../utils/maths";
import { DEFAULT_IMAGE_SOURCE } from "../../../../../js/enum";

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
        const productInfo = menu.find((item) => item.id === product.id);
        return (
          <BasketCard
            key={product.id}
            imageSource={
              productInfo.imageSource
                ? productInfo.imageSource
                : DEFAULT_IMAGE_SOURCE
            }
            title={productInfo.title}
            price={formatPrice(productInfo.price)}
            quantity={product.quantity}
            onDelete={() => handleRemoveFromBasket(product.id)}
            isHoverable={isAdmin}
            isSelected={verifyIfCardIsSelected(product.id)}
            onClick={() => selectProductToEdit(product.id)}
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
