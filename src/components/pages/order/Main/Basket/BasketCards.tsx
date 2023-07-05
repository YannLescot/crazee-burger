import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import HorizontalCard from "../../../../reusable/HorizontalCard";
import { formatPrice } from "../../../../../utils/maths";
import { getImageSource } from "../../../../../utils/falsy";
import { findObjectById } from "../../../../../utils/array";
import { BasketProduct, Product } from "../../../../../utils/interfaces";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketCardAnimation } from "../../../../../keyframes/animations";

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
      <TransitionGroup className="transition-container">
        {basket.map((product: BasketProduct) => {
          const productInfo = findObjectById(product.id, menu) as Product;
          !productInfo && handleRemoveFromBasket(product.id);
          const isSelected = isCardSelected(product.id);
          if (!productInfo) return null;
          return (
            <CSSTransition
              appear={true}
              key={product.id}
              timeout={300}
              classNames="basket-card"
            >
              <HorizontalCard
                imageSource={getImageSource(productInfo.imageSource)}
                title={productInfo.title}
                price={formatPrice(productInfo.price)}
                quantity={product.quantity}
                onDelete={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleOnDelete(e, product.id)
                }
                isClickable={isAdmin}
                isSelected={isSelected}
                onClick={
                  isAdmin ? () => selectProductToEdit(product.id) : () => {}
                }
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketCardsStyled>
  );
}

const BasketCardsStyled = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;

  .transition-container {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${basketCardAnimation}
  }
`;
