import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import HorizontalCard from "../../../../reusable/HorizontalCard";
import { formatPrice } from "../../../../../utils/maths";
import { getImageSource } from "../../../../../utils/falsy";
import { findObjectById } from "../../../../../utils/array";
import { BasketProduct } from "../../../../../utils/interfaces";

export default function BasketCards() {
  const {
    basket,
    menu,
    handleRemoveFromBasket,
    isAdmin,
    isCardSelected,
    selectProductToEdit,
  } = useContext(OrderContext);

  const handleOnDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.stopPropagation();
    handleRemoveFromBasket(id);
  };

  return (
    <BasketCardsStyled>
      {basket.map((product: BasketProduct) => {
        const productInfo = findObjectById(product.id, menu);
        !productInfo && handleRemoveFromBasket(product.id);
        const isSelected = isCardSelected(product.id);
        return (
          <HorizontalCard
            key={product.id}
            imageSource={getImageSource(productInfo.imageSource)}
            title={productInfo.title}
            price={formatPrice(productInfo.price)}
            quantity={product.quantity}
            onDelete={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleOnDelete(e, product.id)
            }
            isClickable={isAdmin}
            isSelected={isSelected}
            onClick={isAdmin ? () => selectProductToEdit(product.id) : () => {}}
          />
        );
      })}
    </BasketCardsStyled>
  );
}

const BasketCardsStyled = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
